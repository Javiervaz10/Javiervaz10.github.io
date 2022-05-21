var textlist;
var mi = document.getElementById('indice');
var element = document.getElementsByClassName('imprime');


function desplegarIndice()

{     const mi = document.getElementById('enlace');
        if(mi.style.display=='none'){
               document.getElementById('enlace').innerHTML='Contraer indice';
                mi.style.display='visible';                
        }
        else{
                document.getElementById('enlace').innerHTML='Mostrar Indice';
                mi.style.display='hidden';
        }
}
