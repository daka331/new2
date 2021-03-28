//Ниже приведен код плеера, который позволяет проигрывать трек (ставить воспроизведение и паузу). Метод display выводит текущее состояние объекта. Доработайте объект таким образом, чтобы можно проигрывать плейлист и реализуйте методы next и prev, которые управляют переключением треками. Переключение треков нужно зациклить: если мы находимся на последнем треке, то при вызове next() мы попадаем на первый трек. Если мы находимся на первом треке, то при вызове prev() мы попадаем на последний трек.

const playList = [
  'song1.mp3',
  'song2.mp3',
  'song3.mp3',
];

let currentTrack = 0;

var Player = {
    track: 'song.mp3',
    status: 'pause',
    display: function() {
      return 'Track: ' + playList[currentTrack] + ' Status: ' + this.status;
    },
    play: function() {
      this.status = 'play';
    },

    pause: function() {
      this.status = 'pause';
    },

    next: function() {
      if (currentTrack < playList.length - 1) {
        currentTrack++;
        this.status = 'play';
      } else {
        currentTrack = 0;
        this.status = 'play';
      }
    },

    prev: function() {
      if (currentTrack > 0) {
        currentTrack--;
        this.status = 'play';
      } else {
        currentTrack = playList.length - 1;
        this.status = 'play';
      }
      // TODO
    }
  };

console.log(Player.display()); // "Track: song1.mp3 Status: pause"
console.log(Player.play());
console.log(Player.display()); // "Track: song1.mp3 Status: play"
console.log(Player.next());
console.log(Player.display()); // "Track: song2.mp3 Status: play"
console.log(Player.prev());
console.log(Player.display()); // "Track: song1.mp3 Status: play"
console.log(Player.prev());
console.log(Player.display()); // "Track: song3.mp3 Status: play"

  