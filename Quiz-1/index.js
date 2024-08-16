const tareas =[
    {
        id:12343,
        Nombre: 'matematicas',
Estado: 'completada'
    },
    {
        id:12743,
        Nombre: 'matematicas',
Estado: 'completada'
    },
    {
        id:12349,
        Nombre: 'matematicas',
Estado: 'completada'
    },
    {
        id:12348,
        Nombre: 'matematicas',
Estado: 'completada'
    }


]



function completado (array,id){

    let tareaCompletada = [];
 tareas.forEach((element)=>{

    if (element.id===id){
       element.Estado = true
       tareaCompletada.push(element)
    }
 })
  return tareaCompletada
 
}

console.log(completado(tareas,12343))