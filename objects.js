var playlist = {'2pac':'all eyez on me'}

function updatePlaylist(obj,artist,song) {
  return Object.assign({},obj,{artist,song})
}