# Database Test

Date: 03.27.2023


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                |
| :------------- | ------------------------ | ----------- | --------------------------------------------------------- |
| 1            | Ajay                  | Pass      | Error in database connection                            |
| 2            | Ajay                   | Pass      | User Table created  |
| 3            | Ajay                   | Pass      | User database created with required collections         |
| 4            | Ajay                   | Pass      | database successfully created                                                                       |
| 5            | Ajay                   | Pass      | User Setting is correctly added                         |
| 6            | Aruna                   | Pass      | data entry appears in database                          |

# API Test

Date: 03.30.2023


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                                                               |
| -------------- | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1            | Aruna               | Fail      | Error occured when executing the query command                                                                         |
| 2            | Aruna               | Pass      | API returns the result with proper response code                                                                    |
| 3            | Aruna               | Pass      | Login API  when the username and password matched the row in the database                               |
| 4            | Aruna               | Pass      | Login API  code when the username and password does not match any row in the database                        |
| 5            | Aruna               | Pass      | Signup API  when the username is not found in the database                                              |
| 6            | Aruna               | Pass      | Signup API  when the username found in the database and returns duplicate username as the response body |
| 7            | Aruna               | Pass      | Pagination API return "page=" when the next page is clicked                                                            |
| 8            | Aruna               | Pass      | Integration testing for setting return user data when a existing user is logged in                                     |
| 9            | Aruna               | Pass      | Integration testing for setting return general data when a no user is logged in                                        |

# UX Test

Date: 04.03.2023


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                            |
| :------------- | ------------------------ | ----------- | :------------------------------------------------------------------------------------ |
| 1            | Eshwar                   | Fail      | Login button does not redirect user to the correct page                             |
| 2            | Eshwar                   | Fail      | Username not displaying after login                                                 |
| 3            | Eshwar                   | Fail      | Logout button not displayed after logged in                                         |
| 5            | Eshwar                   | Pass      | Display error message when wrong combination is submitted in login                  |
| 6            | Eshwar                   | Pass      | Display error message when trying to register a pre-exist user                      |
| 7            | Eshwar                   | Fail      | Password requirements are not mandatory                                             |
| 8            | Eshwar                   | Pass      | username and password are required in login                                         |
| 9           | Eshwar                   | Pass      | username and password are required in Register                                      |
| 10           | Ajay                   | Pass      | User Table created with required columns                                            |
| 11           | Ajay                   | Pass      | Display error message when search data entry doesn't meet search criteria           |
| 12           | Ajay                   | Pass      | Display user catergory when trying user is logged in                                |
| 13           | Aruna                   | pass      | Setting button correctly navigates to the setting page                              |
| 14           | Aruna               | pass      | unit test for Setting                                                               |
| 15           | Aruna               | pass      | unit test for Navbar                                                                |
| 16           | Ajay                   | pass      | unit test for Login                                                                 |
| 17           | Ajay                   | pass      | Integration test for api and pagination                                             |
| 18           | Ajay                   | pass      | Integration test for pagination after logged in                                     |
| 19           | Eshwar                   | pass      | Manual test for landing page loading                                                |
| 20           | Eshwar                   | fail      | Integration Test for prefered articles displaying on home page                      |
| 21           | Eshwar                   | pass      | Integration Test for prefered articles displaying on home page                      |


# System Test

Date: 04.06.2023


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                            |
| :------------- | ------------------------ | ----------- | :------------------------------------------------------------------------------------ |
| 1            | Aruna                   | Pass      | Sign up does help a new user to create an account                           |
| 2            | Aruna                   | Pass      | Login redirects user to home page with username displayed                                           
| 3            | Aruna                   | Pass      | Settings preference are saved and redirects user to home page                                       
| 4            | Aruna                   | Pass      | Search results are displayed on the home page 
| 5            | Aruna                   | Pass      | Advanced searching - exact matches results are displayed on the home page 
| 6            | Aruna                   | Pass      | Advanced searching - Search results for words that must appear are displayed on the home page 

![](assets/20220322_165942_image.png)
