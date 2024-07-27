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
      displayData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
btn.addEventListener("click", getData);
search.addEventListener("keyup", (event) => { 
     event.key === "Enter"
      getData();
});






