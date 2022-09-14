const validate = () =>{
    const valName = document.querySelectorAll('[placeholder="Ваше имя"]')
    const valPhone = document.querySelectorAll('[placeholder="Телефон*"]')

    valPhone.forEach(valPhone => valPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1').trim()
    }))

    valName.forEach(valName => valName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ ]/g, "").trim()
    }))
}
export default validate