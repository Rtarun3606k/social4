const sumMoonContainer = document.querySelector('.sun-moon-container')


document.querySelector('.them-toogle-btn').addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        document.querySelector('.them-toogle-btn').textContent ="Dark"
        nav.classList.add('navbar-dark')
    }
    else{
        document.getElementsByClassName('dark')
        let nav = document.getElementById('nav')
        document.querySelector('.them-toogle-btn').textContent ="Light"
        nav.classList.remove('navbar-dark')
        // document.querySelector('.them-toogle-btn').textContent ="Light"
    }
    // const currentRotation = parseInt(getComputedStyle(sumMoonContainer).getPropertyValue('.--rotation'))
    // sumMoonContainer.style.setProperty('--rotation',currentRotation + 180)
})

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    document.body.classList.toggle('dark')
    document.querySelector('.them-toogle-btn').textContent ="Dark"
        nav.classList.add('navbar-dark')
   
} else {
    document.getElementsByClassName('dark')
    let nav = document.getElementById('nav')
    document.querySelector('.them-toogle-btn').textContent ="Light"
    nav.classList.remove('navbar-dark')
    console.log('light')
}