function songs(arrayOfArgs) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }
    }

    let songsCount = arrayOfArgs.shift();
    let playlist = [];

    for (let i = 0; i < songsCount; i++) {
        let currentLine = arrayOfArgs.shift();
        let tokens = currentLine.split("_");
        let typeList = tokens[0];
        let songName = tokens[1];
        let duration = tokens[2];
        let currentSong = new Song(typeList, songName, duration);
        playlist.push(currentSong);
    }

    let listCommand = arrayOfArgs.shift();

    if (listCommand === "all") {
        playlist.forEach(s => console.log(s.name));
    } else {
        let filtered = playlist.filter(s => s.typeList === listCommand);
        filtered.forEach(s => console.log(s.name));
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

function solve(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = inputArray.shift();
    let selectedTypeList = inputArray.pop();

    let allSongs = [];

    for (let i = 0; i < songsCount; i++) {
        let [typeList, songName, duration] = inputArray[i].split("_");
        let song = new Song(typeList, songName, duration);
        allSongs.push(song);
    }

    if (selectedTypeList === "all") {
        allSongs.forEach(s => console.log(s.name));
    } else {
        allSongs.filter(s => s.typeList === selectedTypeList)
        .forEach(s => console.log(s.name));
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);