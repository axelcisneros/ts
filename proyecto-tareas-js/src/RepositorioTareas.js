export class RepositorioTareas {
  constructor() {
    this.tareas = new Map();
    this.siguienteId = 1;
  }

  generarId() {
    return this.siguienteId++;
  }

  guardar(tarea) {
    this.tareas.set(tarea.id, tarea);
  }

  buscarPorId(id) {
    return this.tareas.get(id);
  }

  listar() {
    return Array.from(this.tareas.values());
  }
}
