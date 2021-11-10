class Ninja { 
    constructor(name,health,speed,strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    showStats() {
        console.log("Ninja "+this.name+" Strength: "+this.strength+" Speed: "+this.speed+" Health: "+this.health);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log("Health: "+this.health);
        return this;
    }
}

// let ninja = new Ninja("Ant",100,30,10);
// ninja.sayName().showStats().drinkSake();

class Sensei extends Ninja {
    constructor(name,wisdom,health=200,speed=40,strength=20) {
        super(name,health,speed,strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// let sensei = new Sensei("Master",10);
// sensei.speakWisdom();
// sensei.showStats();


const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// const needThyme = [...groceryList, {"item":"thyme", "haveIngredient":false}];
// const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

// console.log(needThyme);
// console.log(groceryList);

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort(); // this will throw an error 
console.log(sortedItems);

////////////////////////////////////////////////////////////////////////////////
const iterable = ["iterable","object"];
const name = iterable.map( itemInIterable => "function"*3);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

////////////////////////////////////////////////////////////////////////////////
// const iterable = [1,2,3,4,5];
// const name = iterable.filter(item => boolean function(item))

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

////////////////////////////////////////////////////////////////////////////////
// both filter and map
const values3 = [1, 2, 3, 4, 5];
const oddCubes = values3.filter( val => val % 2 !==0 ).map( val => val**3 );

