import './App.css';
import Cards from './components/Cards';
function App() {
  // let obj={
  //   username:"priyansh",
  //   age:21
  // }
  // let newarr=[1,2,3]
  return (
    <>
    {/* <Cards channel="chai aur code" someobj={obj} array={newarr}/> */}
    <Cards username="chai aur code"/>
    <Cards  username="code"/>
    </>
  );
}

export default App;
