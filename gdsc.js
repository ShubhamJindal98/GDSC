// Get modal elements
const openModalButton = document.querySelector('.open-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

// Open the modal
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Close the modal
closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close the modal if overlay is clicked
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
