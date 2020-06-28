const heading = document.querySelector('#title');
const JA = document.querySelector('#JA');
const JASummary =document.querySelector('#JASummary');
const JA2 = document.querySelector('#JA2');
const JA2Summary =document.querySelector('#JA2Summary');
const VTMB = document.querySelector('#VTMB');
const VTMBSummary =document.querySelector('#VTMBSummary');
const rating = document.querySelector('#rating');
const myDIV1 = document.querySelector('#myDIV1');
const content1 = document.querySelector('#content1');
const myDIV2 = document.querySelector('#myDIV2');
const content2 = document.querySelector('#content2');
const myDIV3 = document.querySelector('#myDIV3');
const content3 = document.querySelector('#content3');
const rating1 = document.querySelector('#rating1');
const rating2 = document.querySelector('#rating2');
const rating3 = document.querySelector('#rating3');


//const image = document.querySelector('#image');

const USER_KEY = '13e0994dbd36d1318af1fa6ba778fe35';

const cors = 'https://cors-anywhere.herokuapp.com/';
var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/games")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    //console.log(this.responseText)
    if(this.status === 200 && this.readyState === 4){
        var data = JSON.parse(this.responseText);
        console.log(data);
      JA.textContent = data[0].name;
      JASummary.textContent = data[0].summary;
      JA2.textContent = data[1].name;
      JA2Summary.textContent = data[1].summary;
      VTMB.textContent = data[2].name;
      VTMBSummary.textContent = data[2].summary;

      rating1.textContent = data[0].rating;
      rating2.textContent = data[1].rating;
      rating3.textContent = data[2].rating;
      }
}
xhr.send('fields *; where id = (8,9,11);')




var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/covers")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        var data1 = JSON.parse(this.responseText);
      //   console.log(data1);

     SS2.setAttribute("src","//images.igdb.com/igdb/image/upload/t_1080p/dwovjbfacbjx7fr1gtut.jpg");
     image.setAttribute("src","//images.igdb.com/igdb/image/upload/t_1080p/yfloyvsifrb5fygo9wwc.jpg");
     image2.setAttribute("src","//images.igdb.com/igdb/image/upload/t_1080p/tefqcf7oyxgsqnw5v2ah.jpg");
}
}
xhr.send('fields *; where id = (8,9,11);')



var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/private/reviews")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        var data2 = JSON.parse(this.responseText);
      //   console.log(data2);
        myDIV1.textContent=data2[0].title;
        content1.textContent=data2[0].content;
        myDIV2.textContent=data2[1].title;
        content2.textContent=data2[1].content;
        myDIV3.textContent=data2[2].title;
        content3.textContent=data2[2].content;
        
        
    
}
}
xhr.send('fields *; where id = (8,9,11);')


var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/artworks")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    //console.log(this.responseText)
    if(this.status === 200 && this.readyState === 4){
        var data3 = JSON.parse(this.responseText);
        console.log(data3);
        image1.setAttribute("src","//images.igdb.com/igdb/image/upload/t_1080p/kxwrcnqgh1nffr9vg4ly.jpg");
     
      }
}
xhr.send('fields *; where id = (8,9,11);')


 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("menu");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })




      function myFunction1() {
            var x = document.getElementById("myDIV1");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

          function myFunction1() {
            var y = document.getElementById("content1");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
            }
          }
          

          
      function myFunction2() {
            var x = document.getElementById("myDIV2");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

          function myFunction2() {
            var y = document.getElementById("content2");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
            }
          }

          
      function myFunction3() {
            var x = document.getElementById("myDIV3");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

          function myFunction3() {
            var y = document.getElementById("content3");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
            }
          }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




