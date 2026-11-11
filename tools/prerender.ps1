# توليد HTML مسبق (Prerender) لكل صفحات الموقع
# يكتب محتوى الصفحة الكامل داخل <div id="app"> في كل ملف HTML، حتى يقرأه جوجل وأدوات الذكاء الاصطناعي دون JavaScript.
# الاستخدام: شغل خادما محليا من فولدر المشروع على المنفذ 8765 (python -m http.server 8765)، ثم:
#   powershell -ExecutionPolicy Bypass -File tools\prerender.ps1
# أعد تشغيله بعد أي تعديل في content.js أو main.js أو config.js، ثم انشر.

$root = Split-Path -Parent $PSScriptRoot
$port = 8765
$pages = @("index.html", "services.html", "contact.html", "404.html", "en/index.html", "en/services.html", "en/contact.html")

$edge = (Get-Command msedge -ErrorAction SilentlyContinue).Source
if (-not $edge) { $edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" }
$tmp = Join-Path $env:TEMP ("prerender-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Force $tmp | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)

foreach ($p in $pages) {
  $out = Join-Path $tmp ("dom-" + ($p -replace "[/\\]", "_"))
  Start-Process -FilePath $edge -ArgumentList "--headless=new", "--disable-gpu", "--user-data-dir=$tmp\profile", "--virtual-time-budget=5000", "--dump-dom", "http://localhost:$port/$p" -RedirectStandardOutput $out -RedirectStandardError "$out.err" -Wait -NoNewWindow
  $dom = [System.IO.File]::ReadAllText($out, [System.Text.Encoding]::UTF8)

  $m = [regex]::Match($dom, '(?s)<div id="app">.*?</div>(?=\s*<script src="[^"]*config.js[^"]*")')
  if (-not $m.Success) { Write-Warning "لم يتم العثور على المحتوى في $p"; continue }
  $rendered = $m.Value
  if ($rendered.Length -lt 5000) { Write-Warning "المحتوى قصير بشكل غير متوقع في $p"; continue }

  $file = Join-Path $root $p
  $src = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
  $sm = [regex]::Match($src, '(?s)<div id="app">.*?</div>(?=\s*<script src="[^"]*config.js[^"]*")')
  if (-not $sm.Success) { Write-Warning "لم يتم العثور على #app في الملف $p"; continue }
  $new = $src.Substring(0, $sm.Index) + $rendered + $src.Substring($sm.Index + $sm.Length)
  [System.IO.File]::WriteAllText($file, $new, $utf8)
  "{0}: {1:N0} حرف" -f $p, $rendered.Length
}
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
