import unittest
import requests

class TestNewsAPI(unittest.TestCase):
    def test_search_api(self):
        search_item = "coronavirus"
        response = requests.get(f"http://localhost:3000/search/{search_item}")
        self.assertEqual(response.status_code, 200)

    def test_signin_api(self):
        data = {"username": "testuser", "password": "testpassword"}
        response = requests.get("http://localhost:3000/login", json=data)
        self.assertIn(response.status_code, [200, 401])

    def test_getsetting_api(self):
        data = {"username": "testuser"}
        response = requests.get("http://localhost:3000/getsetting", json=data)
        self.assertEqual(response.status_code, 200)

    def test_settings_api(self):
        data = {"username": "testuser", "check": [1, 0, 0, 0, 0, 0, 0]}
        response = requests.get("http://localhost:3000/settings", json=data)
        self.assertEqual(response.status_code, 200)

    def test_signup_api(self):
        data = {"username": "testuser", "password": "testpassword"}
        response = requests.post("http://localhost:3000/register", json=data)
        self.assertIn(response.status_code, [200, 400])

if __name__ == '__main__':
    unittest.main()
