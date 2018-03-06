## Now Deployed!
Find a working version of this here: https://rosexw.github.io/cohort3-react-pokemon/

## Gotta Fetch 'em all!

For this homework assignment we'll be creating an app that fetches information about
a pokemon based on user input and displays it.

### Setup

1. Fork this repo
2. Create a folder with your first and last name (e.g. `arya-stark`)
3. Run `create-react-app` in that folder. This is where your app will live.

### Assignment

* Create a header component that should read `Gotta Fetch em all!` through props
* Create a Pokemon display component that displays the image of the Pokemon and it's name
* Create a text input component
* Create a button component
* Use all of the components to make an API call based on what the user input's into the component when the button is clicked

### Pokemon API

We'll be leveraging the `fetch` API and the [pokeapi](https://pokeapi.co/docsv2/#pokemon-section) to get our Pokemon data. You can use the `name` prop to display the name and the `pokemon.sprites.front_default` to display the picture.

The endpoint we're going to be using is `https://pokeapi.co/api/v2/pokemon/:nameOrId` where `nameOrId` should come from the user input field.

* Wednesday, Feb 21, 2018
Hey team! Here is some bonus homework that builds off of last weeks homework if you're interested :slightly_smiling_face:
You will be updating your pokemon app to do the following 2 things:
1. gracefully handle errors
-> for example invalid searches, or what if there is no internet connection? (you can test this by turning off your wifi)

2. handle the empty input search
-> the pokemon API returns a list of pokemons on the results attribute when you search https://pokeapi.co/api/v2/pokemon/ ie (`https://pokeapi.co/api/v2/pokemon/${''}`)
lets have your pokemon app render something like:
```<ul>
<li>bulbasaur</li>
<li>ivysaur</li>
...
</ul>```

## Assignment - Part 2
Complete part 1 with:
Redux thunk middleware to handle pokemon api requests
Use redux to store all application state. ie do not use React's native setState method
Your solution can build off your original work, or you can create this app from scratch. If it is from scratch, it should have all the criteria of Part 1 and Part 2 (bonus is not necessary)
Pokemon API
We'll be leveraging the fetch API and the pokeapi to get our Pokemon data. You can use the name prop to display the name and the pokemon.sprites.front_default to display the picture.

The endpoint we're going to be using is https://pokeapi.co/api/v2/pokemon/:nameOrId where nameOrId should come from the user input field.
