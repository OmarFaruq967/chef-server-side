const express = require('express');
const chefs = require ('./chefs.json')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get ('/', (req, res)=>{
    res.send('Server is running')
});

app.get ('/chefs' , (req, res)=>{
    res.send(chefs);
})

app.get ('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    console.log('I wanna see data for id' , id);
    const chef = chefs.find(chef => chef.id === id) || {};
    res.send(chef);
})

// app.get('/chefs/:id', (req, res) => {
//     const id = req.params.id;
//     console.log('I want to see data for id', id);
  
//     // Find chef by id
//     const chef = chefs.find(chef => chef.id === id);
  
//     if (!chef) {
//       // If chef is not found, return an error response
//       res.status(404).send('Chef not found');
//     } else {
//       // If chef is found, map the recipes under the chef id
//       const recipes = chef.recipes.map(recipe => {
//         return recipe;
//       });
  
//       // Log the recipes to the console
//       console.log('Recipes:', recipes);
  
//       // Return the mapped recipes as response
//       res.send({
//         chef: chef,
//         recipes: recipes
//       });
//     }
//   });
  
  


app.listen(port,()=>{
    console.log(`Server API is running on port : ${port}`)
})