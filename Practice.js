let Sidebarpic = document.querySelector('#sidebar-pic')
let sidebar = document.querySelector('.sidebar')
// let delete = document.querySelector('#delete')
let del = document.querySelector('#delete')
Sidebarpic.addEventListener('click', function () {
    sidebar.style.width = "80%"
    
})
del.addEventListener('click', function () {
    sidebar.style.width = '0px'
    
})