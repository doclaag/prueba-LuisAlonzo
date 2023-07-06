
# Aplicación de Control de Nómina de Empleados

Esta es una aplicación de Control de Nómina de Empleados desarrollada con Django. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los empleados, así como proporcionar informes de nómina.

## Requisitos previos

- Python 
- Django 
- Django Rest Framework 
- SQLite (motor de base de datos)

## Instalación

1. Clona este repositorio:

   ```shell
   git clone https://github.com/doclaag/prueba-LuisAlonzo.git 
   ```

   2. Accede al directorio del proyecto:
   ```
   cd backend
   ```

   3. Crea y activa un entorno virtual (opcional pero se recomienda):
   ```
   python -m venv env
   source ./envs/backend/scripts/Activate.ps1

   ```

   4. Instala las dependencias del proyecto:
   ```
   pip install -r requirements.txt

   ```

   5. Realiza las migraciones de la base de datos:
   ```
   python manage.py migrate
    ```

# Ejecución

Inicia el servidor de desarrollo de Django:

```
 python manage.py runserver
```