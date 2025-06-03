const playlistSongs = document.querySelector('#playlist')


let allSongs = [{
    id: 0,
    title: 'Introduccion a "En defensa del arte"',
    artist: 'Solitario',
    duration: '6:23',
    src: 'k5ciGNYaeqc?'
},
{
    id: 1,
    title: 'Destincion entre arte y virtuosismo',
    artist: 'Solitario',
    duration: '7:32',
    src: '-ZLrfjGr2lk?'
},
{
    id: 2,
    title: 'Virtudes, derechos y deberes del artista',
    artist: 'Solitario',
    duration: '7:07',
    src: 'Wy9otR5LIEE?'
},
{
    id: 3,
    title: 'Parentesis recreativo de abuso injustificado',
    artist: 'Solitario',
    duration: '5:14',
    src: 'jxoGJGsd_eM?'
},
{
    id: 4,
    title: 'Hablales de mi',
    artist: 'Solitario',
    duration: '7:43',
    src: 'WPOX3WrVk8s?'
},
{
    id: 5,
    title: 'Apologetas de la mediocridad',
    artist: 'Solitario',
    duration: '4:22',
    src: 'WFI5wle_qu8?'
},
{
    id: 6,
    title: 'Marketing y cobardia',
    artist: 'Solitario',
    duration: '7:50',
    src: 'moE8OOc0sDs?'
},
{
    id: 7,
    title: 'A contracultura',
    artist: 'Solitario',
    duration: '8:12',
    src: 'EWTod1uiEeU?'
}]


let player;



function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: allSongs[3].src.replace('?', ''), // ID del video sin el signo de interrogación
        width: '200', // Corregido de "with" a "width"
        height: '200',
        playerVars: {
            'controls': 0, // Oculta los controles de YouTube
            'showinfo': 0, // Este parámetro ya no es soportado por la API
            'rel': 0 // Evita mostrar videos relacionados
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('Player is ready');
}

function onPlayerStateChange(event) {
    console.log('Player state changed:', event.data);
}

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
    return `<li id="song-${song.id}" class="playlist-song" onclick='playSong(${song.id})'><button class="playlist-song-info">
    <span class="playlist-song-title">${song.title}</span>
    <span class="playlist-song-artist">${song.artist}</span>
    <span class='playlist-song-duration'>${song.duration}</span>
    </button>
    <button class="playlist-song-delete" aria-label="Delete ${song.title}"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg></button></li>`}).join("")
    playlistSongs.innerHTML= songsHTML
}
renderSongs(getSortedSongs())

playSong()


function getSortedSongs(){
    allSongs.sort((a, b) => {
      if(a.title < b.title){
          return -1
      }
      if(a.title > b.title){
          return 1
      }
      return 0
    })
    return allSongs
}

function playSong(songId) {
    const selectedSong = allSongs.find(song => song.id === songId);
    if (selectedSong) {
        console.log(`Reproduciendo: ${selectedSong.title} - ${selectedSong.artist}`);
        // Aquí puedes actualizar el reproductor de YouTube con el nuevo video
        player.loadVideoById(selectedSong.src.replace('?', '')); // Asegúrate de quitar el signo de interrogación
    } else {
        console.error('Canción no encontrada');
    }
}

