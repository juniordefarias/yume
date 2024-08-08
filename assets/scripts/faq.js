/* document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq_container > div > div:last-of-type > div");

  faqItems.forEach(item => {
    const question = item.querySelector("div:first-of-type");
    const answer = item.querySelector("div:last-of-type");
    const svg = item.querySelector("svg");

    question.addEventListener("click", () => {
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      svg.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
}); */

document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq_container > div > div:last-of-type > div");

  faqItems.forEach(item => {
    const question = item.querySelector("div:first-of-type");
    const answer = item.querySelector("div:last-of-type");
    const svg = item.querySelector("svg");

    question.addEventListener("click", () => {
      const isVisible = answer.classList.contains("visible");
      if (isVisible) {
        answer.classList.remove("visible");
        svg.style.transform = "rotate(0deg)";
      } else {
        answer.classList.add("visible");
        svg.style.transform = "rotate(180deg)";
      }
    });
  });
});