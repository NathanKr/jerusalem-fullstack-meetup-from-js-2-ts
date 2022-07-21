import {writePersonJs} from "./utils-js";

function sum(n1 : number,n2 : number) : number {
  return n1+n2;
}

// console.log(sum(1,2))
// console.log(sum(1,3))
// console.log(sum(1,4))
//  console.log(sum(1,5))

interface IPerson{
  first : string ;
  last : string;
  age : number;
  height : number;
}

interface IStudent extends IPerson
{
  avg : number;
} 

export function writePersonTs(personObj : IPerson) {
  console.log(
    `first name : ${personObj.first} ,last name : ${personObj.last} , age : ${personObj.age} `
  );
}

export function writePersons(persons : IPerson []){
  persons.forEach(person => {
    console.log(person.age);
    
  });
}


function App() {
  // let s1 : string;
  // let a = 4;
  // let b = true;
  // // let c = a + b;
  const obj = {first : 'Jim' , last : 'Cohen' , age : 11 , height : 44};
  // writePersonJs(obj) 
  writePersonTs(obj) 

  let student : IStudent ={
    avg: 0,
    first: "",
    last: "",
    age: 0,
    height: 0
  } 

  return <div>hello ts</div>;
}

export default App;
