document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('nueva-tarea');
    const boton = document.getElementById('agregar-btn');
    const lista = document.getElementById('lista-tareas');

    function guardarTareas() {
        const tareas = [];
        document.querySelectorAll('#lista-tareas li').forEach(item => {
            tareas.push({
                texto: item.querySelector('span').textContent,
                completada: item.classList.contains('completada')
            });
        });
        localStorage.setItem('misTareas', JSON.stringify(tareas));
    }

    function cargarTareas() {
        const tareasGuardadas = localStorage.getItem('misTareas');
        if (tareasGuardadas) {
            JSON.parse(tareasGuardadas).forEach(t => agregarTarea(t.texto, t.completada));
        }
    }

    function agregarTarea(texto, completada = false) {
        const li = document.createElement('li');
        if (completada) li.classList.add('completada');

        const span = document.createElement('span');
        span.textContent = texto;
        span.style.cursor = 'pointer';
        span.onclick = () => {
            li.classList.toggle('completada');
            guardarTareas();
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'eliminar';
        btnEliminar.onclick = () => {
            li.remove();
            guardarTareas();
        };

        li.appendChild(span);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }

    boton.onclick = () => {
        const texto = input.value.trim();
        if (texto !== '') {
            agregarTarea(texto);
            input.value = '';
            guardarTareas();
        }
    };

    // Cargar tareas al iniciar
    cargarTareas();
});