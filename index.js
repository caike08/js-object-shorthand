const username = 'caike08'
const age = 30
const props = {active: [true]}

// shorthand property names
console.log(
  `%cShorthand property names, declared as {username, age, props} 🤔 \n`, 
  'color: green'
)

console.log({username, age, props})

// this is the same as:
console.log(
  `\n\n%cWhich is the same as { username: username, age: age, props: props} 😁\n`,
  'color: green'
)

console.log({
  username: username,
  age: age,
  props: props
})

console.log('\n\nSo, sorthand property names came up to help you make your code more readable!')
