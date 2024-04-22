window.addEventListener("load", function() {
  const cards = document.querySelectorAll(".box");

  for (const card of cards) {
    card.style.transition = "transform 0.5s";
    card.style.transform = "scale(0)";
  }

  setTimeout(function() {
    for (const card of cards) {
      card.style.transform = "scale(1)";
    }
  }, 1000);
});