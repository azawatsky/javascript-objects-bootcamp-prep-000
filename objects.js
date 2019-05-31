var playlist = {'2pac':'all eyez on me'}

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({},playlist,{[artistName]:songTitle})
  console.log(Object.assign({},playlist,{[artistName]:songTitle}))
}