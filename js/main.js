function isMobile(){
  return (
      (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/BlackBerry/i))
  );
}

let ordenRedes="right"
let delayRedes=1250
let retardo=400

if(isMobile()!=null){
  ordenRedes="bottom"
  delayRedes=1050
  retardo=200
} 

ScrollReveal().reveal(".mov1", {
  duration: 1000,
  origin: "left",
  distance: "400px",
  reset: false,
  delay: 500,
  
});
ScrollReveal().reveal(".mov2", {
  duration: 1000,
  origin: "left",
  distance: "400px",
  reset: false,
  delay: 500,
});
ScrollReveal().reveal(".mov3", {
  duration: 1000,
  origin: "left",
  distance: "400px",
  reset: false,
  delay: 500,
});
ScrollReveal().reveal(".mov4", {
  duration: 1000,
  origin: "bottom",
  distance: "400px",
  reset: false,
  delay: 500,
});
ScrollReveal().reveal(".mov5", {
  duration: 1000,
  origin: "top",
  distance: "400px",
  reset: false,
  delay: 1000,
});
ScrollReveal().reveal(".mov6", {
  duration: 1000,
  origin: ordenRedes,
  distance: "400px",
  reset: false,
  delay: delayRedes+retardo,
});
ScrollReveal().reveal(".mov7", {
  duration: 1000,
  origin: ordenRedes,
  distance: "400px",
  reset: false,
  delay: delayRedes+(2*retardo),
});
ScrollReveal().reveal(".mov8", {
  duration: 1000,
  origin: ordenRedes,
  distance: "400px",
  reset: false,
  delay:  delayRedes+(3*retardo),
});

ScrollReveal().reveal(".mov9", {
  duration: 1000,
  origin: ordenRedes,
  distance: "400px",
  reset: false,
  delay:  delayRedes+(4*retardo),
});

$("#menu").hide();
$(".cierreMenu").hide();

$(".cierreMenu").click(() => {
  $("#menu").hide();
  $(".cierreMenu").hide();
  $(".menu").show();
});

$(".menu").click(() => {
  $("#menu").fadeIn("slow");
  $(".menu").hide();
  $(".cierreMenu").show();
});

$(".navmob__items--i").click(()=>{
  $("#menu").hide();
  $(".cierreMenu").hide();
  $(".menu").show();
})
$(".navmob_JZ").click(()=>{
  $("#menu").hide();
  $(".cierreMenu").hide();
  $(".menu").show();
})

$("#proy02").hide();
$(".proy__btn__vueltaImg").hide();
$(".proy__btn__irImg-bloque").hide();
$(".proy__btn__vueltaImg-bloque").show();

$(".proy__btn__irImg").click(()=>{
  $("#proy01").hide(0);
  $("#proy02").show(0);
  $(".proy__btn__irImg").hide();
  $(".proy__btn__vueltaImg").show();
  $(".proy__btn__vueltaImg-bloque").hide();
  $(".proy__btn__irImg-bloque").show();
}) 
$(".proy__btn__vueltaImg").click(()=>{
  $("#proy02").hide(0);
  $("#proy01").show(0);
  $(".proy__btn__irImg").show();
  $(".proy__btn__vueltaImg").hide();
  $(".proy__btn__irImg-bloque").hide();
  $(".proy__btn__vueltaImg-bloque").show();
}) 

 
var anuncioParam;
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
anuncioParam = urlParams.get('send'); 
console.log(queryString)

if(anuncioParam=='ok'){
  swal({
    title: "Mensaje enviado con éxito",    
  });
  anuncioParam=''
  window.history.replaceState({}, document.title, "/" + "");
}


var URLactual = window.location;
var inputDireccion
inputDireccion = document.getElementById("direccion");
inputDireccion.value = `${URLactual}?send=ok`