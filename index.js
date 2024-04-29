// index.js

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    
    // Convert formData to JSON
    const playerData = {};
    formData.forEach((value, key) => {
        playerData[key] = value;
    });

    // Send data to server using Axios POST request
    axios.post('http://localhost:4000/players', playerData)
        .then(response => {
            console.log('Player data submitted successfully:', response.data);
            // You can add additional logic here if needed
        })
        .catch(error => {
            console.error('Error submitting player data:', error);
        });
}

function searchPlayer() {
    const searchInput = document.querySelector('input[type="text"]');
    const playerName = searchInput.value.trim();

    // Send search query to server using Axios GET request
    axios.get(`http://localhost:4000/players?name=${playerName}`)
        .then(response => {
            console.log('Player found:', response.data);
            // Display the player information on the page
        })
        .catch(error => {
            console.error('Error searching for player:', error);
        });
}


// function handleFormSubmit(event){
//     event.preventDefault()
//     const profileDetails = {
//         name:event.target.name.value,
//         dob:event.target.dob.value,
//         imgUrl:event.target.imgUrl.value,
//         place:event.target.place.value,
//         career:event.target.career.value,
//         score:event.target.score.value,
//     }
//     axios.post(`http://localhost:4000/profle`,profileDetails)
//     .then(res => {
//         display(res.data);
//         event.target.reset()
//     })
//     .catch(err => console.log(err))
// }

// function display(data){

// }

// function search(){

// }

// document.addEventListener('DOMContentLoaded',async() => {
//     axios.get(`http://localhost:4000/profle`)
//     .then(res => {
//         res.data.forEach(profile => {
//             display(profile)
//         });
//     })
//     .catch(err => console.log(err))
// })