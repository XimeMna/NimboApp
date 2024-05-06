const urlParams = new URLSearchParams(window.location.search);
const Opcion = urlParams.get('Opcion');

    let inteligencia = document.getElementById("inteligencia_artificial");
    let objetos = document.getElementById("objetos_ingles");
    let poo = document.getElementById("poo");
    let reacciones = document.getElementById("reacciones");
    let neurociencia = document.getElementById("neurociencia");
    let microbiologia = document.getElementById("microbiologia");
    let html = document.getElementById("html");
    let enlaces = document.getElementById("enlaces");

    
    if(Opcion == 1){ 
        inteligencia.style.display ="block";
    }
    else if(Opcion == 2){
        objetos.style.display = "block";
    }
    else if(Opcion == 3){
        poo.style.display = "block";
    }
    else if(Opcion == 4){
        reacciones.style.display = "block";
    }
    else if(Opcion == 5){
        neurociencia.style.display = "block";
    }
    else if(Opcion == 6){
        microbiologia.style.display = "block";
    }
    else if(Opcion == 7){
        html.style.display = "block";
    }
    else if(Opcion == 8){
        enlaces.style.display = "block";
    }

    function sonido(){
        var click = document.getElementById("click");
        click.play();
    }