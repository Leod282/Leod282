let boton_ini = document.getElementById('boton_ini');
let tabla_jugadores = document.getElementById('tabla_jugadores');
let resultado = document.querySelector('.resultado');
let total1 = document.getElementById('total1');
let total2 = document.getElementById('total2');
let tecl = document.querySelectorAll('.teclas');
let caja = document.getElementById('caja');
let turno = 1;
let suma1 = 0;
let suma2 = 0;
let ready = false;
let arr_valores =[];
let num_jugada = 0;
let miboton = document.querySelector('.miboton');
boton_ini.addEventListener('click', nuevo_partido);
caja.addEventListener('click', jugada);





function nuevo_partido(){
    resetear();
    setTimeout(() => {
        boton_ini.classList.add('rotar'); //funcion setTimeout en este caso elegi que rote el boton_ini 360 grados, la velocidad se da con 3l numero 300.
        }, 300);  
        ready = true;
        
        for (let i = 0; i < 4; i++) {
                let n = Math.floor((Math.random()*100) +1); //ciclo for para agregar la funcion matematica con su atributo random para que nos de en forma aleatoria numeros del 1 al 100 en este caso solo 4 numeros aleatorios.
                arr_valores.push(n);                
            }
        let agregarRand = 0;
        tecl.forEach(e => {
            e.dataset.valor = arr_valores[agregarRand];
           // console.log(arr_valores[nn]);
          agregarRand++; // sirve para que agregue a los divs los numeros random;    
        });     
  // en_juego = 0;    
//let nuevo = resultado.innerHTML;
let nint =0;
let colores = ['rgb(111, 110, 110)', 'rgb(188, 8, 113)','rgb(111, 110, 110)', 'rgb(188, 8, 113)']; //variable con los colores para realizar el intervalo.
let inter = setInterval(function(){    //funcion para realizar intervalos en este caso elegimos de colores.
    // codigo
   // nuevo += arr_valores[nint];
   // resultado.innerHTML = nuevo;
    // if(nint%2 == 0){
    //     document.body.style.background = "#f00";
    // }else{
    //     document.body.style.background = "#0f0";
    // }
    //document.body.style.background = arr1[];
    document.querySelector('.resultado').style.background = colores[nint];  //selector del div resultado , es donde van a cambiar los colores.
    nint++; // variable aumentada para que realize el intervalo de colores asignado a la variable colores.
   if(nint==0){           //condicional para limpiar el intervalo .
     clearInterval(inter);
     nint = 0;}}, 300)};    

function jugada(e){
    if(ready){ //condicion para inciar jugada , en este caso la variable ready al tener valor true puede iniciar jugada.
    let x = e.target.dataset.valor;//variable para asignar contenido en determinado evento(click).
    let i = e.target.innerHTML
     if(e.target.id !="caja"&& i=="?"){    //condicion para que el evento no suceda hasta iniciar juego con el boton creado(boton_ini).
        e.target.innerHTML = x;
       
        if(turno==1){
            suma1 += parseInt(x);
            total1.innerHTML = suma1;
            e.target.style.background ="rgb(111, 110, 110) ";
            turno = 2;
        }else{
            suma2 += parseInt(x);//parseInt es para agregar numeros sin coma , en este caso a x.
            total2.innerHTML = suma2; //innerHTML sirve para agregar la suma donde la asignamos,en este caso en total2 
            e.target.style.background = "rgb(245,245,220)"; //evento de target con style y background modificamos el fondo del boton una vez hecho click.
            turno = 1;
           
        }num_jugada ++ ; // variable que sirve para aumentar las veces que se van a sumar los botones.

     }
    if(num_jugada == 4){   // en este caso a la variable num_jugada le decimos que cuando la cantidad de clicks sea igual a 4 veces termine.
        asigna_ganador(); // funcion para asignar un ganador al juego.
     }       
}}

function resetear(){
     ready = false; //variable global , mientras este en false no inicia y los clicks en los target no daran error ni nada.
     turno = 1; // comienza el primer jugador.
     suma1 = 0; // dejamos la suma en 0 .
     suma2 = 0;
     total1.innerHTML = 0;
     total2.innerHTML = 0;
     arr_valores = []; //array para asignar los numeros aleatorios.
     num_jugada = 0;
        tecl.forEach(e => {     
         e.dataset.val = "";
         e.innerHTML = "?";
         resultado.innerHTML =" ";
         e.style.background = "rgb(188, 8, 113) ";// le damos estilo css para que los botones vuelvan a su color inicial.
     })};

function asigna_ganador(){
    let txt = "";   //variable creada solo en el entorno de la funcion sin valor , para luego darle contenido y este se agregue a nuestro div resultado donde dira el ganador.
    if(suma1 > suma2){
        txt = "Gana jugador 1 !!!";
    }else{
        if(suma2 > suma1){
            txt = "Gana jugador 2 !!!";
        }else{
            txt = "Empate !!!";
        }       
    }
    resultado.innerHTML = txt;
}