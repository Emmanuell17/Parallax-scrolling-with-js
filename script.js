const bg = document.querySelector(".parallaxLayer.background");
const fg = document.querySelector(".parallaxLayer.foreground");
const taglineContainers = document.querySelectorAll(".taglineContainer");
const taglines = document.querySelectorAll(".tagline");
const destinationsTitle = document.querySelector(".destinationsTitle");
const photos = document.querySelectorAll(".photoContainer");
const destinationsSection = document.querySelector(".destinations");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;

  // Parallax greeting
  bg.style.transform = `translateY(${scrollY * 0.3}px)`;    // slower
  fg.style.transform = `translateY(${scrollY * 0.6}px)`;    // faster

  // Tagline subtle slide
  taglineContainers.forEach((container, i) => {
    const rect = container.getBoundingClientRect();
    const offset = rect.top - windowH / 2;
    const x = Math.max(-100, Math.min(100, -offset * 0.2));
    taglines[i].style.transform = `translateX(${x}px)`;
  });

  // Destinations reveal
  const destOffset = destinationsSection.offsetTop;
  const into = scrollY - destOffset + windowH;

  if (into > 0) {
    destinationsTitle.style.transform = `translateY(${Math.max(0, 100 - into * 0.1)}px)`;
    photos.forEach((p, idx) => {
      p.style.transform = `translateX(${Math.max(0, 300 - into * 0.3 - idx * 100)}px)`;
    });
  }
});
