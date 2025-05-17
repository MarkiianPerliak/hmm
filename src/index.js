// 1
const addBookmarkBtnElement = document.getElementById("addBookmarkBtn");
const bookmarkListElement = document.getElementById("bookmarkList");

addBookmarkBtnElement.addEventListener("click", (event) => {
    const bookmarkInputElement = document.getElementById("bookmarkInput").value;
    const elementHtml = `
        <li>
      <p>${bookmarkInputElement}</p>
      <button class="dabutton">X</button>
    </li>
    `;
    bookmarkListElement.insertAdjacentHTML("beforeend", elementHtml)
    const dabutton = document.querySelector(".dabutton");
dabutton.addEventListener("click", (event) => {
    dabutton.parentElement.style.display = "none";
})
})

// 2
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const test = localStorage.getItem("userInfo")
const arr = JSON.parse(test);

usernameElement.value = arr.name;
passwordElement.value = arr.password;