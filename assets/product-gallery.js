class ProductGallery {
  constructor(container) {
    this.container = container;
    this.mediaItems = container.querySelectorAll('.product-gallery__media-item');
    this.thumbnails = container.querySelectorAll('.product-gallery__thumbnail');
    this.currentIndex = 0;

    this.init();
  }

  init() {
    // Add click event listeners to thumbnails
    this.thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        this.setActiveMedia(index);
      });
    });

    // Determine initial active index based on visible media item
    this.mediaItems.forEach((item, index) => {
      if (!item.classList.contains('hidden')) {
        this.currentIndex = index;
      }
    });

    // Ensure the correct thumbnail is active initially
    this.setActiveMedia(this.currentIndex);

    // Listen for custom event to change image
    document.addEventListener('stashkart:gallery:go-to-image', (event) => {
      if (event.detail && typeof event.detail.index === 'number') {
        this.setActiveMedia(event.detail.index);
      }
    });
  }

  setActiveMedia(index) {
    if (index < 0 || index >= this.mediaItems.length) return;

    // Update thumbnails
    this.thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (this.thumbnails[index]) {
      this.thumbnails[index].classList.add('active');
    }

    // Update media items visibility
    this.mediaItems.forEach((item, i) => {
      if (i === index) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
        // Pause videos/models when hidden
        const video = item.querySelector('video, iframe');
        if (video) {
          if (video.tagName === 'VIDEO') {
            video.pause();
          }
          // For iframes we can't easily pause without postMessage logic, ignoring for now as per plan
        }
      }
    });

    this.currentIndex = index;
  }
}

// Initialize all product galleries on the page
document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('.product-gallery');
  galleries.forEach(gallery => new ProductGallery(gallery));
}); 