const greetingTextContainer = document.querySelector(".greetingTextContainer");
const greetingImgContainer = document.querySelector(".greetingImgContainer");
const authorName = document.querySelector(".name");
const taglineContainers = document.querySelectorAll(".taglineContainer");
const taglines = document.querySelectorAll(".tagline");
const destinationsTitle = document.querySelector(".destinationsTitle");
const photos = document.querySelectorAll(".photoContainer");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;

  // GREETING Section animations
  greetingTextContainer.style.transform = `translateY(${scrollY * 0.1}px)`;
  greetingImgContainer.style.transform = `translate(${scrollY * 0.3}px, ${scrollY * 0.5}px)`;

  // NAME Section
  authorName.style.transform = `translateX(${scrollY * 0.1}px)`;

  // TAGLINES animations
  taglineContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    const offset = rect.top - windowHeight / 2;
    const maxTranslate = 100; // tweak max movement
    let x = Math.max(-maxTranslate, Math.min(maxTranslate, -offset * 0.2));
    taglines[index].style.transform = `translateX(${x}px)`;
  });

  // DESTINATIONS animations
  const destinationsOffset = document.querySelector(".destinations").offsetTop;
  const scrollIntoDestinations = scrollY - destinationsOffset + windowHeight;

  if (scrollIntoDestinations > 0) {
    destinationsTitle.style.transform = `translateY(${Math.max(0, 100 - scrollIntoDestinations * 0.1)}px)`;

    photos.forEach((photo, index) => {
      photo.style.transform = `translateX(${Math.max(0, 300 - scrollIntoDestinations * 0.3 - index * 100)}px)`;
    });
  }
});

