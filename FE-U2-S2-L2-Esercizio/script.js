//collega gli input nella navbar alle sezioni
document.querySelectorAll("header a").forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// fa sparire le card saldi al click

document.addEventListener("DOMContentLoaded", function () {
  const paragrafo = document.querySelector("#saldi .text-info");
  const cards = document.querySelectorAll("#saldi .card");

  let cardsVisible = true;

  paragrafo.addEventListener("click", function () {
    cards.forEach(function (card) {
      if (cardsVisible) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });

    cardsVisible = !cardsVisible;
  });
});

//fa sparire le card welcome summer al click

document.addEventListener("DOMContentLoaded", function () {
  const paragrafo = document.querySelector("#welcome-summer .text-info");
  const cards = document.querySelectorAll("#welcome-summer .card");

  let cardsVisible = true;

  paragrafo.addEventListener("click", function () {
    cards.forEach(function (card) {
      if (cardsVisible) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });

    cardsVisible = !cardsVisible;
  });
});
