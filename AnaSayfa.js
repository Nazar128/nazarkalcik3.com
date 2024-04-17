    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('header')
    
        menu.onclick = () => {
            // Menü simgesine tıklandığında yapılacak işlemler
            console.log("Menu icon clicked!");
            // İlgili işlemleri buraya ekleyin
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }
        

     
    window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.AnaSayfa-text',{delay:200, origin:'top'})
sr.reveal('.AnaSayfa-img',{delay:400, origin:'top'})
sr.reveal('.Hakkımda-title, .Hakkımda-text, .heading, .box, input, textarea, .social a',{delay:200, origin:'top'})












