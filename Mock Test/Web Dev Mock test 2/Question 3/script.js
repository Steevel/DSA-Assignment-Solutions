const loader = document.getElementById("loader");
const postsContainer = document.getElementById("posts");

// Fetch data from JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    // Hide the loader
    loader.style.display = "none";
    console.log("POSTS", posts);
    // Loop through the posts and create HTML elements
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const titleElement = document.createElement("h2");
      titleElement.classList.add("post-title");
      titleElement.textContent = post.title;

      const bodyElement = document.createElement("p");
      bodyElement.classList.add("post-body");
      bodyElement.textContent = post.body;

      postElement.appendChild(titleElement);
      postElement.appendChild(bodyElement);

      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
