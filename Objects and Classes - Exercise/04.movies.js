function movies(inputArray) {
    let allMovies = [];
    const addSplitter = "addMovie ";
    const directorSplitter = " directedBy ";
    const dateSplitter = " onDate ";

    for (let row of inputArray) {
        if (row.includes(addSplitter)) {
            let name = row.split(addSplitter)[1];
            let movie = { name };
            allMovies.push(movie);
        } else if (row.includes(directorSplitter)) {
            let [name, director] = row.split(directorSplitter);
            let movie = allMovies.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (row.includes(dateSplitter)) {
            let [name, date] = row.split(dateSplitter);
            let movie = allMovies.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of allMovies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);