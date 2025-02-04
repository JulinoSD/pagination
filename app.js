import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'
console.log(fetchFollowers)
const title = document.querySelector('.title')
const btnPage = document.querySelector('.btn-container')
let index = 0
let pages = []
const setupUI = ()=>{
    displayFollowers(pages[index])
    displayButtons(btnPage, pages, index)
}
const init = async () => {
    const followers = await fetchFollowers()
    title.textContent = 'Pagination'
    pages = paginate(followers)
    setupUI()
}

btnPage.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-container')) return
    if(e.target.classList.contains('page-btn')){
        index = parseInt(e.target.dataset.index)}
    if(e.target.classList.contains('next-btn')){
        index ++
        if(index > pages.length - 1){
            index = 0
        }
    }
    if(e.target.classList.contains('prev-btn')){
        index --
        if(index < 0){
            index = 0
        }
    }
    setupUI()
})

window.addEventListener('load', init)