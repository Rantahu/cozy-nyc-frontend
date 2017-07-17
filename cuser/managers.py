from django.contrib.auth.models import BaseUserManager

# TO DO/ NEEDS FIXING
class UserManager(BaseUserManager):
    """Custom User Manager for 'cuser'
    """
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Base case function to create a user

        User if redirected to set a password if no password

        Returns:
            _create_user function
        """
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(email, password, False, False,
                                 **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, True, True,
                                 **extra_fields)
