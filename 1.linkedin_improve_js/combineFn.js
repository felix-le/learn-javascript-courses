
const employees = [
  {
    name: 'Jane Doe',
    salary: 70000,
    age: 54,
    jobTitle: 'developer'
  },
  {
    name: 'Donal Jones',
    salary: 75000,
    age: 54,
    jobTitle: 'engineer'

  },
  {
    name: 'Donna Applessed',
    salary: 1500000,
    age: 23,
    jobTitle: 'secretary'

  },
  {
    name: 'John Smith',
    salary: 2450000,
    age: 54,
    jobTitle: 'developer'
  },
  {
    name: 'Viet Anh Le',
    salary: 3000000,
    age: 35,
    jobTitle: 'developer'
  },
  {
    name: 'Giang',
    salary: 33333,
    age: 35,
    jobTitle: 'Queen'
  },{
    name: 'thanh truc',
    salary: 4500000,
    age: 35,
    jobTitle: 'developer'
  }
  ,{
    name: 'Smith',
    salary: 4300000,
    age: 35,
    jobTitle: 'waiter'
  },
]

const developers = employees.filter(employee => employee.jobTitle === 'developer');

const developerSalaries = developers.map(developer => developer.salary);
const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x ,0);
const averageDeveloperSalaries = totalDeveloperSalaries/developers.length;
console.log("🚀 ~ file: combineFn.js ~ line 58 ~ averageDeveloperSalaries", averageDeveloperSalaries)