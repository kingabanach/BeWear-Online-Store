$(function(){

$(window).on('scroll', function(e){
    if($(window).scrollTop()>100) {
        $('.nav-container').addClass('solid');
    } else {
        $('.nav-container').removeClass('solid');
    }
})


const $search = $('.search');
const $searchicon = $('.search-icon');
const $searchinput = $('.search-input');

$search.on('click', function(e){

    e.preventDefault();
    if($('.user-nav').hasClass('inclicked') !== true) {
        $('.user-nav').addClass('inclicked');
        $searchicon.before('<input class="search-input" type="text" placeholder="Znajdź">');
    }

    
})

//poniższy event: po wciśnięciu 'enter' wypisuje w konsoli value inputa//
$search.keydown(function(e){
let $searchinput = $('.search-input');
if(e.keyCode == '13') {
    console.log($searchinput.val());
    $searchinput.val('');
    //tutaj ma być jeszcze przeniesienie na nową stronę z wynikami wyszukiwania//
};
})


})
