// fetch data from API 
const loadData = async(search) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const getData = await res.json();
    displayPhones(getData.data);
}

// displayPhones function 
const displayPhones = phones =>{
    // console.log(phones);
    const notFound = document.getElementById('not-found');
    if(phones.length === 0){
        notFound.classList.remove('d-none');
    }
    else{
        notFound.classList.add('d-none');
    }
    const phonesContiner = document.getElementById('phones-continer');
    phonesContiner.innerHTML = ``;
    for(const phone of phones){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card bg-dark shadow-lg">
                <div class="row">
                    <div class="col-4 position-relative">
                        <img src="${phone.image}" class="card-img-top phone position-absolute" alt="thubmnail">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title text-info">${phone.phone_name}</h5>
                            <h6><span class="fw-bold">Brand: </span> ${phone.brand}</h6>
                            <button onclick="modalData('${phone.slug}')" class="btn btn-outline-info">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        phonesContiner.appendChild(div);
    }
    spinnerLoad(false);

    const showData = document.getElementById('show-all');
    if(phones.length > 10){
        showData.classList.remove('d-none');
    }
    else{
        showData.classList.add('d-none');
    }
}

const modalData = async(dataId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${dataId}`;
    const res = await fetch(url);
    const getData = await res.json();
    modalPopupData(getData.data);
}
// popup modal function
const modalPopupData = dataId => {
    // console.log(dataId);
    const phoneModalPop = document.getElementById('phone-pop-modal');
    phoneModalPop.innerHTML = `
        <div class="card-body">
            <span class="phone-btn-close text-end d-block mb-3" role="button" tabindex="0">✖</span>
            <img src="${dataId.image}" class="card-img-modal" alt="thubmnail">
            <div class="phone-name d-flex justify-content-between py-3"> 
                <p class="card-title"><span class="fw-bold text-info">Brand: </span> ${dataId.brand}</p>
                <p><span class="fw-bold text-info">Phone: </span>${dataId.name}</p>
            </div>
            <div class="phone-details py-3 text-start bg-dark text-light p-4 mb-3"> 
                <p><span class="fw-bold text-warning">Storage: </span> ${dataId.mainFeatures.storage}</p>
                <p><span class="fw-bold text-warning">Chip Set: </span>${dataId.mainFeatures.chipSet}</p>
                <p><span class="fw-bold text-warning">Display Size: </span>${dataId.mainFeatures.displaySize}</p>
                <p><span class="fw-bold text-warning">Memory: </span>${dataId.mainFeatures.memory}</p>
                <p><span class="fw-bold text-warning">sensors: </span>${dataId.mainFeatures.sensors}</p>
                <p><span class="fw-bold text-warning">Release Date: </span>${dataId.releaseDate}</p>
            </div>
            <a href="#" class="btn btn-primary d-block">Buy Now</a>
        </div>
    `;
    const phoneModal = document.getElementById('phoneModal');
    phoneModal.style.display = 'block';
    const closeButton = document.getElementsByClassName('phone-btn-close')[0]
    closeButton.onclick = () => {
        phoneModal.style.display = 'none';
    }

}
// loading spinner
const spinnerLoad = pageLoading => {
    const loading = document.getElementById('loading');
    if(pageLoading){
        loading.classList.remove("d-none");
    }
    else{
        loading.classList.add("d-none");
    }
}
// search phone function 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    loadData(searchFieldValue);
    searchField.value = '';
    spinnerLoad(true);
}

// search field enter handler
document.getElementById('search-field').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        searchPhone();
    }
})
loadData('iphone');