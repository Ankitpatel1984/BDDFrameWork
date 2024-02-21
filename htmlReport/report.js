$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Jalpankit/IdeaProjects/BDDFrameWork/src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter Url",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "User click on Register Link",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinitions.user_able_to_open_browser()"
});
formatter.result({
  "duration": 26961291000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.enter_Url()"
});
formatter.result({
  "duration": 3509489200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 4273532601,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "NopCommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User enter firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enter Email",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enter Company name",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Confirm password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinitions.user_enter_firstname_and_lastname()"
});
formatter.result({
  "duration": 1582190500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_enter_Email()"
});
formatter.result({
  "duration": 160761701,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_enter_Company_name()"
});
formatter.result({
  "duration": 79132500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_enter_password()"
});
formatter.result({
  "duration": 120127100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_Confirm_password()"
});
formatter.result({
  "duration": 131336201,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_click_on_register_button()"
});
formatter.result({
  "duration": 1119523201,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinitions.user_close_the_browser()"
});
formatter.result({
  "duration": 5702178600,
  "status": "passed"
});
});