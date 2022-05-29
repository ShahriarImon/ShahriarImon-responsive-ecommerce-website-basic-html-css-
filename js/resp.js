burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
rightnavList = document.querySelector('.rightnavList')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('h-nav-resp');
})