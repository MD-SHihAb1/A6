const loadLatestPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const posts = await res.json();
    const post = posts;
    // console.log(post);
    displayLatestPost(post);
}

const displayLatestPost = post =>{
    // console.log(post)

    const latestPostContainer = document.getElementById('latest-post-container')

    post.forEach(posts =>{
        console.log(posts);
        const latestPostCard = document.createElement('div');
        latestPostCard.classList = `card w-96 bg-base-100 shadow-xl `;
        latestPostCard.innerHTML = `
        <figure><img src="${posts.cover_image}" alt="Shoes" /></figure>
        <div class="card-body">

        <div class="flex gap-4">
        
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_29_1905)">
        <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 11H20" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_29_1905">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg> 

        </div>

        <div>
        <h1>${posts.author.posted_date ? posts.author.posted_date:'No publish date'}</h1>
        </div>

        </div>         
            

          <h2 class="card-title">${posts.title}</h2>
          <p>${posts.description}</p>

        <div class="">
        
        <div class="flex ">
                    <div class="avatar-group -space-x-6 rtl:space-x-reverse">
            <div class="avatar">
                <div class="w-12">
                <img src="${posts.profile_image}" />
                </div>
            
            </div>





        
        </div>

      
        <div class="mr-16">
        <h2>${posts.author.name}</h2>
        <p>${posts.author.designation ? posts.author.designation:'Unknown'}</p>
        </div>




        `;

        latestPostContainer.appendChild(latestPostCard);
    })
}

loadLatestPost();