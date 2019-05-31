var playlist = {'2pac':'all eyez on me'}

function updatePlaylist(playlist,artistName,songTitle) {
  Object.assign({},playlist,{[artistName]:songTitle})
}