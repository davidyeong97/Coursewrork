const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(MainIn) {
        this._courses.mains = mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertIn) {
        this._courses.desserts = desserts;
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;

        return `Your meal is ${appetizers.name}, ${mains.name} and ${desserts.name}. And the total price of the meal is $${totalPrice}`
    }
};

menu.addDishToCourse('appetizers', 'what is this', 100)
menu.addDishToCourse('mains', 'whatever you want', 200)
menu.addDishToCourse('desserts', 'something sweet maybe', 1000)

let meal = menu.generateRandomMeal();
console.log(meal);