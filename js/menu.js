
const cardsMenu = document.querySelector('.cards-menu')

const changeTitle = (restourant) => {
    const  restaurantTitle = document.querySelector('.restaurant-title')

    restaurantTitle.textContent = restourant.name
}

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) =>{
        const card = document.createElement('div')

        card.classList.add('card')

        card.innerHTML = `
            <img src="${image}" alt="image" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>

                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>

              <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `
        cardsMenu.append(card)
    })
}

if (localStorage.getItem('restourant')){
    const restourant = JSON.parse(localStorage.getItem('restourant'))

    changeTitle(restourant)

    fetch(`./db/${restourant.products}`)
    .then((response) =>response.json())
    .then((data) => {
       renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
}else{
    window.location.href = '/'
}


