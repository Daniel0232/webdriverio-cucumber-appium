Feature: NopCommerce Login

    Scenario: As a user, I can not log into the NopCommerce page

        Given I am on the "NopCommerce login" page
        When I enter <username> and <password> on "NopCommerce login" page
        Then I should see a error message saying <message>

        Examples:
            | username | password | message             |
            | Javier   | 123456   | Invalid credentials |

    Scenario: A a user, I can log into the secure area

        Given I am on the "orangehrm login" page
        When I enter <username> and <password> on "orangehrm login" page
        Then I should see the "dashboard" page <url>

        Examples:
            | username | password | url                                                                     |
            | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index |


