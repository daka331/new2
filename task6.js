//Ниже приведен код плеера, который позволяет проигрывать трек (ставить воспроизведение и паузу). Метод display выводит текущее состояние объекта. Доработайте объект таким образом, чтобы можно проигрывать плейлист и реализуйте методы next и prev, которые управляют переключением треками. Переключение треков нужно зациклить: если мы находимся на последнем треке, то при вызове next() мы попадаем на первый трек. Если мы находимся на первом треке, то при вызове prev() мы попадаем на последний трек.

var Player = {
    track: 'song.mp3',
    status: 'pause',
    display: function() {
      return 'Track: ' + this.track + ' Status: ' + this.status;
    },
    play: function() {
      this.status = 'play';
    },
    pause: function() {
      this.status = 'pause';
    },
    next: function() {
      // TODO
    },
    prev: function() {
      // TODO
    }
  };
   
  Player.display(); // "Track: song.mp3 Status: pause"
  Player.play();
  Player.display(); // "Track: song.mp3 Status: play"
  