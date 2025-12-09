/* ============================================================
   Chicos: este archivo contiene TODAS las prácticas de clase,
   tanto las primeras actividades como los nuevos eventos.
=============================================================== */

/* ============================================================
   ACTIVIDAD 1: Cambiar el fondo del banner
=============================================================== */
const banner = document.getElementById("banner");
banner.classList.remove("bg-danger");
banner.classList.add("bg-warning");

/* ============================================================
   ACTIVIDAD 2: Testimonios VIP y todos los párrafos
=============================================================== */
const testimoniosVip = document.getElementsByClassName("testimonio-vip");
for (let vip of testimoniosVip) {
    vip.classList.add("text-primary");
}

const parrafos = document.getElementsByTagName("p");
for (let p of parrafos) {
    p.classList.add("text-danger");
}

/* ============================================================
   ACTIVIDAD 3: querySelector, querySelectorAll, getElementsByName
=============================================================== */
const primerInput = document.querySelector("input");
primerInput.classList.add("bg-success", "text-white");

const botones = document.querySelectorAll("button");
botones.forEach(boton => boton.classList.add("btn-danger"));

const campoNombre = document.getElementsByName("nombreEjemplo");
if (campoNombre.length > 0) {
    campoNombre[0].classList.add("text-warning");
}

/* ============================================================
   EVENTO onclick
=============================================================== */
function saludar() {
    const mensaje = document.getElementById("mensajeOnclic"); // CORREGIDO (faltaba la k)
    mensaje.innerText = "¡Gracias por hacer clic! Así funcionan las promociones.";
}

/* ============================================================
   EVENTO onmouseover / onmouseout
=============================================================== */
function cambiarColor() {
    document.getElementById("cuadroColor").style.background = "#ffd966";
}

function restaurarColor() {
    document.getElementById("cuadroColor").style.background = "#eee";
}

/* ============================================================
   EVENTO onchange
=============================================================== */
function mostrarSeleccion() {
    const valor = document.getElementById("selectorOpciones").value;
    const texto = document.getElementById("textonChange");

    texto.innerText = valor === "" ? "" : "Elegiste: " + valor;
}

/* ============================================================
   EVENTO addEventListener
=============================================================== */
document.getElementById("btnCambiaCard").addEventListener("click", function () {

    document.getElementById("cardImagen").src = "img/casco.jpeg";
});

/* ============================================================
   Agregar imágenes dinámicas a la galería (CORREGIDO)
=============================================================== */

// IDs corregidos para que coincidan con tu HTML
const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

btnAgregarImagen.addEventListener("click", function () {

    const url = inputImagen.value.trim();

    if (url === "") {
        alert("Por favor ingresa la URL de la imagen.");
        return;
    }

    // Crear columna
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    // Crear tarjeta de imagen
    col.innerHTML = `
        <div class="card shadow-sm">
            <img src="${url}" class="card-img-top" alt="Imagen agregada">
            <div class="card-body text-center">
                <button class="btn btn-danger btnEliminar w-100">Eliminar</button>
            </div>
        </div>
    `;

    galeria.appendChild(col);

    // Botón eliminar
    col.querySelector(".btnEliminar").addEventListener("click", function () {
        col.remove();
    });

    inputImagen.value = "";
});

/* ============================================================
   ACTIVIDAD LISTA DE TAREAS WARRIOR
============================================================ */

// 1. Seleccionar elementos principales
const listaTareas = document.getElementById("listaTareas");
const btnEliminarPrimero = document.getElementById("btnEliminarPrimero");
const inputNuevaTarea = document.getElementById("inputNuevaTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

// 2. Eliminar el primer elemento de la lista usando remove()
btnEliminarPrimero.addEventListener("click", () => {
  const primeraTarea = listaTareas.firstElementChild;

  if (primeraTarea) {
    primeraTarea.remove(); // elimina el nodo directamente
  } else {
    alert("No hay tareas para eliminar.");
  }
});

// 3. Agregar nuevas tareas a la lista
btnAgregarTarea.addEventListener("click", () => {
  const textoTarea = inputNuevaTarea.value.trim();

  if (textoTarea === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  // Crear nueva tarea (li)
  const nuevaTarea = document.createElement("li");
  nuevaTarea.classList.add("list-group-item");
  nuevaTarea.innerText = textoTarea;

  // Insertar en la lista
  listaTareas.appendChild(nuevaTarea);

  inputNuevaTarea.value = ""; // limpiar input
});

