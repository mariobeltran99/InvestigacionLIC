function funcion(name) {
    let valor = document.getElementById(name).value;
    switch (name) {
        case 'nit':
            var expresion = new RegExp(/^(?:\d{14}|\d{4}-\d{6}-\d{3}-\d{1})$/);
            break;
        case 'tarjeta':
            var expresion = new RegExp(/^(?:\d{15,16}|\d{4}(?:(?:-+\d{4}){3}|-+\d{6}-\d{5}))$/);
            break;  
        case 'email':
            var expresion = new RegExp(/^[a-zA-Z0-9.!#$%&'+/=?^`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/);
            break;  
        case 'user':
            var expresion = new RegExp(/^([ÑñA-Za-z-\d]+)$/);
            break;  
        case 'nc':
            var expresion = new RegExp(/^(([ÁÉÍÓÚA-Z]{1}[ñáéíóúa-z]{1,}\W?){2})$/);
            break;  
        case 'numero':
            var expresion = new RegExp(/^([672][\d]{3}[-||\s]?[\d]{4})$/);
            break; 
        case 'letras':
            var expresion = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/);
            break;
        case 'numeros':
            var expresion = new RegExp(/^[0-9]{1,}$/);
            break;
        default:
            break;
    }
    if (expresion.test(valor)) {
        document.querySelector("#"+name+"a").innerHTML = "Si cumple";
    } else {
        document.querySelector("#"+name+"a").innerHTML = "No cumple";
    }
}