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
  origin: "right",
  distance: "400px",
  reset: false,
  delay: 1500,
});
ScrollReveal().reveal(".mov7", {
  duration: 1000,
  origin: "right",
  distance: "400px",
  reset: false,
  delay: 2000,
});
ScrollReveal().reveal(".mov8", {
  duration: 1000,
  origin: "right",
  distance: "400px",
  reset: false,
  delay: 2500,
});


ScrollReveal().reveal(".mov9", {
  duration: 1000,
  origin: "right",
  distance: "400px",
  reset: false,
  delay: 3000,
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
$(".proy__btn__vuelta").hide();



$(".proy__btn__ir").click(()=>{
  $("#proy01").hide(0);
  $("#proy02").show(0);
  $(".proy__btn__ir").hide();
  $(".proy__btn__vuelta").show();
}) 
$(".proy__btn__vuelta").click(()=>{
  $("#proy02").hide(0);
  $("#proy01").show(0);
  $(".proy__btn__ir").show();
  $(".proy__btn__vuelta").hide();
}) 
  