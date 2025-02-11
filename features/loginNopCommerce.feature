Feature: NopCommerce Login

    Scenario: As a user, I can not log into the NopCommerce page

        Given I am on the index page
        When I enter on the login page
        When I enter <username> and <password> on "NopCommerce login" page
        #Then I should see a error message saying <message>

        Examples:
            | username            | password | message     |
            | admin@yourstore.com | admin    | Wrong email |

    Scenario: As a user, I can log into the NopCommerce page

        Given I am on the index page
        #When I enter on the login page
        #When I enter <username> and <password> on "NopCommerce login" page
        #Then I should see the dashboard page <url>

        Examples:
            | username | password | url                                                                     |
            | Admin    | admin123 | https://admin-demo.nopcommerce.com/admin |


