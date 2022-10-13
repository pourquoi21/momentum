const logOut = document.querySelector("#log-out");
const username = localStorage.getItem("username");

function handleStorageEmpty(){
    localStorage.clear();
    window.location.reload();
}

logOut.addEventListener("click", handleStorageEmpty);
