// Get modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Event listener for clicking on images
const imageLinks = document.querySelectorAll(".image-link");
imageLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default link behavior
    const imageSrc = this.getAttribute("data-image");
    modal.style.display = "flex"; // Show the modal
    modalImage.src = imageSrc; // Set the image in the modal
  });
});

// Event listener for closing the modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

// Close modal if clicked outside the image
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none"; // Hide the modal if clicked outside the image
  }
});
