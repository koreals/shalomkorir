function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".responsive-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const modal = document.getElementById('modal');
const moreBtn = document.getElementById('moreBtn');
const closeBtn = document.getElementsByClassName('close')[0];

moreBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

