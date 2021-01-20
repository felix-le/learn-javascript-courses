const Person = ({ name, age,job})=>{
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: ()=>_name,
    getAge: ()=>_age,
    getJob: ()=>_job,

    setJob: newJob => _job = newJob,

  }
}

const me = Person({ name: 'Shaun', age: 34, job: 'developer'})

// console.log("🚀 ~ file: 3.privateVariable.js ~ line 13 ~ me.getName()", me.getName())

console.log(me.getJob());
me.setJob('senoir developer')

console.log(me.getJob());
