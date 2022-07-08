let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
let btnSearch = document.querySelector('.btn-search')

btn.onclick = function() {
    sidebar.classList.toggle('active')
}

btnSearch.onclick = function() {
    sidebar.classList.toggle('active')
}