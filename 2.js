function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}