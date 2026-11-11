# يحول اللوجو الأصلي إلى نسخ شفافة (كحلي وأبيض) مقصوصة داخل assets/img
# التشغيل من فولدر المشروع:  powershell -ExecutionPolicy Bypass -File tools\process-logo.ps1
param([string]$Source = "tools\brand-source\logo-original.png")
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Imaging; using System.Drawing.Drawing2D;
using System.Runtime.InteropServices; using System.Collections.Generic;
public static class LogoTool {
  public static string Run(string src, string outDir) {
    var bmp = new Bitmap(src); int W = bmp.Width, H = bmp.Height;
    var bd = bmp.LockBits(new Rectangle(0,0,W,H), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
    var px = new byte[W*H*4]; Marshal.Copy(bd.Scan0, px, 0, px.Length); bmp.UnlockBits(bd);
    // dominant dark colour = brand navy
    var hist = new Dictionary<int,int>(); int minS = 765;
    for (int i=0;i<px.Length;i+=4){ int s=px[i]+px[i+1]+px[i+2]; if(s<minS) minS=s; }
    for (int i=0;i<px.Length;i+=4){ int s=px[i]+px[i+1]+px[i+2]; if(s<400 && s>minS+20){ int k=(px[i+2]<<16)|(px[i+1]<<8)|px[i]; int v; hist.TryGetValue(k,out v); hist[k]=v+1; } }
    int best=0,bc=0; foreach(var kv in hist) if(kv.Value>bc){bc=kv.Value;best=kv.Key;}
    int nr=(best>>16)&255, ng=(best>>8)&255, nb=best&255; double nl=(nr+ng+nb)/3.0;
    var A = new double[W*H]; int minX=W,minY=H,maxX=0,maxY=0; var rowHas=new bool[H];
    for (int p=0;p<W*H;p++){ int i=p*4; double l=(px[i]+px[i+1]+px[i+2])/3.0;
      double a=(255-l)/(255-nl); if(a<0)a=0; if(a>1)a=1; a*=px[i+3]/255.0; if(a<0.04)a=0; A[p]=a;
      if(a>0.25){int x=p%W,y=p/W; rowHas[y]=true; if(x<minX)minX=x; if(x>maxX)maxX=x; if(y<minY)minY=y; if(y>maxY)maxY=y;} }
    var bands=new List<int[]>(); int s0=-1;
    for(int y=minY;y<=maxY+1 && y<H;y++){ bool h=y<=maxY && rowHas[y]; if(h&&s0<0)s0=y; if(!h&&s0>=0){bands.Add(new[]{s0,y-1});s0=-1;} }
    var mg=new List<int[]>(); foreach(var b in bands){ if(mg.Count>0 && b[0]-mg[mg.Count-1][1]<12) mg[mg.Count-1][1]=b[1]; else mg.Add(new[]{b[0],b[1]}); }
    int lastMain = mg.Count>=3 ? mg[mg.Count-2][1] : maxY;
    Save(A,W,H,minX,maxX,minY,lastMain,nr,ng,nb,900,outDir+"\\logo.png");
    Save(A,W,H,minX,maxX,minY,lastMain,255,255,255,900,outDir+"\\logo-white.png");
    Save(A,W,H,minX,maxX,minY,maxY,nr,ng,nb,1200,outDir+"\\logo-full.png");
    Save(A,W,H,minX,maxX,minY,maxY,255,255,255,1200,outDir+"\\logo-full-white.png");
    var sb=new System.Text.StringBuilder(); foreach(var b in mg) sb.Append("["+b[0]+"-"+b[1]+"]");
    return String.Format("navy=#{0:x2}{1:x2}{2:x2} bbox={3},{4},{5},{6} bands={7}", nr,ng,nb,minX,minY,maxX,maxY,sb);
  }
  static void Save(double[] A,int W,int H,int minX,int maxX,int y0,int y1,int r,int g,int b,int outW,string path){
    int pad=(int)((maxX-minX)*0.01); int sx=Math.Max(0,minX-pad), sw=Math.Min(W,maxX+pad+1)-sx; int sy=Math.Max(0,y0-pad), sh=Math.Min(H,y1+pad+1)-sy;
    var t=new Bitmap(sw,sh,PixelFormat.Format32bppArgb); var bd=t.LockBits(new Rectangle(0,0,sw,sh),ImageLockMode.WriteOnly,PixelFormat.Format32bppArgb);
    var o=new byte[sw*sh*4];
    for(int yy=0;yy<sh;yy++) for(int xx=0;xx<sw;xx++){ int j=(yy*sw+xx)*4; o[j]=(byte)b;o[j+1]=(byte)g;o[j+2]=(byte)r;o[j+3]=(byte)Math.Round(A[(sy+yy)*W+sx+xx]*255); }
    Marshal.Copy(o,0,bd.Scan0,o.Length); t.UnlockBits(bd);
    int outH=(int)Math.Round(sh*(double)outW/sw); var f=new Bitmap(outW,outH,PixelFormat.Format32bppArgb);
    using(var gr=Graphics.FromImage(f)){ gr.InterpolationMode=InterpolationMode.HighQualityBicubic; gr.PixelOffsetMode=PixelOffsetMode.HighQuality; gr.CompositingMode=CompositingMode.SourceCopy; gr.DrawImage(t,0,0,outW,outH); }
    f.Save(path,ImageFormat.Png); f.Dispose(); t.Dispose();
  }
}
"@
$root = Split-Path -Parent $PSScriptRoot
[LogoTool]::Run((Join-Path $root $Source), (Join-Path $root "assets\img"))
