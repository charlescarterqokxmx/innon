function returnStars(num) {
  var stars = [];
  for (var i = 0; i < num; i++) {
    var star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.top = Math.floor(Math.random() * 100) + 'px';
    star.style.left = Math.floor(Math.random() * 100) + 'px';
    star.style.width = Math.floor(Math.random() * 10) + 'px';
    star.style.height = Math.floor(Math.random() * 10) + 'px';
    star.style.background = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ', 1)';
    stars.push(star);
  }
  return stars;
}
