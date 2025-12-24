const reviews = [
    { author: "John Doe", rating: 5, date: "2024-03-15", content: "This product is amazing! I wear it every day." },
    { author: "Jane Smith", rating: 4, date: "2024-03-12", content: "Good quality but a bit pricey." },
    // Add more review data here...
];

// Function to render reviews
function renderReviews(reviews) {
    const reviewList = document.querySelector('.reviews-list');
    reviewList.innerHTML = ''; // Clear previous reviews

    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-rating">${'★'.repeat(review.rating)}</div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="review-body">
                <p>${review.content}</p >
            </div>
        `;
        reviewList.appendChild(reviewItem);
    });
}

// Initial render
renderReviews(reviews);

// Implement filter and sort functionality
document.getElementById('filter').addEventListener('change', function() {
    const filterValue = this.value;
    let filteredReviews = reviews;

    if (filterValue !== 'all') {
        const stars = parseInt(filterValue.charAt(0));
        filteredReviews = reviews.filter(review => review.rating === stars);
    }

    renderReviews(filteredReviews);
});

document.getElementById('sort').addEventListener('change', function() {
    const sortValue = this.value;
    let sortedReviews = [...reviews];

    if (sortValue === 'highestRated') {
        sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'lowestRated') {
        sortedReviews.sort((a, b) => a.rating - b.rating);
    } else if (sortValue === 'mostRecent') {
        sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderReviews(sortedReviews);
});

// Implement pagination (simplified)
let currentPage = 1;
const reviewsPerPage = 2;

function renderPagination() {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const paginationText = `Page ${currentPage} of ${totalPages}`;
    document.querySelector('.review-pagination span').textContent = paginationText;
}

function paginateReviews() {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const paginatedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);
    renderReviews(paginatedReviews);
    renderPagination();
}

document.querySelector('.prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        paginateReviews();
    }
});

document.querySelector('.next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        paginateReviews();
    }
});

// Initial pagination render
paginateReviews();