const test = document.body.getElemenetById('button')


const recipes = ['eggs', 'cereal', 'steak', 'chicken']

shuffleRecipes=(array)=>{
      let m = array.length, t, i;
      while (m){
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array [m] = array [i]
        array [i] = t;
      }
      return array
    };  
  

const chooseDinner = ()=>{
    shuffleRecipes(recipes)

}


