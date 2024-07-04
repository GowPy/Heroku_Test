let UName = localStorage.getItem("User_Name");
let UserToken = localStorage.getItem("User_Token");
$(document).ready(function(){
debugger
if(UName == ""){
 UserName = getParameterByName("UserName");
 Token = getParameterByName("Token");
 localStorage.setItem("User_Name", UserName);
 localStorage.setItem("User_Token", Token);
 console.log(UName);
 console.log(UserToken);
/* $("#idUserName").text(UserName);
 $("#idToken").text(Token);*/
 $("#lblUserName").text(UserName);
 $("#lblToken").text(Token);
 }
 else if(UName != ""){
 $("#lblUserName").text(UName);
 $("#lblToken").text(UserToken);
 }
 console.log($("#lblUserName").text() , $("#lblToken").text());
});



function FuncLogOut() {
  window.location.href = "/BMSApp/LogIn";
    };

$(function($) {
  $(function() {

   /* $('.nav-list > li').on('click', function (e) {
    e.preventDefault();
   $('.nav-list > li').removeClass('active');
   $(this).addClass('active');*/
    //  open and close nav
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("medium");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("medium");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  });
});
