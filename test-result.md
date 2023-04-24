# Database Test

Date: 3.18.2022


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                |
| :------------- | ------------------------ | ----------- | --------------------------------------------------------- |
| 1            | Ajay                  | Fail      | Error in database connection                            |
| 2            | Ajay                   | Fail      | Client does not accept authentication protcal           |
| 3            | Ajay                   | Pass      | User Table created with required columns for data entry |
| 4            | Ajay                   | Pass      | User database created with required collections         |
| 5            | Ajay                   | Pass      | database successfully created                           |
| 6            | Ajay                   | Pass      | /                                                       |
| 7            | Ajay                   | Pass      | User Setting is correctly added                         |
| 8            | Aruna                   | Pass      | data entry appears in database                          |

# API Test

Date: 3.18.2022


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                                                               |
| -------------- | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1            | Aruna               | Fail      | Error occured when executing the query command                                                                         |
| 2            | Aruna               | Fail      | API returns the result without proper response code                                                                    |
| 3            | Aruna               | Pass      | Login API return 200 code when the username and password matched the row in the database                               |
| 4            | Aruna               | Pass      | Login API return 401 code when the username and password does not match any row in the database                        |
| 5            | Aruna               | Pass      | Signup API return 200 code when the username is not found in the database                                              |
| 6            | Aruna               | Pass      | Signup API return 401 code when the username found in the database and returns duplicate username as the response body |
| 7            | Aruna               | Pass      | Pagination API return "page=" when the next page is clicked                                                            |
| 8            | Aruna               | Pass      | Integration testing for setting return user data when a existing user is logged in                                     |
| 9            | Aruna               | Pass      | Integration testing for setting return general data when a no user is logged in                                        |

# UX Test

Date: 3.21.2022


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                            |
| :------------- | ------------------------ | ----------- | :------------------------------------------------------------------------------------ |
| 1            | Eshwar                   | Fail      | Login button does not redirect user to the correct page                             |
| 2            | Eshwar                   | Fail      | Username not displaying after login                                                 |
| 3            | Eshwar                   | Fail      | Logout button not displayed after logged in                                         |
| 4            | Eshwar                  | Pass      | Return 200 code and correct response when correct combination is submitted in login |
| 5            | Eshwar                   | Pass      | Display error message when wrong combination is submitted in login                  |
| 6            | Eshwar                   | Pass      | Return 200 code when a non duplicate username is registered                         |
| 7            | Eshwar                   | Pass      | Display error message when trying to register a pre-exist user                      |
| 8            | Eshwar                   | Fail      | Password requirements are not mandatory                                             |
| 9            | Eshwar                   | Pass      | username and password are required in login                                         |
| 10           | Eshwar                   | Pass      | username and password are required in Register                                      |
| 11           | Ajay                   | Pass      | User Table created with required columns                                            |
| 12           | Ajay                   | Pass      | Display error message when search data entry doesn't meet search criteria           |
| 13           | Ajay                   | Pass      | Display user catergory when trying user is logged in                                |
| 14           | Aruna                   | pass      | Setting button correctly navigates to the setting page                              |
| 15           | Aruna               | pass      | unit test for Setting                                                               |
| 16           | Aruna               | pass      | unit test for Navbar                                                                |
| 17           | Ajay                   | pass      | unit test for Login                                                                 |
| 18           | Ajay                   | pass      | Integration test for api and pagination                                             |
| 19           | Ajay                   | pass      | Integration test for pagination after logged in                                     |
| 20           | Eshwar                   | pass      | Manual test for landing page loading                                                |
| 21           | Eshwar                   | fail      | Integration Test for prefered articles displaying on home page                      |
| 22           | Eshwar                   | pass      | Integration Test for prefered articles displaying on home page                      |


# System Test

Date: 3.21.2022


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                            |
| :------------- | ------------------------ | ----------- | :------------------------------------------------------------------------------------ |
| 1            | Aruna                   | Fail      | Sign up does not redirect user to home page                             |
| 2            | Aruna                   | Pass      | Login redirects user to home page with username displayed                                                 |
| 3            | Aruna                   | Pass      | Settings preference are saved and redirects user to home page                                         |
| 4            | Aruna                   | Pass      | Search results are displayed on the home page 
| 5            | Aruna                   | Pass      | Advanced searching - exact matches results are not displayed on the home page 
| 6            | Aruna                   | Pass      | Advanced searching - Search results for words that must appear are displayed on the home page 
| 7            | Aruna                   | Pass      | Merged articles are displayed on home page after settings preferences are displayed
| 8            | Aruna                   | Pass      | Category articles are displayed on home page after user clicks on the menu tab


Evidence for success unit testing

![](assets/20220322_165942_image.png)
