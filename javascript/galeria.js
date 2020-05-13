var posImg=0;
var xImg= ["../images/scout.png","../images/soldier.png","../images/pyro.png","../images/demo.png","../images/heavy.png","../images/engie.png","../images/medic.png","../images/sniper.png","../images/spy.png","../images/logotf2.png"];
var yImg= [null,null,null,null,null]; //nulls para que colocione con datos
var zImg= [null,null,null,null,null]; //
function moverImg(n) {  //Lleva -1, +1 para mover img
    mostrarImg(posImg += n);
}
window.onload = function inicio(){  //Randomiza las imagenes
    var checkDouble=true;

    for (let i = 0; i < yImg.length; i++) {
        do {
            checkDouble=true;
            var aux = Math.floor(Math.random() * xImg.length);
            for (let j = 0; j < yImg.length; j++) { 
                //console.log("Aux"+yImg[j]);
                if (yImg[j]!=null) {
                    //console.log("No es null")
                    if (aux == zImg[j]) {
                        console.log("Repetido")
                        checkDouble=false;
                    }
                }
            }
        } while (checkDouble==false);
        console.log("imgs="+aux);
        zImg[i] = aux;
        yImg[i] = xImg[aux];
    }
    posImg=0;
    mostrarImg(posImg);
}
function calImg(){  //Randomiza las imagenes
    var checkDouble=true;

    for (let i = 0; i < yImg.length; i++) {
        do {
            checkDouble=true;
            var aux = Math.floor(Math.random() * xImg.length);
            for (let j = 0; j < yImg.length; j++) { 
                //console.log("Aux"+yImg[j]);
                if (yImg[j]!=null) {
                    //console.log("No es null")
                    if (aux == zImg[j]) {
                        console.log("Repetido")
                        checkDouble=false;
                    }
                }
            }
        } while (checkDouble==false);
        console.log("imgs="+aux);
        zImg[i] = aux;
        yImg[i] = xImg[aux];
    }
    posImg=0;
    mostrarImg(posImg);
}
function mostrarImg(n,elemnto){
    if (n == 4) {
        document.getElementById('siguiente').disabled=true;
    }else{
        document.getElementById('siguiente').disabled=false;
    }
    if (n == 0){
        document.getElementById('atras').disabled=true;
    }else{
        document.getElementById('atras').disabled=false;
    }
    //;
    //console.log("LALA"+aux);
    document.getElementById('dd').innerHTML = '<img class="image" id="image" src='+yImg[posImg]+' alt="ImgGaleria">';
}
