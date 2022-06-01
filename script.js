const modal = document.getElementById('trigger-modal');
const handleModal = (state) => {
    state ? modal.style.display = 'flex' : modal.style.display = 'none'
}
const handleSubmit = () => {
    alert("submit modal")
}