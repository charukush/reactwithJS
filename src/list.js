import React from "react";

function Car(props){
    return <li>This is a {props.brand}.</li>;
}

function GarageList(){
    const cars = [
        {id: 1, brand: 'Tesla'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand:'Audi'}
    ];

    return(
        <>
            <h1>Dispaly Garage car list</h1>
            <ul>
                {cars.map((cars) => <Car key={cars.id} brand={cars.brand} />)}
            </ul>
        </>
    );
}

export default GarageList;