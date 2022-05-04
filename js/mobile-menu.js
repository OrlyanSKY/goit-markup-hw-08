(() => {
    const menuBtnRef = document.querySelector('[data-mobile-btn]');
    const mobileMenuRef = document.querySelector('[data-mobile-menu]');
    menuBtnRef.addEventListener('click', () => {
        menuBtnRef.classList.toggle('is-open');
        mobileMenuRef.classList.toggle('is-open');
    });
})();
