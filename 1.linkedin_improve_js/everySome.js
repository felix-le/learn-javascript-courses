// []
// every = true & true =>
// some = true & false => true

const employees = [
  {
    name: 'Jane Doe',
    salary: 90000,
  },
  {
    name: 'Donal Jones',
    salary: 65000,
  },
  {
    name: 'Donna Applessed',
    salary: 1500000,
  },
  {
    name: 'John Smith',
    salary: 250000,
  } 
]

const moreThanOneMillions = employee =>employee.salary > 1000000;
const millionResult = moreThanOneMillions.some(employees);
// console.log("🚀 ~ file: everySome.js ~ line 25 ~ millionResult", millionResult);
// true

const formValidate = [
    'Shaun',
    'Wassell',
    'David',
    'John',
    ''
]

const isNotEmpty = string => !!string;

const allFieldFilled = formValidate.every(isNotEmpty);
// console.log("🚀 ~ file: everySome.js ~ line 39 ~ allFieldFilled", allFieldFilled)
// false