document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  const close = document.querySelector('.close');

  document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = image.src;
      caption.innerText = image.alt;
    });
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
