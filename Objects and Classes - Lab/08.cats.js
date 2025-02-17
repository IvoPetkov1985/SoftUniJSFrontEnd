function cats(arrayOfStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }

    let allCats = [];

    for (let catInfo of arrayOfStrings) {
        let [name, age] = catInfo.split(" ");
        let cat = new Cat(name, age);
        allCats.push(cat);
    }

    allCats.forEach(c => c.meow());
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

function solve(arrayOfStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        meow = function() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    let cats = [];
    let catsCount = arrayOfStrings.length;

    for (let i = 0; i < catsCount; i++) {
        let catInfo = arrayOfStrings[i];
        let [name, age] = catInfo.split(" ");
        let currentCat = new Cat(name, age);
        cats.push(currentCat);
    }

    for (let cat of cats) {
        console.log(cat.meow());
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);