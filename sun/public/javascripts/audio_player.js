var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    preload: 'metadata',
    mode: 'circulation',
    music: {
        title: 'Le petit prince',
        author: 'Hanz Zimmer',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    }
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

var ap2 = new APlayer({
    element: document.getElementById('player2'),
    narrow: true,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    mode: 'circulation',
    music: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    }
});