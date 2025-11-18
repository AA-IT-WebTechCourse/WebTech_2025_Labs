
### Python Installation Guide:
1. Download the Python installer from the official website: https://www.python.org/downloads/. Use python version 3.8 or higher.
2. Run the installer and follow the on-screen instructions. Make sure to check the box that says "Add Python to PATH" during installation.
3. After installation, open a command prompt (Windows) or terminal (Mac/Linux) and verify the installation by running the following commands:

```bash
python --version
python3 --version
```

###  VS Code Extensions for Python Development:
- Python (by Microsoft)
- Django (by Baptiste Darthenay)
- SQLite by yy0931

### Setting Up a Virtual Environment:
1. If you don't have `venv` installed, you can install it using pip:

```bash
pip install virtualenv
```

2. Open a command prompt or terminal.
3. Navigate to your project directory.
4. Create a virtual environment by running the following command:

   - On Windows:
     ```bash
     python -m venv venv
     ```

   - On Mac/Linux:
     ```bash
     python3 -m venv venv
     ```
5. Activate the virtual environment:
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    
    - On Mac/Linux:
      ```bash
      source venv/bin/activate
      ```

### Installing Django and Other Dependencies:
- Install Django and other required packages using pip:

```bash
pip install django
```

### Using Requirements File (Recommended):
- Create a `requirements.txt` file in your project directory and list all your dependencies there.
- To install all dependencies from the `requirements.txt` file, run the following command:

```bash
pip install -r requirements.txt
```

### Django Project Setup:
1. Create a new Django project by running the following command:

```bash
django-admin startproject myproject
```
2. Navigate into the project directory:
3. Create a new Django app by running the following command:

```bash
python manage.py startapp myapp
```

4. Add the new app to the `INSTALLED_APPS` list in `myproject/settings.py`.

### Commands to run the Django development server:
````bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
````


### Creating a Superuser:
````bash
python manage.py createsuperuser
````
