from django.shortcuts import render

# Create your views here.

def students(request):
    # //define 3 students
    # Return the highest scorer among them
    return render(request, 'students.html')
