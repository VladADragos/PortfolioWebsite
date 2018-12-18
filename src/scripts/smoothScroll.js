const smoothScroll = (selector, duration) => {
  console.log("Smoothscroll script imported");
  let target = document.querySelector(selector);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset || window.scrollY;
  let distance = targetPosition - startPosition;
  let startTime = null;
  const loop = currentTime => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  };
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(loop);
};
export const scrollToPortfolio = () => {
  console.log("not sc");
  let target = document.querySelector("#portfolio");
  target.scrollIntoView();
};
export default smoothScroll;
