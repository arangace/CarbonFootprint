const modal = document.getElementById('trigger-modal');
// toggles showing the modal based on the input state, changing the css display style
const handleModal = (state) => {
    state ? modal.style.display = 'flex' : modal.style.display = 'none'
}
const handleSubmit = () => {
    alert("Successfully submitted!")
}
