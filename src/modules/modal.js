const modal = () =>{
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const topMenu = document.querySelector('.mobile-menu') 
//-------------------------------------------------------------------------------------------------
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.fancyboxModal')) {
            modalCallback.classList.toggle('dblock')
            modalOverlay.classList.toggle('dblock')
            topMenu.classList.remove('open')
        }else if (e.target.closest('.modal-close')) {
            modalCallback.classList.remove('dblock')
            modalOverlay.classList.remove('dblock')
        }else if (e.target.closest('.modal-overlay')) {
            modalCallback.classList.remove('dblock')
            modalOverlay.classList.remove('dblock')
        }else if (e.target.closest('.mob-menu-btn')) {
            topMenu.classList.toggle('open')
        }
        else if (e.target.closest('.close')) {
            topMenu.classList.remove('open')
        }
        else if (e.target.closest('.overlay')) {
            topMenu.classList.remove('open')
        }
        else if (e.target.closest('li')) {
            topMenu.classList.remove('open')
        }
    })
//-------------------------------------------------------------------------------------------------
    
}
export default modal