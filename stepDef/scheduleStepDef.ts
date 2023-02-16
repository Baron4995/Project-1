const { Given, When, And, Then } = require('@cucumber/cucumber');
import {expect} from 'chai';
// import {Given, When, Then} from '@cucumber/cucumber';

Given("user visits {string}", function(){
    return console.log("step 1");
})

When("the user enters the information in the form", function(){
    return console.log("step 2");
})

And("all the information is valid", function(){
    return console.log("step 3");
})

And("the user clicks on the submit button", function(){
    return console.log("part 4");
})

Then("the user will succesfully schedule and appointment", function(){
    return console.log("part 5");
})