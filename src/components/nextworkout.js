import './nextworkout.css';
import { useState } from 'react';

export default Nextworkout;

function Nextworkout() {
    const [nextWorkoutDate, setNextWorkoutDate] = useState(getNextWorkoutDate());
    const [chosenSet, setChosenSet]= useState(getExerciseSet());
    
    return (
        <div class="nextWorkoutDiv">
            <p>Next workout: {nextWorkoutDate}</p>
            <p>Chosen set: <a href="#">{chosenSet}</a></p>
            <button class="nextWorkoutButton">START</button> 
            <button class="nextWorkoutButton">EDIT</button>
        </div>
    );
}


function getNextWorkoutDate() {
    return Date().toLocaleDateString();
}


function getExerciseSet() {
    let exerciseSetsList = [ 
        'Legs',
        'Arms',
        'Chest',
        'Back',
        'Cardio'
    ];

    return  exerciseSetsList[Math.floor(Math.random() * exerciseSetsList.length)];
}
