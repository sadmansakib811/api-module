
console.log(data);
for(let i =0; i<2; i++){
    const carData = document.getElementById('car-section');
    const carName = data[i].name;

    const makeDiv = document.createElement('div');
    makeDiv.classList.add('card');
    makeDiv.style.width = '18rem';
    

    makeDiv.innerHTML = `

    <img src="${data[i].imageURL}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">
            ${data[i].description}
          </p>
          <a href="#" class="btn btn-primary">Car Price: ${data[i].price}</a>
    
    `
    carData.appendChild(makeDiv);




}