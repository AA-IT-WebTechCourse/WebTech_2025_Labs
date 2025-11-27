from django.shortcuts import render, redirect
from .forms import UserRegistrationForm, UserLoginForm

# Create your views here.

def students(request):
    students = [
        {'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com'},
        {'first_name': 'Jane', 'last_name': 'Smith', 'email': 'jane.smith@example.com'},
    ]
    return render(request, 'student_template.html', context={'students': students})


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegistrationForm()
        return render(request, 'register.html', context={'form': form})
    

def login_form(request):
    form = UserLoginForm()
    return render(request, 'login.html', context={'form': form})