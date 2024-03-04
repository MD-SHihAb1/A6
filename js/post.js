const loadPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const posts = await res.json();
    const post = posts.posts;
    // console.log(post);
    displayPost(post);
}
const displayPost = posts =>{
    const postContainer = document.getElementById('post-container')
    posts.forEach(post =>{
        console.log(post);

        const postTitle = document.createElement('div');
        postTitle.classList = `card card-compact w-[40%] bg-base-100 shadow-xl`
        postTitle.innerHTML = `
        <div class="avatar">
                <div class="w-24 rounded-full">
                <figure><img src="${post.image}" alt="Shoes" /></figure>
                </div>
                </div>
        <div class="card-body">
          <div class"flex">
          <div><h5 class="card-title text-xs">#${post.category} <b></b> <b></b> Author:${post.author.name}</h5></div>
          </div>
          <h1 class"font-semibold">${post.title}</h1>
          <p class"text-5xl">${post.description}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        postContainer.appendChild(postTitle);
    } )
}

loadPost();


