const listaDeTareas = document.querySelector("#record")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const totalTarea = document.querySelector("#totalTarea")
const tareasRealizadas = document.querySelector("#tareasRealizadas")
const tbody = document.querySelector("tbody");
const tareas = []

btnAgregar.addEventListener("click", () => {
/* Agregamos tarea al arreglo */
if (tareaInput.value !== ''){
  const nuevaTarea = tareaInput.value
  tareas.push({id: Date.now(), nombre: nuevaTarea, completado: false})
  /*Reset*/
tareaInput.value = ""
}
/* Render */
renderRows(tareas)
})

/*Función para borrar*/
const borrar = function(id){
  const index = tareas.findIndex((ele) => ele.id == id)
  tareas.splice(index, 1)
  renderRows(tareas)
  renderTareasTotales()
  renderTareasCompletadas()
}

/*Función para marcar la tarea como completada*/
const completar = function(id){
  tareasRealizadas.innerHTML = ""
  const index = tareas.findIndex((ele) => ele.id == id)
  if (tareas[index].completado == false){
  tareas[index].completado = true
}else{
  tareas[index].completado = false
}
renderTareasCompletadas()
}

/*Función para renderear tareas totales*/
const renderTareasTotales = function(){
  totalTarea.innerHTML = `TOTAL: ${tareas.length}`
} 

/*Función para renderear tareas totales*/
const renderTareasCompletadas = function(){
  let num = tareas.filter( tarea => tarea.completado == true)
  tareasRealizadas.innerHTML = `REALIZADAS: ${num.length}`
} 

/*Renderiza la tabla y datos*/
const renderRows = function(tareas) {
  tbody.innerHTML = ""
  tareas.forEach((tarea) => {
  tbody.innerHTML += `
  <tr>
    <td>${tarea.id}</td>
    <td>${tarea.nombre}</td>
    <td><input type="checkbox" onclick="completar(${tarea.id})"></td>
    <td><button onclick="borrar(${tarea.id})">eliminar</button></td>
  </tr>`
  renderTareasTotales()
  });
  } 
  