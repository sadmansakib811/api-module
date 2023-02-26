function usersJson(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(json => displaydata(json))
}

function displaydata(data){
    console.log(data);
}