#Author: baron4995@outlook.com
#Date: February 14th, 2023
#Description: this feature is to validate the information when user wants to create a new client
#keyword: schedule, meeting, validaion

Feature: feature to register new clients

    Scenario: user enters all the information required to create a new client
    Given user visits 'http://localhost:4200/client'
    When user fills out all the required information
    And user enters valid information for all of the fields
    And user clicks on the submit button
    Then the user should succesfully create a new client