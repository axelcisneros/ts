# Proyecto de práctica: tareas

Aplicación de consola en JavaScript con módulos ES y clases separadas por responsabilidad. Los datos viven únicamente en memoria y se pierden al terminar el proceso.

## Requisitos y ejecución

Se requiere Node.js 18 o posterior. No hay dependencias que instalar para ejecutar el proyecto inicial.

```powershell
cd proyecto-tareas-js
npm.cmd start
npm.cmd test
```

En Windows, `npm.cmd` evita posibles restricciones de ejecución de `npm.ps1`; en otros sistemas se puede usar `npm`.

## Responsabilidades

- `Tarea`: representa una tarea y valida sus datos.
- `RepositorioTareas`: almacena y busca instancias en memoria; genera identificadores.
- `ServicioTareas`: coordina los casos de uso.
- `PresentadorTareas`: imprime la lista en consola.
- `index.js`: conecta los componentes y ejecuta una demostración.

## Reto de migración

Sigue la guía PDF que acompaña al proyecto. Convierte las clases y el punto de entrada a TypeScript con `strict`, conservando los imports con extensión `.js` para Node.js ESM. Crea una interfaz para el repositorio, contempla el resultado ausente de `buscarPorId`, y mantiene las validaciones de ejecución: los tipos no validan datos externos. Compila a `dist` y ejecuta el resultado.

Las pruebas originales importan `src/*.js`: al renombrar los archivos, adapta sus imports para apuntar a `dist/*.js`, compila antes de ejecutar `npm.cmd test` y conserva los casos existentes. No elimines las comprobaciones de entradas inválidas solo para satisfacer el compilador.
