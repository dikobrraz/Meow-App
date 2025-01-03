//READABLE

function doSomething() {
  // CAMEL CASING writing style doSomethingElseNow
  // write the instructions
  console.log("I am doing something");
}

// booleans - переменные сщ значение true или false
const isElementVisible = true;

// arrow functions
const doSomethingElse = () => {
  // write the instructions
  console.log("I am doing something else");
};

// function with parameters
const loginUser = (userName, secondName, age) => {
  console.log("User logged in: ", userName, secondName, age);
};

const printListOfCats = (cats) => {
  console.log("List of cats: ", cats);
};

const listOfCats = ["Chaka", "Kitty", "Winnie"];
// printListOfCats(listOfCats);

const smallFunction = () => {
  console.log("Small function");
};

//function with other function as parameters
const bigFunction = (otherFunction) => {
  otherFunction();
};

// bigFunction(smallFunction);

// loginUser(listOfCats);
