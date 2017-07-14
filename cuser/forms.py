from django import forms
from django.contrib.auth.forms import UserCreationForm
from cuser.models import User


class SignUpForm(UserCreationForm):
    """This form is used create a user account.

    A user inputs their email and a username along with a password
    to create a user model.

    Attributes:
        email (obj):
    """

    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')
    username = forms.CharField(max_length=40, help_text='Required.')

    class Meta:
        model = User
        fields = ('email', 'username', 'password1', 'password2')

    def clean_email(self):
        """This function checks if the username is unique.

        Raises:
            ValidationError: If 'username' exist with another user object
                with a different email
        """
        email = self.cleaned_data.get('email')
        username = self.cleaned_data.get('username')
        if email and User.objects.filter(username=username).exclude(email=email).exists():
            raise forms.ValidationError(u'Display Name must be unique.')
        return email
