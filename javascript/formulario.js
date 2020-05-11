//VALIDACION DE CAMPOS LLENOS
function validarCampos()
{
    var ced;
    var bandera = true;
    

    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i];
        if(elemento.value == '' && elemento.type == 'text'){    //Si el campo esta vacio
            if(elemento.id == 'inCedula'){
                document.getElementById('dfalla').innerHTML = '<p id="falla" class="falla">El campo se encuentra vacio</p>'; 
                elemento.style.border = '1px red solid';
            }
            if(elemento.id == 'inNombres'){
                document.getElementById('dfalla').innerHTML = '<p id="falla" class="falla">El campo se encuentra vacio</p>'; 
            }
            bandera = false;
        }else{
            if(elemento.id == 'inCedula'){
                document.getElementById('inCedula').innerHTML = ced;
            }
        }
    }

    if(!bandera){
    
    }
    return bandera;
}
//VALIDACION DE ENTRY ALFABETICA
function validarLetras(elemento)
{
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        console.log(miAscii)

        if((miAscii >= 97 && miAscii <= 122)||(miAscii >=65 && miAscii <= 90)||(miAscii == 32)){ //Sean mayusculas y minisculas
            console.log("Es una letra valida")
            if ((elemento.id='inNombres')||(elemento.id='inApellidos')) {
                console.log("Entra para irse");
                validarDosOMasCampos(elemento);
            }
        }else {
            console.log("Es una letra invalida")
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
        }else{
            return true
    }

}
//VALIDACION DE ENTRY NUMERICA
function validarNumeros(elemento)
{
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        console.log(miAscii)

        if((miAscii >= 48 && miAscii <= 57)){ //Sean mayusculas y minisculas
            console.log("Es un numero valid")
        }else {
            console.log("Es un numero invalida")
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return true
    }

}
//VERIFICACION DE CEDULA
function validarCedula(elemento)
{
    
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)

        if((miAscii >= 48 && miAscii <= 57)){
            //console.log("Es un numero valid")
        }else {
            //console.log("Es un numero invalida")
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
        }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
    }
    if (elemento.value.length == 10) {
        if((elemento.value.substring(0,2)>=1)||(elemento.value.substring(0,2)<=24)){
            //Suma impares
            var pares = 0;
            var numero =0;
            for (var i = 0; i< 4; i++) {
                numero = elemento.value.substring(((i*2)+1),(i*2)+2);
                numero = (numero * 1);
                if( numero > 9 ){ var numero = (numero - 9); }
                pares = pares + numero; 
                //console.log("I"+numero)
            }
            //console.log("Impares"+pares)
            //Suma pares
            var imp=0;
            numero = 0
            for (var i = 0; i< 5; i++) {
                var numero = elemento.value.substring((i*2),((i*2)+1));
                var numero = (numero * 2);
                if( numero > 9 ){ var numero = (numero - 9); }
                imp = imp + numero; 
                //console.log("P"+numero)
            }
            //console.log("Pares"+imp);
            var sum = pares + imp;
            //console.log("Sum"+sum);
            //Decena Inmediata
            aux = (''+sum)[0];
            var di = aux.substring(0,1);
            di++;
            di = di *10;
            console.log("Di"+di);
            //Resta de Sum - Di
            numero = (di - sum);
            if (numero == (elemento.value.substring(9,10))) {
                document.getElementById('dfalla').innerHTML = '<p id="ok" class="ok">Cedula es Correcta</p>'; 
                elemento.style.border = '2px greenyellow solid';
            }else{
                document.getElementById('dfalla').innerHTML = '<p id="falla" class="falla">Cedula es Incorrecta</p>'; 
                elemento.style.border = '2px red solid';
            }
        }
    }
}
//VERIFICACION DE DOS CAMPOS (NOMBRE - APELLIDO)
function validarDosOMasCampos(elemento)
{    
    if(elemento.value.length > 0){
        for (var i = 0; i < elemento.value.length; i++) {
            console.log("Ascii"+elemento.value.charCodeAt(i));
            if (((elemento.value.charCodeAt(i)==32))) {
                console.log("NAN="+(elemento.value.charCodeAt(i+1).isNan));
                if ((elemento.value.charCodeAt(i-1)!=32)&&(elemento.value.charCodeAt(i+1)>=65)&&(elemento.value.charCodeAt(i+1)<=122)){
                    console.log("Espacio esta rodeado");
                    document.getElementById('dfalla').innerHTML = '<p id="ok" class="ok">Campo Correcto</p>'; 
                    elemento.style.border = '2px greenyellow solid';
                    return;
                }
            }
            
        }
    }
}