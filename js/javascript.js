/* Slide show ===============================================================*/
/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/

var slideIndex = 0;
var divSlide = document.getElementById("div-slideshow");


console.log(divSlide);

if(divSlide){
  showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*==========================================================================*/

//Tabela com as informações dos drivers =====================================

var myTable = document.getElementById("table-drivers");

var myRequest = new Request('http://ergast.com/api/f1/drivers.json');

showPilotos();

function showPilotos(){
fetch(myRequest)
  .then(function (response) {
    if (response.status != 200) {
      return false;
    }
    return response.json();
  }).then(function (data) {
    for (let i = 0; i < data.MRData.DriverTable.Drivers.length; i++) {
      let tablerow = document.createElement('tr');
      tablerow = '<td>'+data.MRData.DriverTable.Drivers[i].givenName+ ' ' +data.MRData.DriverTable.Drivers[i].familyName+'</td>'
                +'<td>'+((data.MRData.DriverTable.Drivers[i].permanentNumber != undefined) ? data.MRData.DriverTable.Drivers[i].permanentNumber : '--' )+ '</td>'
                +'<td>'+data.MRData.DriverTable.Drivers[i].nationality+'</td>'
                +'<td>'+data.MRData.DriverTable.Drivers[i].dateOfBirth+'</td>'
                +'<td> <a class="link-table-drivers" href="'+data.MRData.DriverTable.Drivers[i].url+'"> Information </a></td>';
      myTable.insertAdjacentHTML("beforeend",tablerow)
    }
  })

};