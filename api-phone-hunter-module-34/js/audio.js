const loadData = async() => {
    const res = await fetch(`https://theaudiodb.com/api/v1/json/2/album.php?i=a`);
    const getData = await res.json();
    displayData(getData.album);
}

const displayData = data => {
    console.log(data);
    const audioContainer = document.getElementById('audio-continer');
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card bg-dark shadow-lg">
            <img src="${element.strAlbumThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strAlbum}</h5>
                <p class="card-text">${element.strDescriptionEN}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        audioContainer.appendChild(div);
    });
}
loadData()