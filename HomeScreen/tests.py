# File: tests.py
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from .models import TOS, Edit

class YourAppTests(TestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(
            username='testuser', password='testpassword')

        # Create a sample TOS
        self.tos = TOS.objects.create(
            name='Sample TOS',
            fullText='This is a sample Terms of Service.',
            author=self.user
        )

    def test_profile_view(self):
        # Log in the user
        self.client.login(username='testuser', password='testpassword')

        # Access the profile view
        response = self.client.get(reverse('profile'))

        # Check if the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Check if the user's TOS contributions are displayed
        self.assertContains(response, 'Sample TOS')

    def test_submit_view(self):
        # Log in the user
        self.client.login(username='testuser', password='testpassword')

        # Access the submit view with a POST request
        response = self.client.post(reverse('submit'), {
            'name': 'New TOS',
            'fullText': 'This is a new Terms of Service.',
        })

        # Check if the TOS submission was successful
        self.assertEqual(response.status_code, 302)  # 302 is the status code for a redirect

        # Check if the new TOS is present in the database
        new_tos = TOS.objects.get(name='New TOS')
        self.assertEqual(new_tos.author, self.user)

    # Add more test cases for other views, models, and functionalities as needed
