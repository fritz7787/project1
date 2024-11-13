document.addEventListener("DOMContentLoaded", function() {

  function initMap() {
    const mapOptions = {
      center: { lat: 39.828358060251446, lng: -98.57948392933929 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
      mapTypeControl: true,
      minZoom: 10,
      maxZoom: 16
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: 39.828358060251446, lng: -98.57948392933929 },
      map: map,
      title: "Geographic Center of the United States"
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<p>Geographic Center of the United States</p>"
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  if (typeof google !== "undefined") {
    initMap();
  }

  const slideImages = document.querySelectorAll(".slide-image");
  const nextButton = document.querySelector(".next-slide");
  const prevButton = document.querySelector(".prev-slide");
  let currentSlideIndex = 0;

  function showSlide(index) {
    slideImages.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  nextButton.addEventListener("click", function() {
    currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;
    showSlide(currentSlideIndex);
  });

  prevButton.addEventListener("click", function() {
    currentSlideIndex = (currentSlideIndex - 1 + slideImages.length) % slideImages.length;
    showSlide(currentSlideIndex);
  });

  showSlide(currentSlideIndex);

});
