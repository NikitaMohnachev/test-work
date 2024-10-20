function openModal () {
    const openModalBtn = document.querySelectorAll('.card__btn');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');

    openModalBtn.forEach(function(btn) {btn.addEventListener('click', function () {modal.classList.add('open')});});
    modalClose.addEventListener('click', function () {modal.classList.remove('open')});

    document.querySelector('.section-form .form').addEventListener('click', event =>{
        event._isClickWithInModal = true;
    });
    document.getElementById('modal').addEventListener('click', event=> {
        if(event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
});
};
export default openModal;