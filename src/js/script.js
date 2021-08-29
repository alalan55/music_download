const downloadBtn = document.querySelector('.btn-baixar');
const inputValue = document.querySelector('.entrada-url');


downloadBtn.addEventListener('click', () =>{
    sendUrl(inputValue.value)
})

const sendUrl = async (url) =>{
    try {
        window.location.href = `http://localhost:3000/download?url=${url}`
    } catch (error) {
        console.error(error)
    }
}