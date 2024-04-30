/*
document.addEventListener("DOMContentLoaded", function () {
   var mapLocations = document.querySelectorAll(".map__location");
   var mapInfos = document.querySelectorAll(".map__info");

   mapLocations.forEach(function (location) {
      location.addEventListener("click", function () {
         var target = this.getAttribute("data-target");
         var correspondingInfo = document.querySelector(".map__info." + target);

         if (correspondingInfo.classList.contains("active")) {
            correspondingInfo.classList.remove("active");
            location.classList.remove("active");
         } else {
            mapInfos.forEach(function (info) {
               info.classList.remove("active");
            });
            mapLocations.forEach(function (loc) {
               loc.classList.remove("active");
            });

            correspondingInfo.classList.add("active");
            location.classList.add("active");
         }
      });
   });

   document.addEventListener("click", function (event) {
      if (!event.target.classList.contains("map__location") && !event.target.classList.contains("map__info")) {
         mapInfos.forEach(function (info) {
            info.classList.remove("active");
         });
         mapLocations.forEach(function (loc) {
            loc.classList.remove("active");
         });
      }
   });
});
*/
/*
document.addEventListener("DOMContentLoaded", function () {
   var mapLocations = document.querySelectorAll(".map__location");
   var mapInfos = document.querySelectorAll(".map__info");

   mapLocations.forEach(function (location) {
      location.addEventListener("click", function () {
         var target = this.getAttribute("data-target");
         var correspondingInfo = document.querySelector(".map__info." + target);

         if (correspondingInfo.classList.contains("active")) {
            correspondingInfo.classList.remove("active");
            location.classList.remove("active");
         } else {
            mapInfos.forEach(function (info) {
               info.classList.remove("active");
            });
            mapLocations.forEach(function (loc) {
               loc.classList.remove("active");
            });

            correspondingInfo.classList.add("active");
            location.classList.add("active");
         }
      });
   });

   mapInfos.forEach(function (info) {
      info.addEventListener("click", function (event) {
         event.stopPropagation(); // Prevents the click event from reaching the document click event handler
      });
   });

   document.addEventListener("click", function (event) {
      if (!event.target.classList.contains("map__location") && !event.target.classList.contains("map__info")) {
         mapInfos.forEach(function (info) {
            info.classList.remove("active");
         });
         mapLocations.forEach(function (loc) {
            loc.classList.remove("active");
         });
      }
   });
});
*/



/*
const btns = document.querySelectorAll('.map__location');
const popupInner = document.querySelector('.popup__inner');
const mapInfo = document.querySelectorAll('.map__info');

btns.forEach((el) => {
   el.addEventListener('click', (e) => {
      btns.forEach((button) => {
         button.classList.remove('_active');
      });

      el.classList.add('_active');

      let path = e.currentTarget.getAttribute('data-path');

      mapInfo.forEach((el) => {
         el.classList.remove('_visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('_visible');
      popupInner.classList.add('_active');
   });
});
*/

/*----------*/



document.addEventListener('click', (e) => {
   const isButton = e.target.closest('.map__location');
   const isMapInfo = e.target.closest('.map__info');

   if (!isButton && !isMapInfo) {
      btns.forEach((button) => {
         button.classList.remove('_active');
      });

      mapInfo.forEach((el) => {
         el.classList.remove('_visible');
      });

      popupInner.classList.remove('_active');
   }
});










// text
/*
const btns = document.querySelectorAll('.map__location');
const popupInner = document.querySelector('.popup__inner');
const mapInfo = document.querySelectorAll('.map__info');

btns.forEach((el) => {
   el.addEventListener('click', (e) => {
      const clickedPath = e.currentTarget.getAttribute('data-path');

      btns.forEach((button) => {
         const buttonPath = button.getAttribute('data-path');
         if (buttonPath === clickedPath) {
            button.classList.add('_active');
         } else {
            button.classList.remove('_active');
         }
      });

      mapInfo.forEach((el) => {
         el.classList.remove('_visible');
      });

      document.querySelector(`[data-target="${clickedPath}"]`).classList.add('_visible');
      popupInner.classList.add('_active');
   });
});
*/

const btns = document.querySelectorAll('.map__location');
const popupInner = document.querySelector('.popup__inner');
const mapInfo = document.querySelectorAll('.map__info');

btns.forEach((el) => {
   el.addEventListener('click', (e) => {
      const clickedPath = e.currentTarget.getAttribute('data-path');

      btns.forEach((button) => {
         const buttonPath = button.getAttribute('data-path');
         if (buttonPath === clickedPath) {
            button.classList.add('_active');
         } else {
            button.classList.remove('_active');
         }
      });

      mapInfo.forEach((el) => {
         el.classList.remove('_visible');
      });

      document.querySelector(`[data-target="${clickedPath}"]`).classList.add('_visible');
      popupInner.classList.add('_active');
   });

   el.addEventListener('mouseenter', (e) => {
      const hoveredPath = e.currentTarget.getAttribute('data-path');
      btns.forEach((button) => {
         const buttonPath = button.getAttribute('data-path');
         if (buttonPath === hoveredPath) {
            button.classList.add('_hovered');
         }
      });
   });

   el.addEventListener('mouseleave', () => {
      btns.forEach((button) => {
         button.classList.remove('_hovered');
      });
   });
});

/*------------*/

window.onload = function () {
   setTimeout(function () {
      var dyngusPopup = document.querySelector('.dyngusPopupSection');
      dyngusPopup.style.opacity = '1';
      dyngusPopup.style.pointerEvents = 'all';
   }, 4000);

   setTimeout(function () {
      var zubrankoPopup = document.querySelector('.zubrankoPopup');
      zubrankoPopup.style.opacity = '1';
      zubrankoPopup.style.pointerEvents = 'all';
   }, 4200); // 4000ms + 200ms delay

   // Add event listeners to the close buttons
   var closeButtons = document.querySelectorAll('.dyngusClose');
   closeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
         var dyngusPopup = document.querySelector('.dyngusPopupSection');
         var zubrankoPopup = document.querySelector('.zubrankoPopup');
         dyngusPopup.style.opacity = '0';
         dyngusPopup.style.pointerEvents = 'none';
         zubrankoPopup.style.opacity = '0';
         zubrankoPopup.style.pointerEvents = 'none';
      });
   });
};