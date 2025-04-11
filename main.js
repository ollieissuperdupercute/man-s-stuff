const form=document.querySelector("form")

form.addEventListener("submit",function(event) {
    event.preventDefault()

    const volume = document.getElementById("volumeInput").value
    alert(volume)
})