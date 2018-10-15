let token = process.env.REACT_APP_GENIUS_TOKEN

let myInit = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Host: "api.genius.com"
  }
};

 function getAnnotations(id) {
  let url = `https://api.genius.com/annotations/${id}?&access_token=${token}`;
   return fetch(url, myInit)
    .then (resp => resp.json())
    .then (resp => resp.response)
    .catch(err => console.log(err));
}


 function getReferents(songId) {
  let url = `https://api.genius.com/referents?song_id=${songId}&access_token=${token}`;
   return fetch(url, myInit)
    .then (resp => resp.json())
    .then(resp => resp.response)
    .catch(err => console.log(err));
}


 function getSongs(id) {
  let url = `https://api.genius.com/songs/${id}?&access_token=${token}`;
   return fetch(url, myInit)
    .then (resp => resp.json())
    .then(resp => resp.response)
    .catch(err => console.log(err));
}

 function getArtists(id) {
  let url = `https://api.genius.com/artists/${id}?&access_token=${token}`;
   return fetch(url, myInit)
    .then (resp => resp.json())
    .then(resp => resp.response)
    .catch(err => console.log(err));
}


function getSearch(id) {
 let sluggedId = id.replace(/\s/g, '%20')
 let url = `https://api.genius.com/search?q=${sluggedId}&access_token=${token}`;
  return fetch(url, myInit)
   .then (resp => resp.json())
   .then(resp => resp.response)
   .catch(err => console.log(err));
}

export {
  getAnnotations,
  getReferents,
  getSongs,
  getArtists,
  getSearch
}
