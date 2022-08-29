// data fetch for search 
const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
// search result function 
const displayMeals = myMeals =>{
    // console.log(myMeals)
    const mealsContiner = document.getElementById('meals-continer');
    mealsContiner.innerHTML = ``;
    for(const meal of myMeals){
        // console.log(meal)
        const singleMeals = document.createElement('div');
        singleMeals.classList.add('col-12')
        singleMeals.innerHTML = `
            <div class="card bg-dark shadow-lg">
                <div class="row">
                    <div class="col-4 position-relative">
                        <img src="${meal.strMealThumb}" class="card-img-top position-absolute" alt="thubmnail">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title text-warning">Name: ${meal.strMeal}</h5>
                            <h6><span class="fw-bold">Country:</span> ${meal.strArea}</h6>
                            <p class="card-text">${meal.strInstructions.slice(0 , 120)}...</p>
                            <button onclick="modalPopupData(${meal.idMeal})" class="btn btn-outline-warning">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        mealsContiner.appendChild(singleMeals);
    }
}

// function for modal 
const modalPopupData = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => modalPopup(data.meals[0]))
}

// function for modal 
const modalPopup = mealInner => {
    // console.log(mealInner);
    const foodModalBody = document.getElementById('food-pop-modal');
    foodModalBody.innerHTML =`
        <div class="card-body">
            <span class="food-btn-close text-end d-block" role="button" tabindex="0">✖</span>
            <div class="video-container">
                <iframe width="420" height="200" src="https://www.youtube.com/embed/${mealInner.strYoutube.slice(32,80)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h5 class="card-title text-info pt-3">Name: ${mealInner.strMeal}</h5>
            <div class="food-details d-flex justify-content-between py-3"> 
                <p><span class="fw-bold">Country: </span>${mealInner.strArea}</p>
                <p><span class="fw-bold">Category: </span>${mealInner.strCategory}</p>
            </div>
            <p>${mealInner.strInstructions}</p>
        </div>
    `;
    const foodDetailsPop = document.getElementById('foodModal');
    foodDetailsPop.style.display = 'block';
    const closeButton = document.getElementsByClassName('food-btn-close')[0];
    closeButton.onclick = () =>{
        foodDetailsPop.style.display = 'none';
    } 

}

// search form 
const searchFoods = () =>{
    const searchFood = document.getElementById('search-field');
    const searchField = searchFood.value;
        loadMeals(searchField);
        searchFood.value = '';

}
// default list 
loadMeals('fish');

