const userDataLoad = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUserData(data.results))
}

const displayUserData = users => {
    const displayData = document.getElementById('users-container');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add("col-12", "col-md-4","col-lg-3");
        div.innerHTML = `
            <div class="card mb-5 shadow rounded">
                <img src="${user.picture.large}" class="card-img-top" alt="Profile">
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning">
                ${user.gender}
                </span>
                <div class="card-body bg-warning text-dark">
                    <span>Country: ${user.nat}</span>
                    <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <span>Age: ${user.dob.age}</span>
                    <p class="card-text"></p>
                    <a href="tel:${user.cell}" class="btn btn-outline-dark">Call Now: ${user.cell}</a>
                </div>
            </div>
        `;
        displayData.appendChild(div);
    });

}
userDataLoad()