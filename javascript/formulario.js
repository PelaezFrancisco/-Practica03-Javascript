//VALIDACION DE CAMPOS LLENOS
function validarCampos()
{
    var ced=false;
    var nom=false;
    var ape=false;
    var dir=false;
    var tel=false;
    var fec=false;
    var ema=false;
    var con=false;
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i];
        //console.log(elemento.value == 'undefined');
        //console.log(elemento.value.);
        if(elemento.value == '' && (elemento.type == 'text' || elemento.type == 'password')){    //Si el campo esta vacio
            console.log("Enrta a la huevada chucha que verga!!!!!!!!!!");
            if(elemento.id == 'inCedula'){  //Cedula Vacia
                document.getElementById('dfalla1').innerHTML = '<p id="falla" class="falla">Campo Cedula esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inNombres'){ //Nombre Vacio
                document.getElementById('dfalla2').innerHTML = '<p id="falla" class="falla">Campo Nombres esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inApellidos'){ //Apellido Vacio
                document.getElementById('dfalla3').innerHTML = '<p id="falla" class="falla">Campo Apellidos esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inDireccion'){ //Direccion Vacio
                document.getElementById('dfalla4').innerHTML = '<p id="falla" class="falla">Campo Direccion esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inTelefono'){ //Telefono Vacio
                document.getElementById('dfalla5').innerHTML = '<p id="falla" class="falla">Campo Telefono esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inFecha'){ //Fecha Vacio
                document.getElementById('dfalla6').innerHTML = '<p id="falla" class="falla">Campo Fecha esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inEmail'){ //Email Vacio
                document.getElementById('dfalla7').innerHTML = '<p id="falla" class="falla">Campo Email esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'inPassword'){ //Contrasena Vacio
                document.getElementById('dfalla8').innerHTML = '<p id="falla" class="falla">Campo Password esta vacio</p>'; 
                elemento.style.border = '2px red solid';
                console.log("Lalalala");
                return false;
            }
            return false;
        }else{  //Si ningun campo esta vacio
            if(elemento.id == 'inCedula'){  //CEDULA
                ced=validarCedula(elemento);
            }
            if(elemento.id == 'inNombres'){  //Nombres
                nom=validarLetras(elemento);
            }
            if(elemento.id == 'inApellidos'){  //Apellidos
                ape=validarLetras(elemento);
            }
            if(elemento.id == 'inDireccion'){  //Direccion
                dir=true;
            }
            if(elemento.id == 'inTelefono'){  //Direccion
                tel=validarTelefono(elemento);
            }
            if(elemento.id == 'inFecha'){  //Fecha
                fec=validarFecha(elemento);
            }
            if(elemento.id == 'inEmail'){  //Email
                ema=validarEmail(elemento);
            }
            if(elemento.id == 'inPassword'){  //Password
                con=validarPassword(elemento);
            }
        }
        console.log("Ced"+ced);
        console.log("Nom"+nom);
        console.log("Ape"+ape);
        console.log("Dir"+dir);
        console.log("Fec"+fec);
        console.log("Ema"+ema);
        console.log("Con"+con);
        
        if (ced==true&&nom==true&&ape==true&&dir==true&&fec==true&&ema==true&&con==true&&tel==true) {
            console.log("Esta todo")
            return true;
        }
    }
}
//VALIDACION DE ENTRY ALFABETICA
function validarLetras(elemento){
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 97 && miAscii <= 122)||(miAscii >=65 && miAscii <= 90)||(miAscii == 32)){ //Sean mayusculas y minisculas
            //console.log("Es una letra valida")
            if ((elemento.id=='inNombres')||(elemento.id=='inApellidos')) {
                //console.log("Entra para irse");
                return validarDosOMasCampos(elemento);
            }
        }else {
            console.log("Es una letra invalida")
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
        }else{
            
    }

}
//VALIDACION DE Telefono
function validarTelefono(elemento)
{
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 48 && miAscii <= 57)){ //Sean numeros
            //console.log("Es un numero valid")
            if (elemento.value.length==10) {
                document.getElementById('dfalla5').innerHTML = '<p id="ok" class="ok">Telefono Correcto</p>'; 
                elemento.style.border = '2px greenyellow solid';
                return true;
            }else {
                //console.log("Es un numero invalida")
                document.getElementById('dfalla5').innerHTML = '<p id="falla" class="falla">Telefono Incorrecto</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
        }
    }else{
        elemento.value = elemento.value.substring(0, elemento.value.length-1)
        return false;
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
            //console.log("Di"+di);
            //Resta de Sum - Di
            numero = (di - sum);
            if (numero == (elemento.value.substring(9,10))) {
                document.getElementById('dfalla1').innerHTML = '<p id="ok" class="ok">Cedula es Correcta</p>'; 
                elemento.style.border = '2px greenyellow solid';
                return true;
            }else{
                document.getElementById('dfalla1').innerHTML = '<p id="falla" class="falla">Cedula es Incorrecta</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }
    }else{
        document.getElementById('dfalla1').innerHTML = '<p id="falla" class="falla">Cedula es Incorrecta</p>'; 
                elemento.style.border = '2px red solid';
                return false;
    }
}
//VERIFICACION DE DOS CAMPOS (NOMBRE - APELLIDO)
function validarDosOMasCampos(elemento)
{    
    if(elemento.value.length > 0){
        for (var i = 0; i < elemento.value.length; i++) {
            //console.log("Ascii"+elemento.value.charCodeAt(i));
            //console.log("Length"+elemento.value.length);
            if (((elemento.value.charCodeAt(i)==32))) {
                //console.log("NAN="+(elemento.value.charCodeAt(i+1).isNan));
                if ((elemento.value.charCodeAt(i-1)!=32)&&(elemento.value.charCodeAt(i+1)>=65)&&(elemento.value.charCodeAt(i+1)<=122)){
                    //console.log("Espacio esta rodeado");
                    if (elemento.id=='inNombres') {
                        //console.log("Es nombre");
                        document.getElementById('dfalla2').innerHTML = '<p id="ok" class="ok">Nombres Correctos</p>'; 
                    }else{
                        
                        document.getElementById('dfalla3').innerHTML = '<p id="ok" class="ok">Apellidos Correcto</p>';
                    }
                    elemento.style.border = '2px greenyellow solid';
                    return true;
                }else{
                    if (elemento.id=='inNombres') {
                        document.getElementById('dfalla2').innerHTML = '<p id="falla" class="falla">Nombres Incorrecto</p>'; 
                    }else{
                        document.getElementById('dfalla3').innerHTML = '<p id="falla" class="falla">Apellidos Incorrecto</p>';
                    }
                    elemento.style.border = '2px red solid';
                    return false;
                }
            }else{
                if (elemento.id=='inNombres') {
                    document.getElementById('dfalla2').innerHTML = '<p id="falla" class="falla">Nombres Incorrecto</p>';
                    console.log("Es nombre"); 
                }else{
                    document.getElementById('dfalla3').innerHTML = '<p id="falla" class="falla">Apellidos Incorrecto</p>';
                }
                elemento.style.border = '2px red solid';
            }
            
        }
    }
}
//VALIDAR FECHAS
function validarFecha(elemento)
{
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 48 && miAscii <= 57 || miAscii == 47)){ //Sean numeros
            //console.log("Es un numero valido")
            if (elemento.value.length==10 && elemento.value.charCodeAt(2)==47 && elemento.value.charCodeAt(5)==47) {
                document.getElementById('dfalla6').innerHTML = '<p id="ok" class="ok">Fecha Correcta</p>'; 
                elemento.style.border = '2px greenyellow solid';
                return true;                
            }else {
                document.getElementById('dfalla6').innerHTML = '<p id="falla" class="falla">Fecha Incorrecta</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
        }
    }else{
        elemento.value = elemento.value.substring(0, elemento.value.length-1)
        return false;
    }
}
//VALIDAR EMAIL
function validarEmail(elemento)
{
    var posAt=0;
    var checkHost=false;
    var checkServer=false;
    for (let i = 0; i < elemento.value.length; i++) {   //Buscamos el arroba
        if (elemento.value.charCodeAt(i)==64) {
            posAt=i;
            break;
        }
        //console.log("Cantidad"+i);
    }
    if(posAt>0){
        var host = elemento.value.substring(0,posAt);
        var server = elemento.value.substring(posAt+1,elemento.value.length);
        //CHEQUEO HOST
        if (host.length>=3) {
            for (let i = 0; i < host.length; i++) {
                var aux = host.charCodeAt(i);
                //console.log("i="+i)
                //console.log("Valor de Aux="+aux);
                if (((aux >= 97 && aux <= 122)||(aux >=65 && aux <= 90)||(aux >=48 && aux <= 57))==false) { //Chequea que host sea alfanumerico
                    checkHost=false;
                    console.log("Host tiene error!!!!")
                    break;
                }else{
                    console.log("Todo belen Host")
                    checkHost=true;
                }
            }
        } else {
            checkHost=false;
            console.log("Host es menor a 3!!!!")
        }
        //CHEQUEO SERVER
        if (server=='est.ups.edu.ec' || server=='ups.edu.ec' ) {
            checkServer=true;
        } else {
            checkServer=false;
        }
        //UNIMOS CHECKS
        if (checkHost==true && checkServer==true) {
            document.getElementById('dfalla7').innerHTML = '<p id="ok" class="ok">Mail Correcto</p>'; 
            elemento.style.border = '2px greenyellow solid';
            return true;
        } else {
            document.getElementById('dfalla7').innerHTML = '<p id="falla" class="falla">Mail Incorrecto</p>'; 
            elemento.style.border = '2px red solid';
            return false;
        }
    }else{
        document.getElementById('dfalla7').innerHTML = '<p id="falla" class="falla">Mail Incorrecto</p>'; 
        elemento.style.border = '2px red solid';
        return false;
    }
}
//VALIDAR PASSWORD
function validarPassword(elemento)
{
    var checkPass=false;
    var checkMin=false;
    var checkMay=false;
    var checkNum=false;
    var checkCha=false;
    if(elemento.value.length >= 8){
        var pass=elemento.value;
        for (let i = 0; i < pass.length; i++) {
            var aux = pass.charCodeAt(i);
            //console.log("i="+i)
            //console.log("Valor de Aux="+aux);
            if (((aux>=97&&aux<=122)||(aux>=65&&aux<= 90)||(aux>=48&&aux<=57)||(aux==64||aux==95||aux==36))==false){ //Chequea que host sea alfanumerico y esp char
                checkPass=false;
                console.log("Password tiene error!!!!")
                break;
            }else{
                console.log("Todo belen Pass")
                checkPass=true;
            }
        }
        //console.log(miAscii)
        if(checkPass==true){ 
            //console.log("Entra a ver char de Pass");
            var pass=elemento.value;
            for (let i = 0; i < pass.length; i++) {
                var aux = pass.charCodeAt(i);
                //Mayusculas
                if (aux>=97&&aux<=122) {
                    checkMay=true;
                }
                //Minusculas
                if (aux>=65&&aux<= 90) {
                    checkMin=true;
                }
                //Numeros
                if (aux>=48&&aux<=57) {
                    checkNum=true;
                }
                //Caracteres
                if (aux==64||aux==95||aux==36) {
                    checkCha=true;
                }
            }
            //Chequeamos que se cumplan todos los requisitos
            if (checkMay==true&&checkMin==true&&checkNum==true&&checkCha==true) {
                document.getElementById('dfalla8').innerHTML = '<p id="ok" class="ok">Cumple los requerimientos de la contrasena</p>'; 
                elemento.style.border = '2px greenyellow solid';
                return true;
            } else {
                document.getElementById('dfalla8').innerHTML = '<p id="falla" class="falla">Minimo 1 de cada Mayus, Minus, Numb y (@,$,_)</p>'; 
                elemento.style.border = '2px red solid';
                return false;
            }

            
        }else{
            document.getElementById('dfalla8').innerHTML = '<p id="falla" class="falla">Puede Utilizar alfanumericos y (@,$,_)</p>'; 
            elemento.style.border = '2px red solid';
            return false;
        }
    }else{
        document.getElementById('dfalla8').innerHTML = '<p id="falla" class="falla">Minimo 8 caracteres</p>'; 
        elemento.style.border = '2px red solid';
        return false;
    }
}
