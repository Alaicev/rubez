const bar = document.querySelectorAll('.skill__bar');
const barNum = document.querySelectorAll('.skill__num-progerss');

let SkillLevel = [70, 20, 50, 10];

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
  bar.forEach((el, i) => el.style.width = SkillLevel[i] + "%")
  barNum.forEach((el, i) => el.innerHTML = SkillLevel[i] + "%")
  } else {
    bar.forEach((el, i) => el.style.width = 0 + "%")
  }
}) 