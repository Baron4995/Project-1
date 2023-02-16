#Author: baron4995@outlook.com
#Date: February 14th, 2023
#Description: this feature is to validate the information when user wants to schedule a meeting
#keyword: schedule, meeting, validaion

Feature: feature to validate the infromation to schedule an appointment

    Scenario: validate the inforamtion when user is filling the form
    Given user visits "http://localhost:4200/schedule"
    When the user enters the information in the form
    And all the information is valid
    And the user clicks on the submit button
    Then the user will succesfully schedule and appointment