Feature: petstore buy pet

    Scenario:  As a user, I want to buy a pet from the page

        Given I am on the "petstore" page
        When I enter on the "sing in" page
        When I enter <username> and <password> on "petstore login" page
        When I select the <category> category and choose the <petName> and add it to the cart
        When I choose the quantity <quantity> of the <petName> and proceed with the checkout and confirm my order
        Then I should see my order submited <url>

        Examples:
            | username | password | category | petName          | quantity | url                                                  |
            | admin179 | admin    | fish     | Large Angelfish  | 2        | https://petstore.octoperf.com/actions/Catalog.action |
            | user179  | password | dogs     | Golden Retriever | 1        | https://petstore.octoperf.com/actions/Catalog.action |

            #Scenario: As a user, I want to try to register in the page without filling the fields

            #Given I am on the "petstore" page
            #When I enter on the "sing in" page
            #When I enter on the "register" page
            #When I register with the following details
            #| username   | password   | firstName   | lastName   | email   | phone   | address1   | address2   | city   | state   | zip   | country   |
            #| <username> | <password> | <firstName> | <lastName> | <email> | <phone> | <address1> | <address2> | <city> | <state> | <zip> | <country> |
            #Then I should see a error message saying <message> from "petstore error" page

            #Examples:
            


