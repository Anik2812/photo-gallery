document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { url: 'D:\\d_drive\\Arcade\\Photo gallery\\photo 1.webp', caption: 'Photo 1' },
        { url: 'https://via.placeholder.com/600x400?text=2', caption: 'Photo 2' },
        { url: 'https://via.placeholder.com/600x400?text=3', caption: 'Photo 3' },
        { url: 'https://via.placeholder.com/600x400?text=4', caption: 'Photo 4' },
        { url: 'https://via.placeholder.com/600x400?text=5', caption: 'Photo 5' }
    ];

    const gallery = document.getElementById('gallery');
    images.forEach((image) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';

        // Create an img element and set its src to the image URL
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;
        img.setAttribute('data-caption', image.caption);
        div.appendChild(img);

        gallery.appendChild(div);

        div.addEventListener('click', () => {
            showModal(image.url, image.caption);
        });
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('close');

    function showModal(imgUrl, caption) {
        modal.style.display = 'block';
        modalImg.src = imgUrl;
        captionText.innerHTML = caption;
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
