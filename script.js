
document.getElementById('menuToggle').onclick = function() {
    document.getElementById('menuPopup').classList.add('active');
    document.getElementById('menuOverlay').classList.add('active');
};
document.getElementById('closeMenu').onclick = function() {
    document.getElementById('menuPopup').classList.remove('active');
    document.getElementById('menuOverlay').classList.remove('active');
};
document.getElementById('menuOverlay').onclick = function() {
    document.getElementById('menuPopup').classList.remove('active');
    document.getElementById('menuOverlay').classList.remove('active');
};