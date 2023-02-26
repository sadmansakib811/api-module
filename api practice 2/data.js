const loadUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser= user=>{
const userName = document.getElementById('name');
const gender = document.getElementById('gender');
userName.innerHTML =user.results[0].name.title + ' '+ user.results[0].name.first + ' ' + user.results[0].name.last ;
gender.innerHTML =user.results[0].gender
// location
const location = document.getElementById('location');
location.innerHTML = user.results[0].location.city

// img
const img1 = document.getElementById('img')
img1.innerHTML = `
<img src="${user.results[0].picture.large}" alt="">
`




}
loadUser();