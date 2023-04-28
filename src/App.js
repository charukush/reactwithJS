import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello this is a react learning with JS</h1>
//     </div>
//   );
// }

function Car(props){
 
  return(
    <div className="App">
      <h1>This is a {props.brand.color} {props.brand.model} car!!</h1>
    </div>
  )
}

function Garage(){
  const carName = {model: "model-y", name:"Tesla", color: 'Green'};
  return(
    <>
      <h2 className='App'>This is a Garage function calling Car inside!!</h2>
    <Car brand= {carName} />
    <Football />
    </>
    
  )
}

function Football() {
  const shoot = () => {
    alert("This is a click function");
  }
  return(
    <button onClick={shoot}>Click shoot!!</button>
  );
}



export default Garage;
