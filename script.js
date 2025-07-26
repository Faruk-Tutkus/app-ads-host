// Küçük bir scroll animasyonu efekti
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.style.transition = "all 0.6s ease-out";
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
