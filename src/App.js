import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello this is a react learning with JS</h1>
//     </div>
//   );
// }

function Car(props){
  const shoot=()=>{
    alert("Great car!");
  }
  return(
    <div className="App">
      <h3>This is my {props.style.color} {props.style.model} car</h3>
      <button className = "button" onClick={shoot}>Click</button>
    </div>
  )
}

function Garage(){
  const carColor = { color:"Yellow", model: "swift" };
  return(
    <>
    <h1 className = "App">This is a Garage Function</h1>
    <Car style = {carColor} />
    </>
    
  )
}

export default Garage;
