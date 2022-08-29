
function fatchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => loadData(data))
}

function loadData(users) {
    const postList = document.getElementById('postlist');
    for (const user of users) {
        const post = document.createElement('div');
        post.classList.add('single-post');
        post.innerHTML = `
            <h4>User ID: ${user.userId} </h4>
            <h2>User Title: ${user.title}</h2>
            <p>Description: ${user.body}</p>
        `
        postList.appendChild(post);
    }
}

fatchData()
