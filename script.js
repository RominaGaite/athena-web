document.getElementById("enviarCorreo").addEventListener("click", function() {
    // Obtener los datos del formulario
    var formData = new FormData(document.getElementById("formularioContacto"));

    // Enviar los datos del formulario mediante una solicitud POST
    fetch("enviar-formulario.php", {
        method: "POST",
        body: formData
    }).then(response => {
        // Si la solicitud se completó con éxito, mostrar el modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        // Redirigir a index.html después de 3 segundos
        setTimeout(function() {
            window.location.href = "index.html";
        }, 3000); // 3000 milisegundos = 3 segundos
    }).catch(error => {
        // Si hubo un error, mostrar mensaje de error
        console.error("Error al enviar el formulario:", error);
    });
});

// Cerrar el modal al hacer clic en la "x"
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}