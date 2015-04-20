window.onload = function() {
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
            toggleMenuPanel(); // Después de hacer click en el link se ocultará el menú para ver el contenido
        }
    };
    var toggleMenuPanel = function(e) {
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

    // Listeners
    menuUL.addEventListener("click", showSection, false);
    menuButton.addEventListener("click", toggleMenuPanel, false);
}
function showPanel(id) {

    // Apartados de la web
    var apartados = ["home", "gallery", "about", "team", "workflow", "upload", "contact"];
    for (var i = 0; i < apartados.length; i++) {
        document.getElementById(apartados[i].addClass("hide"));
        console.log("hello");
    };
    document.getElementById(id).addClass("show");
    /*

	// Las opciones que tiene el menú.
	var opciones = ["homeButton", "galleryButton", "aboutButton", "teamButton", "workflowButton", "uploadButton", "contactButton"];

	// Recorremos todas las opciones para ocultarlas y deseleccionarlas
	for (var i = 0; i < opciones.length; i++) {
		$(opciones[i]).addClass("selected");
	}

	// Ocultamos todo
    document.getElementById("home").style.height='0%';
    document.getElementById("home").style.display='none';
    document.getElementById("gallery").style.height='0%';
    document.getElementById("gallery").style.display='none';
    document.getElementById("about").style.height='0%';
    document.getElementById("about").style.display='none';
    document.getElementById("team").style.height='0%';
    document.getElementById("team").style.display='none';
    document.getElementById("workflow").style.height='0%';
    document.getElementById("workflow").style.display='none';
    document.getElementById("upload").style.height='0%';
    document.getElementById("upload").style.display='none';
    document.getElementById("contact").style.height='0%';
    document.getElementById("contact").style.display='none';

    // Mostramos solo el div de la opción seleccionada.
    document.getElementById(id).style.display='block';

    // Seleccionamos nuestro contenedor para posteriormente modificar algunas propiedades dependiendo de la opción del menú.
    var element = document.getElementById("container");

    switch (id) {
    	case "home":
    		document.getElementById("home").style.height='100%';
    		element.style.backgroundImage="url('http://aitorzubizarreta.com/projects/thevisualsfactory/img/fondo-home.jpg')";
    		element.style.backgroundRepeat="no-repeat";
    		element.style.backgroundAttachment="fixed";
    		element.style.backgroundPosition="center";
    		break;
    	case "gallery":
    		document.getElementById("gallery").style.height='120%';
    		element.style.background = '#fff';
    		break;
    	case "about":
    		document.getElementById("about").style.height='100%';
    		element.style.background = '#fff';
    		break;
    	case "team":
    		document.getElementById("team").style.height='100%';
    		element.style.background = '#fff';
    		break;
    	case "workflow":
    		document.getElementById("workflow").style.height='300px';
    		element.style.background = '#fff';
    		break;
    	case "upload":
    		document.getElementById("upload").style.height='100%';
    		element.style.background = '#fff';
    		break;
    	case "contact":
    		document.getElementById("contact").style.height='100%';
    		element.style.backgroundImage="url('http://aitorzubizarreta.com/projects/thevisualsfactory/img/fondo-contact.jpg')";
    		element.style.backgroundRepeat="no-repeat";
    		element.style.backgroundAttachment="fixed";
    		element.style.backgroundPosition="center"
    		break;
    }

    $("galleryButton").addClass("selected");
    $("homeButton").removeClass("selected");
    /*
    var menuItem = document.getElementById("homeButton");
    $(menuItem).addClass("selected");

    $("homeButton").addClass("selected");
    */
}
