import React from 'react';

function MissedGoal(){
    return <h1>Missed the Goal!!!</h1>;
}

function MadeGoal(){
    return <h1>Goal!!</h1>;
}

function Goal(props){
    const isGoal = props.isGoal;
    return(
        <>
            { isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
}

export default Goal;