const numbers = [1, 2, 3, 4]

> cannot define
numbers = [123,123];

>can define
numbers[0]= 100;

----------------------------------------------------------------
const person = {
  name: 'viet anh',
  age: 34
}

> cannot define
person = {name: 'bob'}
> can define
person.name = 'bob';

# Closure

when we define a function that returns another function, the function that we returned still has access to the internally scope of the function that returned it.

```bash
const giveMeAfunction = () =>{
  const x = 5;

  return () => console.log(`x is ${x}`);
}

const printer = giveMeAfunction();
printer();
```