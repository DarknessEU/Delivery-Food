/*const array = [11, 34, 67, 798, 45];

*** new version ***
array.forEach((elem, index, array) => {

})

*** old version ***
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}*/
const cardsRestaurants = document.querySelector('.cards-restaurants');
    cardsRestaurants.classList.add('123');
    cardsRestaurants.classList.remove('123');
    cardsRestaurants.classList.toggle('123');
    cardsRestaurants.classList.toggle('123');
    console.dir(cardsRestaurants);

const renderItems = (data) => {
    data.forEach((item) =>{
        const {image, kitchen, name, price, products, stars, time_of_delivery} = item
       const a = document.createElement('a')



       a.setAttribute('href', '/restourant.html')
       a.classList.add('card');
       a.classList.add('cards-restaurants');
       a.dataset.products = products;


       a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                            <h3 class="card-title">${name}</h3>
                            <span class="card-tag tag">${time_of_delivery} мин</span>
                        </div>

                        <div class="card-info">
                            <div class="rating">
                            ${stars}
                            </div>
                            <div class="price"> ${ price}</div>
                            <div class="category">${kitchen}</div>
                        </div>

                    </div>


                    `;
    a.addEventListener('click', (e) =>{
        e.preventDefault()


        localStorage.setItem('restourant', JSON.stringify(item))

        window.location.href = '/restourant.html'
    })

     cardsRestaurants.append(a)
    })
}

fetch('https://test-f1919-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) =>response.json())
    .then((data) => {
       renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })