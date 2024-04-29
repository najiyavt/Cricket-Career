function handleFormSubmit(event){
    event.preventDefault()

    const formData = new FormData(event.target);

    const profileData = {};
    formData.forEach((value , key) => {
        profileData[key] = value
    })

    axios
    .post(`http://localhost:3000/profile`,profileData)
    .then(res => {
        console.log(res.data,'data submitted succesfully')
    })
    .catch(err => console.log(err))
}
function search(){
    const playerName = document.getElementById('searchData').value.trim();
    axios
    .get(`http://localhost:3000/profile/name/${playerName}`)
    .then(res => {
        const player = res.data;
        const profile = document.querySelector('.profile');
        profile.innerHTML=`
        <h3>${player.name}</h3>
        <img src = ${player.imgUrl}>
        <p>${player.dob}</p>
        <p>${player.place}</p>
        <p>${player.career}</p>
        <p>${player.score}</p>
        <button onclick='editFunction(${player.id})'>Edit</button>
        `
        document.getElementById('searchData').value='';
    })
    .catch(err => {
        console.log(err)
        document.getElementById('playerDetails').innerHTML = '<p>Player not found</p>';
    })
}
function editFunction(id){
    axios
    .get(`http://localhost:3000/profile/name/${playerName}`)
    .then(res => {
        newValue = res.data;
        document.getElementById('name').value=newValue.name;
        document.getElementById('imgUrl').value=newValue.imgUrl;
        document.getElementById('dob').value=newValue.dob;
        document.getElementById('place').value=newValue.place;
        document.getElementById('career').value=newValue.career;
        document.getElementById('score').value=newValue.score;

        axios
        .delete(`http://localhost:3000/profile/id/${id}`)
        .then(res => {
           document.getElementById('searchData').innerHTML='';
        })
        .catch(err => {
            console.log(err)
            alert('Player not found or error fetching data. Please try again.');
        })
    })
    .catch(err => console.log(err))
}