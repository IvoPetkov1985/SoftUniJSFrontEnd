function attachEvents() {
    const postsURL = "http://localhost:3030/jsonstore/blog/posts";
    const commentsURL = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const postsList = document.getElementById("posts");

    const viewPostButton = document.getElementById("btnViewPost");
    const postTitleEl = document.getElementById("post-title");
    const postBodyEl = document.getElementById("post-body");
    const commentsList = document.getElementById("post-comments");

    loadPostsButton.addEventListener("click", loadPosts);
    viewPostButton.addEventListener("click", loadComments);

    async function loadPosts() {
        postsList.innerHTML = "";
        const arrayOfPosts = await getArrayOfPosts();

        for (const postObj of arrayOfPosts) {
            const optionEl = document.createElement("option");
            optionEl.setAttribute("value", postObj.id);
            optionEl.textContent = postObj.title;
            postsList.appendChild(optionEl);
        }
    }

    async function loadComments() {
        commentsList.innerHTML = "";
        const arrayOfPosts = await getArrayOfPosts();
        const currentPostId = postsList.value;
        const selectedPost = arrayOfPosts.find(p => p.id === currentPostId);
        postTitleEl.textContent = selectedPost.title;
        postBodyEl.textContent = selectedPost.body;

        const requestForComments = await fetch(commentsURL);
        const commentsObjs = await requestForComments.json();
        const arrayOfComments = Object.values(commentsObjs);
        const filteredComments = arrayOfComments.filter(c => c.postId === selectedPost.id);

        for (const commentObj of filteredComments) {
            const liEl = document.createElement("li");
            liEl.setAttribute("id", commentObj.id);
            liEl.textContent = commentObj.text;
            commentsList.appendChild(liEl);
        }
    }

    async function getArrayOfPosts() {
        const requestForPosts = await fetch(postsURL);
        const postsObjs = await requestForPosts.json();
        return Object.values(postsObjs);
    }
}

attachEvents();