Feature: petstore Sign In

    Scenario: As a user, I want to try to register in the page without filling the fields

        Given I am on the "petstore" page
        When I enter on the "sing" in page
        When I enter on the "register" page
        When I fill the form for singin up
        Then I should see a error message saying <message>

        Examples:
            | username            | password | message     |
            | admin@yourstore.com | admin    |  Internal Server Error |

    Scenario: As a user, I want to register in the page

        Given I am on the "petstore" page
        When I enter on the "sing" in page
        When I enter on the "register" page
        When I fill the form for singin up
        Then I should see the index page <url>

        Examples:
            | username | password | url                                                                     |
            | Admin    | admin123 | https://petstore.octoperf.com/actions/Catalog.action |


