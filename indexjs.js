function openCity(event, recipe) {
    var i, recipe, recipes;
  
    recipe = document.getElementsByClassName("recipe");
    for (i = 0; i < recipe.length; i++) {
      recipe[i].style.display = "none";
    }
  
    recipes = document.getElementsByClassName("recipes");
    for (i = 0; i < recipes.length; i++) {
      recipes[i].className = recipes[i].className.replace(" active", "");
    }
  
    document.getElementById(changeRecipe).style.display = "block";
    event.currentTarget.className += " active";
  }
