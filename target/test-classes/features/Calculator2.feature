Feature: This feature will  test the calculator functionality for multiple data

  Scenario Outline: This scenario will test addition of two numbers with different data
    Given I have two numbers <num1> and <num2>
    When I add those two numbers
    Then I should get the result as <result>

    Examples: 
      | num1 | num2 | result |
      |   12 |   21 |     33 |
      |   30 |   21 |     51 |
      |   40 |   11 |     51 |
      |   32 |   22 |     54 |
