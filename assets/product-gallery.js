class ProductGallery {
  constructor(container) {
    this.container = container;
    this.mainImage = container.querySelector('.product-gallery__main-image');
    this.thumbnails = container.querySelectorAll('.product-gallery__thumbnail');
    this.currentIndex = 0;
    
    this.init();
  }

  init() {
    // Add click event listeners to thumbnails
    this.thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        this.setActiveImage(index);
      });
    });

    // Set initial active state
    this.setActiveImage(0);
  }

  setActiveImage(index) {
    // Remove active class from all thumbnails
    this.thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to selected thumbnail
    this.thumbnails[index].classList.add('active');
    
    // Update main image with fade animation
    const thumbnail = this.thumbnails[index];
    const newImageSrc = thumbnail.getAttribute('data-main-src');
    const newImageSrcset = thumbnail.getAttribute('data-main-srcset');
    // Fade out
    this.mainImage.classList.add('fade-out');
    this.mainImage.classList.remove('fade-in');
    setTimeout(() => {
      this.mainImage.src = newImageSrc;
      if (newImageSrcset) {
        this.mainImage.srcset = newImageSrcset;
      }
      // Fade in after image is loaded
      this.mainImage.onload = () => {
        this.mainImage.classList.remove('fade-out');
        this.mainImage.classList.add('fade-in');
      };
    }, 300);
    
    // Update current index
    this.currentIndex = index;
  }
}

// Initialize all product galleries on the page
document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('.product-gallery');
  galleries.forEach(gallery => new ProductGallery(gallery));
}); 