In Javascript, First-Class Functions are objects and can be treated the same as variables, such that they can be passed to other functions, assigned to other variables and properties and have their own properties and methods. Their distinguishing feature from other objects is that they can be invoked.

setTimeout(() => {
  console.log(`Delayed for 1 second`)
}, 1000)

The difference between declaring a function and calling it, is the declaration is simply the instructions of what the code should do where as calling it returns a result.

declaration:
function myFunction(a, b) {
  return a * b;
}

invoking:
myFunction(10, 2)

will return 20.