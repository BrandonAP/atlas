$(document).ready(function(){
    $('.burger-toggle-button').click(function(){
        $('.all-navigation-bars-container').toggleClass('active-menu');
        $('.burger-toggle-button').toggleClass('toggle');
    });
});