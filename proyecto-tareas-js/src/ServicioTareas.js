import { Tarea } from './Tarea.js';

export class ServicioTareas {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  crear(titulo) {
    const tarea = new Tarea(this.repositorio.generarId(), titulo);
    this.repositorio.guardar(tarea);
    return tarea;
  }

  completar(id) {
    const tarea = this.repositorio.buscarPorId(id);
    if (!tarea) {
      throw new Error(`No existe la tarea ${id}.`);
    }
    tarea.completar();
    this.repositorio.guardar(tarea);
    return tarea;
  }

  listar() {
    return this.repositorio.listar();
  }
}
