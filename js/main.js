window.onload = function() {
    // Apartados de la web
    var apartados = ["home", "gallery", "about", "team", "workflow", "upload", "contact"];

    // Obtener los elementos de la web que nos interesan
    var menuUL = document.getElementById("menu");

    // Funciones
    var showSection = function(e) {
        console.log(e.target.id);
        for (var i = 0; i < apartados.length; i++) {
            var seccion = document.getElementById(apartados[i]);
            seccion.classList.remove("show");
            seccion.classList.add("hide")
        };
        var elegido = document.getElementById(e.target.id);
        elegido.classList.add("show");
    };

    // Listener
    menuUL.addEventListener("click", showSection, false)

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