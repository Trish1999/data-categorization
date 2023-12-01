const data = require('./food.json');
//console.log({data});

//list all the food items
function check1() {
    const result= data.map((i) => i.foodname);
    return result;
}
console.log("list all the food items: ",check1());

//list all the food items with category vegetables
function check2() {
    const result = data.filter((i) => i.category === "Vegetable")
        .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category vegetables: ", check2());

//list all the food items with category fruit
function check3() {
    const result = data.filter((i) => i.category === "Fruit")
            .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category fruit: ", check3());

//list all the food items with category protien
function check4() {
    const result = data.filter((i) => i.category === "Protein")
            .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category protien: ", check4());

//list all the food items with category nuts
function check5() {
    const result = data.filter((i) => i.category === "Nuts")
            .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category nuts: ", check5());

//list all the food items with category grains
function check6() {
    const result = data.filter((i) => i.category === "Grain")
            .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category grains: ", check6());

//list all the food items with category dairy
function check7() {
    const result = data.filter((i) => i.category === "Dairy")
            .map((a) => {
            const {category, foodname}=a;
            return { Category: category, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with category dairy: ", check7());

//list all the food items with calorie above 100
function check8() {
    const result = data.filter((i) => i.calorie > 100)
        .map((a) => {
            const {calorie, foodname}=a;
            return { Calorie: calorie, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with calorie above 100: ", check8());

//list all the food items with calorie below 100
function check9() {
    const result = data.filter((i) => i.calorie < 100)
        .map((a) => {
            const {calorie, foodname}=a;
            return { Calorie: calorie, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with calorie below 100: ", check9());

//list all the food items with highest protien content to lowest
function check10() {
    const result = (data.sort((a, b) => b.protiens - a.protiens))
        .map((a) => {
            const {protiens, foodname}=a;
            return { Protiens: protiens, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with highest protien content to lowest: ", check10());

//list all the food items with lowest cab content to highest
function check11() {
    const result = (data.sort((a, b) => a.cab - b.cab))
        .map((a) => {
            const {cab, foodname}=a;
            return { Cab: cab, foodName: foodname } ;
        })
    return result;
}
console.log("list all the food items with lowest cab content to highest: ", check11());
