
function handleFormSubmit(event){
    event.preventDefault()

   const profileData = {
    name :event.target.name.value,
    dob :event.target.dob.value,
    imgUrl:event.target.imgUrl.value ,
    place:event.target.place.value,
    career:event.target.career.value, 
    score:event.target.score.value
   }
    axios
    .post(`http://localhost:3000/profile`,profileData)
    .then(res => {
        console.log(res.data,'data submitted succesfully');
       event.target.reset()
    })
    .catch(err => console.log(err))
}

function search(){
    const playerName = document.getElementById('searchData').value;
    axios
    .get(`http://localhost:3000/profile/name/${playerName}`)
    .then(res => {
        const player = res.data;
        const profile = document.getElementById('profile');
        // const form=document.createElement('form')
        profile.innerHTML=`
        <h3>${player.name}</h3>
        <img src ='${player.imgUrl}' width="200">
        <p>${player.dob}</p>
        <p>${player.place}</p>
        <p>${player.career}</p>
        <p>${player.score}</p>
        <button onclick='editFunction(${player.id})' id='editBtn'>Edit</button>
        `;
      //  profile.appendChild(form)
        document.getElementById('searchData').value='';
    })
    .catch(err => {
        console.log(err)
       // document.getElementById('profile').innerHTML = '<p>Player not found</p>';
    })
}

function editFunction(id){
  console.log('Edit button clicked with ID:', id); // Verify that the function is triggered
  axios
  .get(`http://localhost:3000/profile/id/${id}`)//change from put to get
  .then(response => {
   const player=response.data; 
   // for (const key in player) {
   //   const element = document.getElementById(key);
   //   if (element) {
   //     element.value = player[key];
   //   }
   // }
 
   document.getElementById('name').value = player.name;
   document.getElementById('dob').value = player.dob;
   document.getElementById('imgUrl').value = player.imgUrl;
   document.getElementById('place').value = player.place;
   document.getElementById('career').value = player.career;
   document.getElementById('score').value = player.score;
 
   document.getElementById('profile').innerHTML=''
 
   axios
     .delete(`http://localhost:3000/profile/${id}`)
     .then((res)=>{
       console.log('deleted ',res)
     })
     .catch((err)=>{
       console.log(err)
     })
  })
 .catch (err => {
       console.error('Error fetching player data:', error.response.data);
       alert('Player not found or error fetching data. Please try again.');
 })
 }