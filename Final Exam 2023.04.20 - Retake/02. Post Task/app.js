window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById("task-title");
    const categoryInput = document.getElementById("task-category");
    const contentInput = document.getElementById("task-content");
    const reviewListUl = document.getElementById("review-list");
    const publishedListUl = document.getElementById("published-list");
    const publishButton = document.getElementById("publish-btn");

    publishButton.addEventListener("click", addTaskToReviewList);

    function addTaskToReviewList() {
        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        if (!title || !category || !content) {
            return;
        }

        clearInputFields();
        reviewListUl.appendChild(createTaskHTML(title, category, content));
    }

    function createTaskHTML(title, category, content) {
        const titleH4 = document.createElement("h4");
        titleH4.textContent = title;
        const categoryPar = document.createElement("p");
        categoryPar.textContent = `Category: ${category}`;
        const contentPar = document.createElement("p");
        contentPar.textContent = `Content: ${content}`;

        const article = document.createElement("article");
        article.appendChild(titleH4);
        article.appendChild(categoryPar);
        article.appendChild(contentPar);

        const editButton = document.createElement("button");
        editButton.classList.add("action-btn", "edit");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editTask);
        const postButton = document.createElement("button");
        postButton.classList.add("action-btn", "post");
        postButton.textContent = "Post";
        postButton.addEventListener("click", postTask);

        const postLi = document.createElement("li");
        postLi.classList.add("rpost");
        postLi.appendChild(article);
        postLi.appendChild(editButton);
        postLi.appendChild(postButton);

        function editTask() {
            titleInput.value = title;
            categoryInput.value = category;
            contentInput.value = content;
            reviewListUl.removeChild(postLi);
        }

        function postTask() {
            postLi.removeChild(editButton);
            postLi.removeChild(postButton);
            publishedListUl.appendChild(postLi);
        }

        return postLi;
    }

    function clearInputFields() {
        titleInput.value = "";
        categoryInput.value = "";
        contentInput.value = "";
    }
}