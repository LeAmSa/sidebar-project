let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
let btnSearch = document.querySelector('.btn-search')
let homeContent = document.querySelector('.home_content')

btn.onclick = function() {
    sidebar.classList.toggle('active')
    homeContent.classList.toggle('active')
}

btnSearch.onclick = function() {
    sidebar.classList.toggle('active')
    homeContent.classList.toggle('active')
}