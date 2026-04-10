function showSidbar({ x }) {
  const obj = document.querySelector('.update-aside');
  if (x < 50) {
    obj.classList.add('active');
    obj.addEventListener('mousedown', closeSidebar);
  }
}

function closeSidebar({ target }) {
  const obj = document.querySelector('.update-aside');
  if (Array.from(target.classList).includes('update-aside')) {
    obj.classList.remove('active');
    obj.removeEventListener('mousedown', closeSidebar);
  }
}

window.addEventListener('mousemove', showSidbar);
