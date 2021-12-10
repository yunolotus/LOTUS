var checkbox =document.querySelector('input[name=theme')
checkbox.addEventListener('change', function() {
if(this.checked) {
trans()
document.documentElement.setAttribute('data-theme', 'dark')
}
else {
trans()
document.documentElement.setAttribute('data-theme', 'light')
}

})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)

}





$(document).ready(function(){

    $('.next').click(function(){
const now_img = $('.show');
const next_img = now_img.next();
if(next_img.length){
now_img.fadeOut('fast').removeClass('show');
next_img.fadeIn('fast').addClass('show');
}

    });

    $('.prev').click(function(){
        const now_img = $('.show');
        const prev_img = now_img.prev();
        if(prev_img.length){
          now_img.fadeOut('fast').removeClass('show')
          prev_img.fadeIn('fast').addClass('show');
        }
        });
    });