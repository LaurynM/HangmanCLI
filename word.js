function Word(selection){
    this.foods = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "indian lime", "jackfruit", "kiwi", "lemon-lime", "mango", "nectarine", "olive", "persimmon", "quince", "raspberry", "strawberry", "tangerine", "pineapple upside-down cake", "vanilla-bean", "watermelon", "xylitol", "yeast", "zuchinni"];
    this.animals = ["aardvark", "badger", "camel", "deer", "eagle", "fox", "gecko", "hamster", "iguana", "jaguar", "kangaroo", "lion", "mole", "newt", "ocelot", "parrot", "quail", "rabbit", "sheep", "turkey", "vulture", "whale", "yak", "zebra"];
    this.choice = this[selection][Math.floor((Math.random() * this[selection].length ))]; //chooses a random word from within this.selection
}

module.exports = Word;