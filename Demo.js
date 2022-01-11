  g.setBgColor('#000000');
  g.clear(false);

  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawmoonphase/main/drawMoonPhase.js');

  let ScreenWidth  = g.getWidth(),  CenterX = ScreenWidth/2;
  let ScreenHeight = g.getHeight(), CenterY = ScreenHeight/2;

  let Diameter = Math.floor(ScreenWidth / 7);
  let Radius   = Diameter/2;

  g.clear();

  g.setColor('#FFFFFF');

  g.drawMoonPhase(CenterX-3*Diameter,CenterY, Radius, 1,-1);
  g.drawMoonPhase(CenterX-2*Diameter,CenterY, Radius, 1,-0.6);
  g.drawMoonPhase(CenterX-1*Diameter,CenterY, Radius, 1,0.6);
  g.drawMoonPhase(CenterX-0*Diameter,CenterY, Radius, 1,1);
  g.drawMoonPhase(CenterX+1*Diameter,CenterY, Radius, 0.6,1);
  g.drawMoonPhase(CenterX+2*Diameter,CenterY, Radius, -0.6,1);
  g.drawMoonPhase(CenterX+3*Diameter,CenterY, Radius, -1,1);
