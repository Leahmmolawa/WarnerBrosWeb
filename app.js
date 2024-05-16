const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});



function openVideo() {
  window.open('https://youtu.be/wPwzBUui1GA', 'DRAMA');
}
function openVideo() {
  window.open('https://youtu.be/vxgZJdCurrM', 'HORROR');
}
function openVideo() {
  window.open('https://youtu.be/A5GJLwWiYSg', 'DOCUMENTARY');
}
function openVideo() {
  window.open('https://youtu.be/LoebZZ8K5N0', 'ACTION');
}
function openVideo() {
  window.open('https://youtu.be/pWdKf3MneyI?si=Qb5Z3bmURSIBdvxE', 'ADVENTURE');
}
function openVideo() {
  window.open('https://youtu.be/jWM0ct-OLsM?si=oT8AYDe-PSubuqzZ', 'ANIMATION');
}
function openVideo() {
  window.open('https://youtu.be/3fdRKme00uI', 'FANTASY');
}
function openVideo() {
  window.open('https://youtu.be/5UEv03g51kU', 'SCI-FI');
}
function openVideo() {
  window.open('https://youtu.be/ns8weNznn1Y', 'FAMILY');
}
function openVideo() {
  window.open('https://youtu.be/jEDaVHmw7r4', 'COMEDY');
}

