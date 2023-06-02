document.addEventListener('DOMContentLoaded', function() {
    const currentRankDropdown = document.getElementById('current-rank-dropdown');
    const desiredRankDropdown = document.getElementById('desired-rank-dropdown');
    const currentRankImages = document.querySelectorAll('#current-rank-image .rank-image-item');
    const desiredRankImages = document.querySelectorAll('#desired-rank-image .rank-image-item');
  
    currentRankDropdown.addEventListener('change', function() {
      const selectedRank = this.value;
  
      currentRankImages.forEach(function(image) {
        if (image.getAttribute('data-rank') === selectedRank) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    });
  
    desiredRankDropdown.addEventListener('change', function() {
      const selectedRank = this.value;
  
      desiredRankImages.forEach(function(image) {
        if (image.getAttribute('data-rank') === selectedRank) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    });
  });
  