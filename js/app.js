$(function(){

const $content = $('.content');


    $.ajax({
        url: 'https://api.kanye.rest',
        dataType: 'json',
        method: 'GET',
        
    }).done(function(response){
        console.log(response.quote);

        const $newEl = $(`<a href="#">${response.quote}</a>`)
        $content.append($newEl);
    
    })

})