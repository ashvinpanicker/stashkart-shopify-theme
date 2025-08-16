document.addEventListener('DOMContentLoaded', function() {
  const marqueeLink = document.querySelector('.marquee-text-link');
  if (marqueeLink) {
    marqueeLink.addEventListener('click', function(event) {
      const url = this.getAttribute('href');
      if (url && url !== '#') {
        window.location.href = url;
      }
    });
  }
});