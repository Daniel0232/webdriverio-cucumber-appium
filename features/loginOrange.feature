Feature: Orange HRM login

    Scenario: A a user, I can log into the secure area

        Given I am on the login page
        When I enter <username> and <password> on orangehrm login page
        Then I should see a dashboard page

        Examples:
            | username | password | url                                                                     |
            | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index |

    Scenario: A a user, I can not log into the secure area

        Given I am on the login page
        When I enter <username> and <password> on enter orangehrm login page
        Then I should see error message saying <message>

        Examples:
            | username | password | message             |
            | Javier   | 123456   | Invalid credentials |
