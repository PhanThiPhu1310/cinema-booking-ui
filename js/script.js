// Get modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Get all images in the gallery
const galleryItems = document.querySelectorAll(".gallery-item");

// Add click event for each gallery image
galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.textContent = this.alt;
  });
});

// Close the modal when clicking on the "X" button
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the image
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
