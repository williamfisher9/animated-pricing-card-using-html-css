const teamBtn = document.querySelector("#teamButton");
const basicBtn = document.querySelector("#basicButton");
const communityBtn = document.querySelector("#communityButton");

const teamPriceDetails = document.querySelector(".team-details-content");
const basicPriceDetails = document.querySelector(".basic-details-content");
const communityPriceDetails = document.querySelector(".community-details-content");

teamBtn.addEventListener("click", () => {
    teamPriceDetails.style.display = "block";
    basicPriceDetails.style.display = "none";
    communityPriceDetails.style.display = "none";
    teamButton.classList.add("show-button-css");
    basicButton.classList.remove("show-button-css");
    communityButton.classList.remove("show-button-css");
});

basicBtn.addEventListener("click", () => {
    teamPriceDetails.style.display = "none";
    basicPriceDetails.style.display = "block";
    communityPriceDetails.style.display = "none";
    teamButton.classList.remove("show-button-css");
    basicButton.classList.add("show-button-css");
    communityButton.classList.remove("show-button-css");
});

communityBtn.addEventListener("click", () => {
    teamPriceDetails.style.display = "none";
    basicPriceDetails.style.display = "none";
    communityPriceDetails.style.display = "block";
    teamButton.classList.remove("show-button-css");
    basicButton.classList.remove("show-button-css");
    communityButton.classList.add("show-button-css");
});


window.onload = function classFiller() { 
    teamButton.classList.add("show-button-css");
} 