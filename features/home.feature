Feature: Home page function

  Scenario Outline: As a user, I can click All menu at home page

    Given I am on the home page
    When I click <menu> button
    Then I should see  <message>

    Examples:
      | menu    | message  |
      | App     | Alarm    |
      # | Content | Packages |

