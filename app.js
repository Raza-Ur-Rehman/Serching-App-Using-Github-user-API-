const search = document.getElementById("user-search");
const btn = document.getElementById("btn");

const getData = () => {
  if (search.value.trim() === "") {
    alert("Please enter a user name");
    return;
  } else {
    ApiCall();
  }
};
function ApiCall() {
  fetch(`https://api.github.com/users/${search.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
btn.addEventListener("click", getData);
search.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      getData();
    }
  
});


function displayData(data) {
    const box = document.getElementById("box");
    box.innerHTML = `
    <div class="card">
      <img src="${data.avatar_url}" alt="User Avatar" class="card-img">
      <div class="profile-info">
        <h2 class="title">${data.name}</h2>
        <p class="user-name">${data.login}</p>
        <p class="bio"> ${data.bio} </p>
        <div class="follow-box">
                    <i class="fa-solid fa-users"></i>
                    <span>${data.followers} Follower</span>
                    <span>${data.following} Following</span>
                    </div>
                    <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
        <a href="${data.html_url}" id="profile-link">Follow</a>
      </div>
    </div>
    `;
    search.value = "";
}



