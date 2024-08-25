function zoomCard(card) {
    // Remove active class from all cards
    const cards = document.querySelectorAll('.education-card');
    cards.forEach((c) => c.classList.remove('active'));
    
    // Add active class to the clicked card
    card.classList.add('active');
}
