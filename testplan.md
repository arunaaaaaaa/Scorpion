# Introduction

This is the test plan markdown file for the Sprint 3 in CS684 ***Team Scorpion***.
In the sprint 1, we developed a web based application which provides the basic authentication system
which includes login, register functions. The application is developed with React for the front-end
and Node Express for the backend. MySQL database is utilized to store the user information and will
be connected by the Node Express. Middle Tier RESTful APIs are implemented to transmit the data.
In the sprint 2, we are going to develop the news feed functions with modifications made to the sprint 1,
unit testing will be used to improve the efficiency of testing.

# Test Items

- Frontend UI features
- Backend Database
- Middle Tier APIs

# Features to be Tested

- Newsfeed Function
- Landing Page UI
- Setting dialog UI
- Database Table Component
- API Components Rendering
- Database Connection



# **Approach**

Apply manual tests with various test cases and document them properly. Ensure that the application is error free and it is working in conformance to the specified functional requirements.

Apply unit tests to the basic components such as buttons, dialogs to make sure they work properly.

Apply unit tests for the homepage landing and the pagination.Unit tests only tests the set of data and its functionality.It will not catch any errors in integration.We use integration testing for that.

# **INTEGRATION TEST STRATEGY**

•	Apply integration tests to check the unit tested modules one by one and test the behaviour as a combined unit and document them properly. Ascertain that the program   is free of errors and that it meets the required functional requirements.

•	The project will use top-down integration testing. High level modules are tested first in isolation.

•	Later, low level modules or subordinate modules replace the high level modules one by one at a time and are tested. We use methods like depth-first or breadth-first   search.

•	Process is repeated until each module is tested and integrated.

•	Functionalities built in Sprint 1 and Sprint 2 are also tested along with sprint 3.


# Pass/Fail Criteria

Compare the test results to the requirement file abd check if it meets the specification.

# Testing Tasks

- Ten test cases for UX requirement


# Responsibilities


Ravi Teja
- Work on part of the frontend.<br>
- Test Front-end UI components manually.<br>

Ajay Pranav
- Implement unit tests for test-driven development.<br>
- Test API functions.<br>
- Test Database conncetion.<br>

Aruna Viswanathan
- Implement the unit tests for Setting page and Navigator component.<br>
- Implement the Setting page.<br>
- Test Setting Page.<br>

Eswar Teja
- Update the backend database with Node Express. Create the database and use APIs to communicate with it.<br>
- Implement the newsfeed function.<br>
- Develop the API as middle tier that connects the newsfeed API with the application.<br>

# Schedule

Mar 28 - April 07

- Prepare the unit tests needed for the test driven development and develop the code.
- Apply manual/unit tesing and debug according to the test results.
