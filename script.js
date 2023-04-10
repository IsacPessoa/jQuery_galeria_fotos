$(document).ready(function() {
    $('header button').click(function (){
        $('form').slideDown();
    })

    
    $('#botao-cancelar').click(function (){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const addressNewImage = $('#address-new-image').val();
        const newImage = $('<li style="display: none"></li>');
        $(`<img src="${addressNewImage}">`).appendTo(newImage);
        $(`
            <div class ="overlay-image-link">
                <a href="${addressNewImage}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newImage);
        $(newImage).appendTo('ul');
        $(newImage).fadeIn(1000);
        $('#address-new-image').val('');
    });

});