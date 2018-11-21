Feature: Open Cart login Testing
  I should be able to go to a website
  and check its search functionality

  Scenario: Google search for open cart app
    When I launch open cart application
    And I should see "OpenCart" title
    And I should click on login
    And I enter email
    And I enter password
    And I click on login confirm
    Then I verify error message
