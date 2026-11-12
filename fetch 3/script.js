const showOnly = fruitItem => { 
  document.querySelectorAll(".description").forEach(descriptionDiv => {descriptionDiv.style.opacity = 0});
  document.querySelector("#description-of-" + fruitItem.innerHTML).style.opacity = 1;
  
}

const showSpecial = () => {
    fetch("daily_special.html")
    .then(
        response => response.text()
    )
    .then(
        text => document.querySelector("#special").innerHTML = text
    )
    .catch(
        error => document.querySelector("#special").innerHTML = "Coming soon!"
    )
}