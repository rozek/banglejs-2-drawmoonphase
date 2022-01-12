;(function () {
  if (Graphics.prototype.drawMoonPhase == null) {
    Graphics.prototype.drawMoonPhase = function drawMoonPhase (
      CenterX,CenterY, Radius, leftFactor,rightFactor
    ) {
      let x = Radius, y = 0, Error = Radius;

      let gfx = this || g;

      gfx.drawLine(CenterX-leftFactor*x,CenterY, CenterX+rightFactor*x,CenterY);

      let dx,dy;
      while (y <= x) {
        dy = 1 + 2*y; y++; Error -= dy;
        if (Error < 0) {
          dx = 1 - 2*x; x--; Error -= dx;
        }

        gfx.drawLine(CenterX-leftFactor*x,CenterY-y, CenterX+rightFactor*x,CenterY-y);
        gfx.drawLine(CenterX-leftFactor*x,CenterY+y, CenterX+rightFactor*x,CenterY+y);
        gfx.drawLine(CenterX-leftFactor*y,CenterY-x, CenterX+rightFactor*y,CenterY-x);
        gfx.drawLine(CenterX-leftFactor*y,CenterY+x, CenterX+rightFactor*y,CenterY+x);
      }

      return gfx;
    };
  }
})();
