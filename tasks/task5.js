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