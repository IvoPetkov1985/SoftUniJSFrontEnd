function attachEvents() {
    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

    const postsLoadButton = document.getElementById("btnLoadPosts");
    const postsSelectList = document.getElementById("posts");
    const viewButton = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBodyPar = document.getElementById("post-body");
    const commentsList = document.getElementById("post-comments");

    postsLoadButton.addEventListener("click", async () => {
        postsSelectList.innerHTML = "";

        const postsRequest = await fetch(postsUrl);
        const postsObjects = await postsRequest.json();

        const arrayOfPosts = Object.values(postsObjects);
        const fragment = document.createDocumentFragment();

        arrayOfPosts.forEach(post => {
            const optionElement = document.createElement("option");
            optionElement.value = post.id;
            optionElement.textContent = post.title;
            fragment.appendChild(optionElement);
        });

        postsSelectList.appendChild(fragment);
    });

    viewButton.addEventListener("click", async () => {
        commentsList.innerHTML = "";
        const currentPostId = postsSelectList.value;

        const postsRequest = await fetch(postsUrl);
        const postsObjects = await postsRequest.json();

        const arrayOfPosts = Object.values(postsObjects);
        const currentPost = arrayOfPosts.find(p => p.id === currentPostId);

        postTitle.textContent = currentPost.title;
        postBodyPar.textContent = currentPost.body;
        
        const commentsRequest = await fetch(commentsUrl);
        const commentsObjects = await commentsRequest.json();

        const arrayOfComments = Object.values(commentsObjects);
        const correspondingComments = arrayOfComments.filter(c => c.postId === currentPostId);

        const fragment = document.createDocumentFragment();

        correspondingComments.forEach(comment => {
            const liElement = document.createElement("li");
            liElement.setAttribute("id", comment.id);
            liElement.textContent = comment.text;
            fragment.appendChild(liElement);
        });

        commentsList.appendChild(fragment);
    });
}

attachEvents();