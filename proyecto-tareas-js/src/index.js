import { RepositorioTareas } from './RepositorioTareas.js';
import { ServicioTareas } from './ServicioTareas.js';
import { PresentadorTareas } from './PresentadorTareas.js';

const repositorio = new RepositorioTareas();
const servicio = new ServicioTareas(repositorio);
const presentador = new PresentadorTareas();

servicio.crear('Repasar los tipos de TypeScript');
const practica = servicio.crear('Migrar el proyecto de tareas');
servicio.completar(practica.id);
presentador.mostrar(servicio.listar());
