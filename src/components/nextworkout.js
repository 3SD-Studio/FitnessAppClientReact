import './nextworkout.css';

function Nextworkout() {
    let nextWorkoutDate = new Date().toLocaleDateString();
    
    let exerciseSetsList = [ 
        'Legs',
        'Arms',
        'Chest',
        'Back',
        'Cardio'
      ];
    let chosenSet = exerciseSetsList[Math.floor(Math.random() * exerciseSetsList.length)];
    
    return (
        <div class="nextWorkoutDiv">
            <p>Next workout: {nextWorkoutDate}</p>
            <p>Chosen set: <a href="#">{chosenSet}</a></p>
            <button class="nextWorkoutButton">START</button> 
            <button class="nextWorkoutButton">EDIT</button>
        </div>
    );
}

export default Nextworkout;
