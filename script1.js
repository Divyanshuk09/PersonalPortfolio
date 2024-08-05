document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    let currentPage = 0;

    function showPage(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        updateButtons();
    }

    function updateButtons() {
        document.getElementById('prev').disabled = currentPage === 0;
        document.getElementById('next').disabled = currentPage === items.length - 1;
    }

    document.getElementById('prev').addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('next').addEventListener('click', function() {
        if (currentPage < items.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial setup
    showPage(currentPage);
});
