window.onload = function() {
   // Variables
   var menuButton = false;

   // Obtener los elementos de la web que nos interesan
   var wrapper = document.getElementById("wrapper");
   var menuUL = document.getElementById("apartados");
   var options = document.getElementById("options");
   var menuButton = document.getElementById("menuButton");
   var menuApartados = document.getElementById("apartados");
   var menuSocial = document.getElementById("social");
   var contenido = document.getElementById("content");
   var gallerySection = document.getElementById("gallery");

   // Obtenemos los apartados que tiene el contenido
   var apartados = [];
   for (var i = 0; i < contenido.children.length; i++) {
      apartados[i] = contenido.children[i].id;
   };

   // Funciones
   var showSection = function(e) {
      // Comprobaremos que ha hecho click en un enlace
      if (e.target.nodeName === 'A') {
         // Ocultamos todos los apartados
         for (var i = 0; i < apartados.length; i++) {
            var section = document.getElementById(apartados[i]);
            section.classList.remove("show");
            section.classList.add("hide")
         };
         // Mostramos el apartado del enlace que ha recibido el click
         var selectedSectionID = e.target.id;
         var selectedSection = document.getElementById(selectedSectionID.replace("Lnk", ""));
         selectedSection.classList.remove("hide");
         selectedSection.classList.add("show");
         if (menuButton == true) {
            toggleMenuPanel(); // Después de hacer click en el link se ocultará el menú para ver el contenido
            menuButton = false;
         }
      }
   };
   var toggleMenuPanel = function(e) {
      if (menuButton == true) {
         menuButton = false;
      } else {
         menuButton = true;
      }
      /*
         Esta función sirve para mostrar u ocultar el menú de la web.
         Si el menú esta oculto y pulsamos el botón:
            - Se mostrarán los apartados del menu
            - Se mostrarán los enlaces a las redes sociales
            - Se ocultará el contenido
            Si el menú esta visible y pulsamos el botón:
            - Se ocultarán los apartados del menu
            - Se ocultarán los enlaces a las redes sociales
            - Se mostrará el contenido
      */
      wrapper.classList.toggle("fullScreen");
      // Mostramos u ocultamos el contenido de la web.
      contenido.classList.toggle("show");
      contenido.classList.toggle("hide");

      options.classList.toggle("show");
      options.classList.toggle("hide");
      //options.classList.toggle("showMenu");
      /*
      // Mostramos u ocultamos los apartados del menú.
      menuApartados.classList.toggle("show");
      menuApartados.classList.toggle("hide");
      // Mostramos u ocultamos los enlaces a distintas redes sociales.
      menuSocial.classList.toggle("show");
      menuSocial.classList.toggle("hide");
      */
   }
   var cargarGaleria = function(e) {
      $.getJSON('photos.json', function(data) {
         var output = '';
         output += '<ul id="gallery_grid">';
         for (var i in data.photos) {
            output += '<li><a href="img' + data.photos[i].full + '" data-title="' + data.photos[i].title + '"><img src="img' + data.photos[i].thumb + '" alt=""/></a></li>';
         }
         output += "</ul>";
         document.getElementById("gallery").innerHTML=output;
      });
   }
   cargarGaleria();
   var fineAdjustmentsToInterface = function() {
      console.log("Hi resizer");
   }
   var menuAnimation = function() {

   }

    // Listeners
    menuUL.addEventListener("click", showSection, false);
    menuButton.addEventListener("click", toggleMenuPanel, false);
    window.addEventListener("resize", fineAdjustmentsToInterface, false);
}
