Feature: Orange HRM login

    Scenario: As a user, I can log into the secure area

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a flash message saying <message>

        Examples:
            | username | password | message                        |
            | Admin    | admin123 | You logged into a secure area! |
            | Javier   | 123456   | Invalid credentials            |
