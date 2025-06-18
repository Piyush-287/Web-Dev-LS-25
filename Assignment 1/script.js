//TIMELINE TOGGLE FUNCTIONALITY 
document.querySelectorAll('.timeline-content .toggle').forEach(header => {
  header.addEventListener('click', () => {
    const detail = header.nextElementSibling;
    detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
  });
});

//TIMELINE SCROLL FADE-IN EFFECT
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => timelineObserver.observe(item));

//GALLERY: CIRCULAR SLIDER
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-img');
const total = images.length;

function updateGallery(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}
updateGallery(currentIndex);

document.querySelector('.gallery-btn.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateGallery(currentIndex);
});

document.querySelector('.gallery-btn.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  updateGallery(currentIndex);
});

// ============ GUESTBOOK FORM ============
document.getElementById('guestForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('guestName').value.trim();
  const message = document.getElementById('guestMessage').value.trim();
  if (name && message) {
    const entry = document.createElement('p');
    entry.textContent = `${name}: ${message}`;
    document.getElementById('messages').appendChild(entry);
    this.reset();
  }
});
