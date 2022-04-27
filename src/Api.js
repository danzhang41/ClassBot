
export function nlp(message){
   
   const url = 'http://127.0.0.1:5000/nlp/' + message
   return fetch(url)
   .then(response => response.json())
   .then(json => console.log(json))


}
