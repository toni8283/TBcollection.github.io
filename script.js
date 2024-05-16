alert("please use desktop for previewing")
function showPayment() {
    document.getElementById('payment-section').classList.remove('hidden');
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    if (reviewText && rating) {
        const reviewList = document.getElementById('review-list');
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('review-item');
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        reviewItem.innerHTML = `
            <div>${reviewText}</div>
            <div>Rating: ${rating.value} stars</div>
            <div>Submitted on: ${formattedDate}</div>
        `;
        reviewList.appendChild(reviewItem);
        document.getElementById('review-text').value = '';
        rating.checked = false; // Clear the selected rating
    }
});

