const smooth = () =>{
    const up = document.querySelector('.up')
    document.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 650) {
            up.style.display = 'block'
        }else{
            up.style.display = 'none'
        }
    })
}
export default smooth