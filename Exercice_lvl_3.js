import {countries_data} from "./Countries.js"


//1 & 2. HOW MANY LANGUAGES ARE THERE IN THE COUNTRY FILE AND WHICH ARE THE MOST SPOKEN LANGUAGES


const spokenLanguages = (countries, limit) => {
    const languageCounts = countries
    .map(country => country.languages)
    .reduce((accLanguages, curLanguages) => accLanguages.concat(curLanguages), [])
    .reduce((accMap, currLanguage) => {
        accMap.set(currLanguage, (accMap.get(currLanguage) || 0) + 1);
        return accMap;
    }, new Map());

const sortedLanguages = Array.from(languageCounts.entries())
.map(([currLanguage, count]) => ({[currLanguage]: count}))
.sort((a,b) => Object.values(b)[0] - Object.values(a)[0])
.slice(0, limit);

return sortedLanguages;
};

const result = spokenLanguages(countries_data);
console.log(result)