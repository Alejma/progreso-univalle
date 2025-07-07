# Progreso Universitario Univalle

Aplicación web para visualizar y marcar el avance en el pensum de la carrera de Ingeniería de Sistemas de la Universidad del Valle, sede Tuluá.

## Descripción

Esta aplicación permite consultar el pensum académico organizado por semestres, marcar materias como vistas y llevar un control de los créditos completados. Los datos de las materias se almacenan en un archivo JSON en el servidor, lo que permite la persistencia de los cambios.

> **Nota:** El proyecto está configurado inicialmente para la carrera de **Ingeniería de Sistemas** de la **Universidad del Valle, sede Tuluá** (Resolución Nueva No. 047). Puedes personalizar el archivo `materias.json` para adaptarlo a otras carreras o sedes.

## Estructura del proyecto

```
Pensum-proyecto/
│
├── app.py                # Backend Flask
├── materias.json         # Materias y su estado
├── README.md             # Este archivo
├── requirements.txt      # Dependencias para Render o pip
├── render.yaml           # Configuración para Render
├── /templates
│   └── index.html        # Plantilla principal
└── /static
    ├── style.css         # Estilos
    └── script.js         # Lógica frontend
```

## Requisitos
- Python 3.7+
- Flask

Instala Flask con:
```bash
pip install flask
```

## Uso
1. Clona el repositorio y entra a la carpeta del proyecto.
2. Ejecuta la aplicación:
   ```bash
   python app.py
   ```
3. Abre tu navegador en [http://localhost:5000](http://localhost:5000)

## Personalización
- **Materias y semestres:** Edita `materias.json` para agregar, quitar o modificar materias.
- **Colores por área:** Modifica las clases CSS en `static/style.css` para cambiar los colores de las áreas.

## Cambios y mejoras a futuro
- **CRUD completo desde el navegador:** Agregar, editar y eliminar materias directamente desde la interfaz web, sin editar el archivo JSON manualmente.
- **Mejoras visuales:** Hacer la interfaz más atractiva y moderna, con mejor experiencia de usuario en dispositivos móviles y escritorio.
- **Soporte para múltiples pensum:** Permitir cargar y seleccionar entre varios pensum/carreras desde la aplicación.
- **Otras ideas:** Exportar el avance, estadísticas personalizadas, integración con autenticación si se requiere en el futuro, etc.

## Licencia
Este proyecto está licenciado bajo los términos de la licencia **Apache 2.0**. Consulta el archivo LICENSE para más detalles.

---

Desarrollado para la comunidad estudiantil de la Universidad del Valle, sede Tuluá. 