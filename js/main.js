//The user enters something and submits
const inputtedValue = document.querySelector('.inputValue');
document.querySelector('button').addEventListener('click', exercisesForMusclesThatHurt)
// Empty Object to Store what I get back from API
let stuffReturned = {}

// API key: exlib_B9YeNU0fafJq5iD5VoboY9MJec0Fcdr5
// API site: https://exerciseapi.dev/docs/endpoints
// Function that runs after user submits information:
function exercisesForMusclesThatHurt() {
    let media = inputtedValue.value
    console.log(media)
    fetch(`https://api.exerciseapi.dev/v1/exercises?category=mobility&muscle=${media}`, {
        headers: {
            "X-API-Key": "exlib_B9YeNU0fafJq5iD5VoboY9MJec0Fcdr5"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            stuffReturned = data
            console.log('Data from API', data)
            display(stuffReturned)
        })
        .catch(error =>
            console.log(error)
        )
}

// Display what we got from API
function display(dataWeGotFromAPI) {

    console.log(dataWeGotFromAPI)
    document.querySelector('#exerciseCategory').innerText = dataWeGotFromAPI.data[0].category.toUpperCase()
    document.querySelector('#EquipmentParagraph').innerText = dataWeGotFromAPI.data[0].equipment
    document.querySelector('#InstructionsParagraph').innerText = dataWeGotFromAPI.data[0].instructions.join('\n')

}


// // fetch("https://api.exerciseapi.dev/v1/exercises?q=bench%20press&limit=10", {
//     headers: {
// //         "X-API-Key":"exlib_B9YeNU0fafJq5iD5VoboY9MJec0Fcdr5" 
// //     }
// // })