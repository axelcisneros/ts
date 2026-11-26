export class Tarea {
  constructor(id, titulo) {
    if (!Number.isInteger(id) || id < 1) {
      throw new Error('El id debe ser un entero positivo.');
    }
    if (typeof titulo !== 'string' || titulo.trim() === '') {
      throw new Error('El titulo es obligatorio.');
    }

    this.id = id;
    this.titulo = titulo.trim();
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}
