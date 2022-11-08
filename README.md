
## Explicação

#### Pares e ímpares:
 Função que retorna quantidade de números ímpares de um array

```
  const getOddNumbers = (N) => N.filter((n) => n % 2 !== 0).length;
```

Foi utilizado o método filter para filtrar os valores do array que o resto (%) seja diferente de 0 no caso nenhum número pár

---    

### Palíndromo:
 Função que verifica se a string é um palíndromo

```
  const isPalindrome = (A) => A.split('').reverse().join('') === A;
```
Primeira coisa é utilizado o método split() que separa a string pelo seu primeiro parâmetro, como no caso é passado uma string vazia ele vai retornar um array com cada elemento da string, após isso é utilizado o reverse() que inverte a ordem do array, e após isso o join() que junta os elementos de um array com o espaçamento de seu primeiro parâmetro no caso uma string vazia, juntando a palavra

--- 
#### Chaves e Valores:
 Função que cria um objeto no formato JSON

```
  const createObject = (C, V) => JSON.stringify({ [C]: V });
```

Está função recebe 2 parâmetros o primeiro sendo a key do objeto e a segunda o value, é utilizado essa notação [C] para conseguirmos setar um objeto com a chave dinâmica, se fosse utilizado { C: V } teriamos um retorno assim { "C": "TESTE" }

---    
#### Consumo de API:
 Função que faz o consumo da API da Marvel

```
  const PUBLIC_KEY = 'b919197713429c1d83dd52857642ee48';
  const md5 = '407cfa991c152e4c154affbf4dccefb4';
  const timestamp = 1;

  const fetchHeroes = () => {
      const URL = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${md5}`;
      fetch(URL)
          .then((response) => response.json().then((json) => json.data.results))
          .catch((error) => console.error(error))
};
```

Neste função é utilizado a API FETCH que serve para fazermos requisições HTTP, está rota da API da marvel necessita de alguns dados, para autorizarmos e o CORS não impedir a gente,
o método fetch recebe como primeiro parâmetro uma rota, retornando uma Promise, podendo ser resolvido com um then ou utilizando async await, passando uma função callback para o then() recebemos nossa response que é tratada até chegarmos nos dados que nós queremos, tendo qualquer erro durante o processo cairá no nosso catch 

---
#### Arquivos:
 Função que cria arquivos baseados na resposta da API da marvel

```
const fs = require('fs');

const createHeroesFiles = (heroes) => {
    const dir = './Characters';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    heroes.forEach((hero) => {
        fs.writeFile(
            `Characters/${hero.name}.json`,
            JSON.stringify(hero),
            (err) => {
                if (err) throw err;
            });
    })
};
```

##### Para criação dessa função foi utilizada o módulo fs do node que disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system. Recebemos como parâmetro um array de objetos que é o resultado do endpoint que é consumida na função passada, primeiramente verifica se existe um diretório com o nome de Characters, se não ele é criado, após isso utilizando o método forEach onde conseguimos acesso a cada item o array utilizando o método writeFile do módulo fs, como primeiro parâmetro passamos o nome do arquivo, segundo o conteúdo dele e por último uma função callback que retorna algúm erro que possa acontecer durante o processo
--- 
