import React from "react";

function Car(props){
    return <li>This is a car list {props.carList}</li>;
}

function GarageList(){
    const cars = ['Ford', 'Tesla','KIA','BMW'];

    return(
        <>
            <h1>Dispaly Garage car list</h1>
            <ul>
                {cars.map((cars) => <Car carList={cars}/>)}
            </ul>
        </>
    );
}

export default GarageList;