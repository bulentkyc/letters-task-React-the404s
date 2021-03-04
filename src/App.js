import './App.css';
import {useState} from 'react';
import Input from './components/Input';
import Status from './components/Status';
import Cards from './components/Cards';
//let myObj = {key:'val'}
//console.log('xyz',myObj);

/* 
let x= 123;
let y = x;
x = 'abc';
console.log(x) //abc
console.log(y) //123
//-----------------//
//-----------------//

let x = {key:123}
let y = x;
x.key = 'abc';
console.log(x) //{key:abc}
console.log(y) //{key:abc}


let fakeState = null
 */


function App() {
  const [state, setState] = useState('Hello World');

  //let test = 'test1';

  let keyHandler = (e) => {
    //console.log(e, e.key, e.target.value);
    //console.log(testParameter);
    /* console.log(state);
    console.log(test); */
    setState(e.target.value);
  }
/* 
  let objUpdater = (key,val) => {
    myObj[key] = val;
    console.log(key,val);
    console.log('o2', myObj)
  }
  console.log('o', myObj)
 */

  
  return (
    <div className="App" className="App-header">
      <h1>the404s React Task</h1>
      <Input change = {keyHandler}>{state}</Input>
      <Status text = {state} limit = '10'/>
      <p>There are {state.length} characters</p>
      <Cards data = {state}/>
    </div>
  );
}

export default App;
