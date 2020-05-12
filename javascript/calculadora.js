function pulsada (tecla) {
    var listaNodosPantalla = document.getElementsByClassName('pantalla');
    var nodoTextoPantalla = listaNodosPantalla[0].firstChild;
    if(tecla=='C'){
        nodoTextoPantalla.nodeValue = ' ';
    }else if(tecla=='='){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        nodoTextoPantalla.nodeValue = resultado;		
    }else{
        nodoTextoPantalla.nodeValue = nodoTextoPantalla.nodeValue + tecla;
    } 
}