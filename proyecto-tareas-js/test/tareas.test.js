import test from 'node:test';
import assert from 'node:assert/strict';
import { Tarea } from '../src/Tarea.js';
import { RepositorioTareas } from '../src/RepositorioTareas.js';
import { ServicioTareas } from '../src/ServicioTareas.js';

test('crea y lista tareas con identificadores distintos', () => {
  const servicio = new ServicioTareas(new RepositorioTareas());
  const primera = servicio.crear('  Estudiar tipos  ');
  const segunda = servicio.crear('Practicar clases');

  assert.equal(primera.titulo, 'Estudiar tipos');
  assert.notEqual(primera.id, segunda.id);
  assert.deepEqual(servicio.listar(), [primera, segunda]);
});

test('completa una tarea existente y conserva el cambio', () => {
  const servicio = new ServicioTareas(new RepositorioTareas());
  const tarea = servicio.crear('Migrar');

  assert.equal(servicio.completar(tarea.id).completada, true);
  assert.equal(servicio.listar()[0].completada, true);
});

test('rechaza entradas invalidas y tareas inexistentes', () => {
  const servicio = new ServicioTareas(new RepositorioTareas());

  assert.throws(() => servicio.crear('   '), /titulo es obligatorio/);
  assert.throws(() => servicio.crear(null), /titulo es obligatorio/);
  assert.throws(() => new Tarea(0, 'Tarea'), /entero positivo/);
  assert.throws(() => servicio.completar(99), /No existe la tarea 99/);
});
