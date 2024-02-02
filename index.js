const photo = document.querySelectorAll ('.first');
photo.forEach (first => {
    first. addEventListener('mouseover',() => {
    removeFocus();
    first.classList.add('selected');
})
removeFocus = () => {
    photo.forEach (first => {
    first.classList.remove('selected');
    })
}
})

const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.pizza');
searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    divs.forEach (item => {
        item.querySelector('h3').textContent.toLowerCase().includes(word)?(item.style.display='block'):(item.style.display='none');
    })
})
