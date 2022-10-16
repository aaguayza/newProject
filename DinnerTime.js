/*Will pick from list of dinners saved to know what to eat for the day
Things I will need (** = task done)
 - What if I try to have it plan meals for the week?  Is there a way to compile a list from the list of ingredients?  Like is there a way to have it so it to compile and combines items (2x beans)
 - consider using the .push method when wanting to start adding ingredients to a 'grocery list'

 
 ***maybe this automatically gets sent as an email.  Will need to learn more about the JS stuff to find out how this works.*/


//let menu = ['fried rice', 'hot and sour soup', 'veg chili', 'Empanadas', 'Cereal', 'omlet', 'pancakes', 'pizza', 'salads']


const vegChili = ['2 cans of tomato sauce ', '1 soyrizo ', '4 cans of beans ', '2 onions ', 'mixed veggies ']
const cereal = ['Cereal ', 'milk ']
const friedRice = ['frozen veggies ', 'soy sauce ', 'eggs ']


let allRecipes =[vegChili, cereal, friedRice]
let mealsForWeek = []
let menu = [vegChili, cereal, friedRice]


//shuffle menu
const mealPrep = {
  shuffleMeals(array){
    let m = array.length, t, i;
    while (m){
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array [m] = array [i]
      array [i] = t;
    }
    return array
  },  
}

const listIngredients = arry =>{
  for(let i = 0; i<= arry.length; i++){
  return arry[i]
}
}

//list off ingredients for each dish
/*const listIngredients = () =>{
  for (let i = 0; i<mealsForWeek.length; i++){
    switch (mealsForWeek[i]) {
      case 'fried rice':
      console.log(friedRice);
      break;
      case 'cereal':
      console.log(cereal);
      break;
      case 'veg chili':
      console.log(vegChili);
      break;
      default:
      console.log('ingredients unavailiable')
    }
  }
}*/

const printMenu = mealsForWeek.keys()

const listKeys = ()=>{for (const key of printMenu){
  console.log(key)
}}
listKeys()


mealPrep.shuffleMeals(menu)
mealsForWeek = menu.slice(0,2)
console.log(mealsForWeek)
//console.log(listIngredients(mealsForWeek))





