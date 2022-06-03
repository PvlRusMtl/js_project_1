'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt('How many movies have you seen?');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('How many movies have you seen?');
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Last movie?', '').trim(),
//                   b = prompt('How could you evaluate it?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function(){
//         if (personalMovieDB.count < 10) {
//             console.log('too little');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('classic');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('kinoman');
//         } else {
//             console.log('error');
//         }
//     },
//     showMyDB: function(hidden){
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Your favorite genre number ${i}`);
//             // if (genre === "" || genre === null) {
//             //     console.log('Not correct or data abcence');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i-1] = genre;
//             // }

//             let genres = prompt(`Tape your favorites genres number with comma`).toLowerCase();
//             if (genres === "" || genres === null) {
//                 console.log('Not correct or data abcence');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(", ");
//                 personalMovieDB.genres.sort();
//             }
            
//         } 
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
    
// };
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'zzz', 'sss'];

function sortStudentsByGroups(arr) {
    const result = new Array(Math.ceil(arr.length / 3)).fill().map(_ => arr.sort().splice(0, 3));
    if (result[result.length - 1].length < 3 && result[result.length - 1].length >= 1) {
        const lastArrayUncomplete = result[result.length -1].join();
        result.pop();
        result.push(`Оставшиеся студенты: ${lastArrayUncomplete}`);
    } else {
        result.push(`Оставшиеся студенты: -`);
    }
    console.log(result);
    
}
sortStudentsByGroups(students);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
showExperience(personalPlanPeter);
function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let str = '';
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);