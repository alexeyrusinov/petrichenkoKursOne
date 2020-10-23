// alert('1) Способы взаимодействия с пользователем.');



// const result = confirm('Второй сопособ: да или нет confirm');
// console.log(result);

// const answer = prompt('Вам есть 18?:', '18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Сколько вам лет?', '');
// answers[1] = prompt('Где проживаете?', '');
// answers[2] = confirm('Холост?');

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'alex'

// alert(`Привет, ${user}`)

// let incr = 10,
// 	decr = 10;

// inrc++;
// decr--;

// console.log(++incr);
// console.log(decr--);

// console.log(5%2);

// console.log(2+2 == 5);
// console.log(2+2 == 4);

// console.log('2' === 2);
// console.log(2 === 2);

// && -   
// ||

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из полседних просмотренных фильмов?', ''),
		b = prompt('На сколько оцениваете его', ''),
		c = prompt('Один из полседних просмотренных фильмов?', ''),
		d = prompt('На сколько оцениваете его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
