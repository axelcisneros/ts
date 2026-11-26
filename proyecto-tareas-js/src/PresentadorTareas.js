export class PresentadorTareas {
  mostrar(tareas) {
    if (tareas.length === 0) {
      console.log('No hay tareas.');
      return;
    }

    for (const tarea of tareas) {
      const estado = tarea.completada ? 'x' : ' ';
      console.log(`[${estado}] ${tarea.id}. ${tarea.titulo}`);
    }
  }
}
