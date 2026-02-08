document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        vehicleCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });
});