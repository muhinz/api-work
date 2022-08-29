function photoLoad(){
    fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(data => collectPhotos(data))
}
photoLoad()

function collectPhotos(photos){
    const albumList = document.getElementById('photolist');
    for(const photo of photos){
        const div = document.createElement('div');
        div.classList.add(...["col","col-md-6","col-lg-4"]);
        div.innerHTML = `
            <span>${photo.id}</span>
            <h4>Name: ${photo.name}</h4>
            <p>Email: ${photo.email}</p>

        `
        albumList.appendChild(div);

    }
}