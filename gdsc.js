/*Sign In*/ 
const openModalButton = document.querySelector('.open-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

/*Join Us*/
var modal = document.getElementById("joinUsModal");

var btn = document.getElementById("joinUsId");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
