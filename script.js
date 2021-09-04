var $header_top = $('.header-top');
var $nav = $('nav');
 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

const menuLinks = document.querySelectorAll("nav a")

for(let i = 0; i<menuLinks.length; i++){
  menuLinks[i].addEventListener("click", function(){
  $("#header-top").toggleClass('open-menu');
  
})
}

//owl carousel


 
$('#fullpage').fullpage({
  sectionsColor: ['#3dcfa1', '#F4F4F4', '#ff8b20', 'var(--theme-color-light)', '#f1ebf5'],
  sectionSelector: 'section',
  navigation: true,
  controlArrows: false,
  anchors: ['home', 'foodmenu', 'testimonial', 'faq', 'about', 'order'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'var(--theme-color);');
    $nav.css('background', 'var(--theme-color);');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },
 
  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
 
 
});

//owl carousel
$(document).ready(function(){
  $(".owl-datenight, .owl-single, .owl-strawberry, .owl-social, .owl-feast").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:false,
    stagePadding: 100,
    responsiveClass:true,
    responsive:{
        0:{
            stagePadding:50,
        },
        600:{
            stagePadding:130,
        },

    }
 
    })
  


  });
//menu page tabs

function openTab(tabName, elmnt) {
  var subtabContainer = document.getElementsByClassName("subtab-container");
  for (i = 0; i < subtabContainer.length; i++) {
    subtabContainer[i].style.display = "none";
    document.getElementById(tabName).style.display = "block";
  }
  var tablinks = document.getElementsByClassName("tablink");
    tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.boxShadow = "";
  }
  document.getElementById(tabName).firstElementChild.click()
  
}

function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.boxShadow = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.boxShadow = '0px -10px 0px -7px var(--theme-color) inset';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultTab").click();


//drop down faq
const faqQuestion = document.querySelectorAll(".faq-question")
const faqAnswer = document.querySelectorAll(".faq-answer")

for (i=0; i<faqQuestion.length; i++) {
  faqQuestion[i].addEventListener('click', function(){
    console.log(this.nextElementSibling)
    for (i=0; i<faqQuestion.length;i++){
      faqAnswer[i].classList.add('hidefaq')
    }
    this.nextElementSibling.classList.toggle('hidefaq')
  })
}

