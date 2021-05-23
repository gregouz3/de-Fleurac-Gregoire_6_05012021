
export default async function getMedias() {
  let url="./../ressources/data-json/media.json";
  return await fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
}
