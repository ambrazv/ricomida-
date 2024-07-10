$(document).ready(function(){

    // Tooltip Initialization
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Click Event for Button
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    // Double Click Event for Titles
    $('h2').dblclick(function() {
        $(this).css('color', 'red');
    });

    // Toggle Method for Cards
    $('.card-header').click(function() {
        $(this).next('.card-body').toggle();
    });
});
