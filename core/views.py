from django.shortcuts import render

def home(request):
    """This is the view for the home page

    Note:
        The context in home needs to be made global
    """
    context = {
    }
    template = 'home.html'
    return render(request, template, context)
