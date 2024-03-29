**Test Items**

Frontend UI features Backend Database Middle Tier APIs Features to be Tested

Newsfeed Function Landing Page UI Setting dialog UI Database Table Component API Components Rendering Database Connection.

New features added to the homepage and the settings page are to be tested.

Integration testing to check if all the components are working together.

**Approach**

Apply manual tests with various test cases and document them properly. Ensure that the application is error free and it is working in conformance to the specified functional requirements.

Apply unit tests to the basic components such as buttons, dialogs to make sure they work properly.

Apply unit tests for the homepage landing and the pagination.Unit tests only tests the set of data and its functionality.It will not catch any errors in integration.We use integration testing for that.

**UNIT TEST STRATEGY:**

We have a test-driven development approach. So each functionality would be unit tested by the test cases written during the development. Developers must write the test before any production code and then write the code to make the test pass. Framework Junit will be used for unit testing.

**INTEGRATION TEST STRATEGY:**
•	Apply integration tests to check the unit tested modules one by one and test the behaviour as a combined unit and document them properly. Ascertain that the program is free of errors and that it meets the required functional requirements.

•	The project will use top-down integration testing. High level modules are tested first in isolation.

•	Later, low level modules or subordinate modules replace the high level modules one by one at a time and are tested. We use methods like depth-first or breadth-first search.

•	Process is repeated until each module is tested and integrated.

•	Functionalities built in Sprint 1 and Sprint 2 are also tested along with sprint 3.

**Pass/Fail Criteria**

Compare the test results to the requirement file abd check if it meets the specification. Run the unit tests and read the outcomes.

**Testing Tasks**

Ten test cases for UX requirements

Five test cases for API response code requirement

Five unit tests for test-driven-development purpose

One test case for database query

Five integration test cases for well designed testing.

**Responsibilities**

**Ravi Teja**

Implement the presistent Setting Function (Sprint 2 Fix)

Implement backend API ebdpoint [GET /category/{category}]

**Ajay Pranav**

Add Pagnition function

Front end: Implement the 3 categories tab displaying articles of categories by fetching the API implemented by Zhaoyuan

**Aruna**

Front end: Implement the tabs for users to choose the desired articles. (No articles displaying required at this time)

Front end: Implement the home tab displaying articles of user preference by fetching the API implemented by Varshith

**Eswar Teja**

Update test plan and add more information about the unit test and Integration test Strategy/INFO
Implement backend API ebdpoint [GET /news/{user}]

**Schedule**

April - May
Prepare the unit tests needed for the test driven development and develop the code April - May Apply manual/unit tesing and debug according to the test results.

**System Test Strategy**

The system test will have a Top-Down testing approach testing from the UI and usabilty testing, to the API and finally complete with database unit testing.
• Test cases with high Priority are executed first before medium and low priority. The lower level modules will be mocked until integrated.
• Manual testing will be applied to the landing page to verify all tabs, menus, and required features are displaying correctly. All required functions and features should be appropriate. Apply unit test for Usability to ensure all link are working properly. Links will take users to correct webpage.
• Apply unit test for API to ensure the correct respose and ensure Bug Reporting tool system is error free.  Manual Testing call the API on with correct username and password as parameter and check the response.


| Feature Testing         | Testing Method | Approach                                                                                                                       |
| :------------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Sign up Test            | Mannual        | For new user with the correct combination, create user account in database with user's information                             |
| Sign in Test            | Mannual        | When existing user being signed in, display user's data.                                                                       |
| Set Preferences Test    | Mannual        | User will select preferred settings, user's setting should display upon login                                                  |
| Merge articles test     | Mannual        | User database created with required collections                                                                                |
| Category Test           | Mannual        | User database created with required categories                                                                                 |
| Test Searching          | Mannual        | Search keywords                                                                                                                |
| Advanced searching test | Mannual        | Search advanced keywords                                                                                                       |
| Pagination Test         | Mannual        | Existing user when logged in should display set pagination. Nonexisted user when on landing page should display set pagination |
