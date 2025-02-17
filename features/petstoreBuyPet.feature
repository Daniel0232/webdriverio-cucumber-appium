Feature: petstore buy pet

    Scenario: As a not logged user, I want to buy a pet from the page

        Given I am on the "petstore" page
        When I enter on the "sing in" page
        When I enter <username> and <password> on "petstore login" page
        When I select the <category> category and choose the <petName> and add it to the cart
        When I choose the quantity <quantity> of the <petName> and proceed with the checkout and confirm my order
        Then I should see my order submited <url>

        Examples:
            | username | password | category | petName         | quantity | url                                                                         |
            | admin179 | admin    | fish     | Large Angelfish | 2        | https://petstore.octoperf.com/actions/Order.action?newOrder=&confirmed=true |


    Scenario: As an already logged user, I want to buy a pet from the page

        Given I am on the "petstore" page
        When I select the <category> category and choose the <petName> and add it to the cart
        When I choose the quantity <quantity> of the <petName> and proceed with the checkout and confirm my order
        Then I should see my order submited <url>

        Examples:
            | category | petName          | quantity | url                                                                         |
            | dogs     | Golden Retriever | 1        | https://petstore.octoperf.com/actions/Order.action?newOrder=&confirmed=true |



