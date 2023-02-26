function fetchData(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res => displayPost(res))

}
fetchData()
function displayPost(res){
const postContainer = document.getElementById('post-container');
for(const post of res){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML =`
    <h1>title: ${post.title}</h1>
    <p>post: ${post.body} </p>
    <p>UserID:${post.userId} </p>
    `;
    postContainer.appendChild(postDiv);
}

}


