# 

Date: 03.06.23


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                |
| :------------- | ------------------------ | ----------- | --------------------------------------------------------- |
| 1            | Ajay                   | Fail      | Error in database connection                            |
| 2            | Ajay                    | Fail      | Client does not accept authentication protcal           |
| 3            | Ajay                   | Pass      | User Table created with required columns for data entry |
| 4            |Ajay                   | Pass      | User database created with required collections         |
| 5            | Ajay                    | Pass      | database successfully created                           |
| 6            | Ajay                    | Pass      | User Setting is correctly added                         |
| 7            | Ajay                    | Pass      | data entry appears in database                          |

# 

Date: 03.27.23


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                                                               |
| -------------- | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1            | Ajay                | Fail      | Error occured when executing the query command                                                                         |
| 2            | Ajay                | Fail      | API returns the result without proper response code                                                                    |
| 3            | Ajay                | Pass      | Login API return 200 code when the username and password matched the row in the database                               |
| 4            | Ajay                | Pass      | Login API return 401 code when the username and password does not match any row in the database                        |
| 5            | Ajay                | Pass      | Signup API return 200 code when the username is not found in the database                                              |
| 6            | Ajay               | Pass      | Signup API return 401 code when the username found in the database and returns duplicate username as the response body |
| 7            | Ajay                | Pass      | Pagination API return "page=" when the next page is clicked                                                            |
| 8            | Ajay                | Pass      | Integration testing for setting return user data when a existing user is logged in                                     |
| 9            | Ajay                | Pass      | Integration testing for setting return general data when a no user is logged in                                        |

# 

Date: 04.10.23


| Test Case ID | Name of Person testing | Pass/Fail | Comments                                                                            |
| :------------- | ------------------------ | ----------- | :------------------------------------------------------------------------------------ |
| 1            | Ajay                    | Fail      | Login button does not redirect user to the correct page                             |
| 2            | Ajay                    | Fail      | Username not displaying after login                                                 |
| 3            | Ajay                    | Fail      | Logout button not displayed after logged in                                         |
| 4            | Ajay                    | Pass      | Return 200 code and correct response when correct combination is submitted in login |
| 5            | Ajay                    | Pass      | Display error message when wrong combination is submitted in login                  |
| 6            | Ajay                    | Pass      | Return 200 code when a non duplicate username is registered                         |
| 7            | Ajay                    | Pass      | Display error message when trying to register a pre-exist user                      |
| 8            | Ajay                    | Fail      | Password requirements are not mandatory                                             |
| 9            | Ajay                    | Pass      | username and password are required in login                                         |
| 10           | Ajay                    | Pass      | username and password are required in Register                                      |
| 11           | Ajay                    | Pass      | User Table created with required columns                                            |
| 12           | Ajay                   | Pass      | Display error message when search data entry doesn't meet search criteria           |
| 13           | Ajay                    | Pass      | Display user catergory when trying user is logged in                                |
| 14           | Ajay                    | pass      | Setting button correctly navigates to the setting page                              |
| 15           | Ajay                    | pass      | Integration test for api and pagination                                             |
| 16           | Ajay                    | pass      | Integration test for pagination after logged in                                     |
| 17           | Ajay                    | pass      | Manual test for landing page loading                                                |
| 18           | Ajay                    | fail      | Integration Test for prefered articles displaying on home page                      |
| 19           | Ajay                    | pass      | Integration Test for prefered articles displaying on home page                      |