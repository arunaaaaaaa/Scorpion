import unittest
from unittest.mock import MagicMock

from react import React
from react_router_dom import BrowserRouter as Router
from react_testing_library import fireEvent, render

from components.Landing import Landing


class LandingPageTests(unittest.TestCase):
    def test_refresh_link_should_be_visible(self):
        component = render(React.createElement(Router, None, React.createElement(Landing)))
        refresh_el = component.get_by_test_id("refreshLink")

        self.assertEqual(refresh_el.textContent, "Refresh")


if __name__ == '__main__':
    unittest.main()