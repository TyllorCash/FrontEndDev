document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const pipboy = document.getElementById("pipboy");
  const progress = document.querySelector(".progress");

  let percent = 0;

  const boot = setInterval(() => {
    percent += 4;
    progress.style.width = percent + "%";

    if (percent >= 100) {
      clearInterval(boot);

      // Fade loader out
      loadingScreen.classList.add("fade-out");

      setTimeout(() => {
        // hide loader completely
        loadingScreen.classList.add("hidden");

        // reveal Pip-Boy
        pipboy.classList.remove("hidden");
        pipboy.classList.add("fade-in");
      }, 600);
    }
  }, 100);

  // TAB LOGIC
  const tabs = document.querySelectorAll(".tabs button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
