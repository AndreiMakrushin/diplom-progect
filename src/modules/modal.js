const modal = () =>{
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    
    
//-------------------------------------------------------------------------------------------------
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.fancyboxModal')) {
            modalCallback.classList.toggle('dblock')
            modalOverlay.classList.toggle('dblock')
        }else if (e.target.closest('.modal-close')) {
            modalCallback.classList.remove('dblock')
            modalOverlay.classList.remove('dblock')
        }else if (e.target.closest('.modal-overlay')) {
            modalCallback.classList.remove('dblock')
            modalOverlay.classList.remove('dblock')
        }
    })
//-------------------------------------------------------------------------------------------------
    
}
export default modal