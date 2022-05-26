const navItems = document.querySelectorAll('.navItem p');



navItems.forEach(item =>{
    item.addEventListener('click', (event)=>{
        const actionBlock = event.target.closest('.navItem').querySelector('.actions');
        actionBlock.classList.toggle('__show');
    })
})



