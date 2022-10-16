const loadMeals = async (searchText,datalimit) => {
    // const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url);
    const data = await res.json()
    displayMeals(data.drinks, datalimit)
}

const displayMeals = (drinks,datalimit) => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';

    if (drinks === null && datalimit) {
        swal.fire({
        title: 'Please Type A phone name',
        text: 'Please Search a valid Phone Name',
        icon: 'error',
        confirmButtonText: 'close'
        })
        toggoleSpiner(false)
    }

    if (datalimit&& drinks.length > 10) {
        drinks = drinks.slice(0, 10)
        document.getElementById('show-all').classList.remove('d-none')
    }
    else {
        document.getElementById('show-all').classList.add('d-none')
    }
    


    drinks.forEach(drink => {
        console.log(drink)

        const drinksDiv = document.createElement('div');
        drinksDiv.classList.add('col')
        drinksDiv.innerHTML = `
            <div class="card">
                        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${drink.strGlass}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                        </div>
                    </div>
        `;
        mealsContainer.appendChild(drinksDiv)

        toggoleSpiner(false)
    })
}
const toggoleSpiner = isloading => {
    const loaderSections = document.getElementById('loader');
    if (isloading) {
        loaderSections.classList.remove('d-none')
    }
    else {
        loaderSections.classList.add('d-none')
    }
}

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10)
})

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
})

document.getElementById('search-field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        processSearch(10)
    }
})

loadMeals()