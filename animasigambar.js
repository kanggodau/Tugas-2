var x = 0;
var y = 0;

setInterval(function () {
  x -= 320;
  if (x == -920) {
    x = 0;
    y -= 180;
  } else {
    if (y == -360) {
      y = 0;
    }
  }

  document.getElementById('stiker').style.backgroundPositionX = String(x) + 'px';
  document.getElementById('stiker').style.backgroundPositionY = String(x) + 'px';
}, 1000);
