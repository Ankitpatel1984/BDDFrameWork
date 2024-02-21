Feature: NopCommerce Register
  Background:
    Given User able to open browser
    And Enter Url
    Then User click on Register Link



    Scenario: NopCommerce Valid Register Test

      Then User enter firstname and lastname

      Then User enter Email
      Then User enter Company name
      Then User enter password
      Then User Confirm password
      Then User click on register button
      Then User close the browser