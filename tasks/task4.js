const PUBLIC_KEY = 'b919197713429c1d83dd52857642ee48';
const md5 = '407cfa991c152e4c154affbf4dccefb4';
const timestamp = 1;

const fetchHeroes = () => {
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${md5}`;
    fetch(URL)
        .then((response) => response.json().then((json) => json.data.results))
        .catch((error) => console.error(error))
};