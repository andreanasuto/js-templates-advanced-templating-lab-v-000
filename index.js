function init() {
  //put any page initialization/handlebars initialization here
Handlebars.registerHelper('displayIngredient', function () {
  return new Handlebars.SafeString(this)
})

Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template'))
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial'))
var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()

})

function displayEditForm() {
 let formTemplate = Handlebars.compile(document.getElementById('recipe-form-template'))
 let html = formTemplate({function: 'updateRecipe()'})
 document.getElementsByTagName("main")[0].innerHTML += html
}

function createRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = document.getElementsByName('ingredients')

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let html = recipeTemplate({'name': name, 'description': description, 'ingredients': ingredients})
  let mainDiv = document.getElementsByTagName("main")[0].innerHTML
  mainDiv += html
}

function updateRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = document.getElementsByName('ingredients')
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let html = recipeTemplate({'name': name, 'description': description, 'ingredients': ingredients})

  document.getElementsByTagName("main")[0].innerHTML += html

}
