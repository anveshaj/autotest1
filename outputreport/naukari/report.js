$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProfileLogin.feature");
formatter.feature({
  "line": 1,
  "name": "The purpose of this feature is to validate the profile is getting updated when some fields are changed and saved.",
  "description": "\r\nAs a user,\r\nwhen i perofrm some change in my online profile and save it,\r\nThe changes made should be reflected and profile last updated should be made to today.",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario: this is to validate the login of the accoutn"
    },
    {
      "line": 8,
      "value": "#Given the user opnes browsetr and navigates to URL"
    },
    {
      "line": 9,
      "value": "#When the user enters the username and password"
    },
    {
      "line": 10,
      "value": "#And cliks the login button"
    },
    {
      "line": 11,
      "value": "#Then validate that the user is logged in"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#Scenario Outline: This is to validate the user is able to login sucessfully."
    },
    {
      "line": 15,
      "value": "#Given user opens the browser and navigates to specified URL"
    },
    {
      "line": 16,
      "value": "#When the user enters the username \u003cusername\u003e and password \u003cpassword\u003e"
    },
    {
      "line": 17,
      "value": "#And Clicks on login button"
    },
    {
      "line": 18,
      "value": "#Then vlidate that the user is logged-in."
    },
    {
      "line": 19,
      "value": "#And click on logout"
    },
    {
      "line": 20,
      "value": "#And Exit the browser."
    },
    {
      "line": 21,
      "value": "#Examples:"
    },
    {
      "line": 22,
      "value": "#| username | password |"
    },
    {
      "line": 23,
      "value": "#| \"chandu.siddhapuram@gmail.com\" | \"Chandu@555\" |"
    },
    {
      "line": 24,
      "value": "#| \"sudhaguttikonda28@gmail.com\" | \"Sudha2811*\" |"
    },
    {
      "line": 25,
      "value": "#| \"rushi.solleti@gmail.com\" | \"Gupta@1994012\" |"
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#"
    }
  ],
  "line": 28,
  "name": "this scenario is to validate that after updating the profile, the last updated feild is changed to \"today\".",
  "description": "",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "user opens the browser and navigates to specified URL",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user enters the username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Clicks on resumeheadline edit icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "updates the resume headline",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate that the userprofile last updated date is changed to today.",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Exit the browser.",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 38,
      "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;1"
    },
    {
      "cells": [
        "\"chandu.siddhapuram@gmail.com\"",
        "\"Chandu@55\""
      ],
      "line": 39,
      "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;2"
    },
    {
      "cells": [
        "\"sudhaguttikonda28@gmail.com\"",
        "\"Sudha2811*\""
      ],
      "line": 40,
      "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;3"
    },
    {
      "cells": [
        "\"rushi.solleti@gmail.com\"",
        "\"Gupta@1994012\""
      ],
      "line": 41,
      "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "this scenario is to validate that after updating the profile, the last updated feild is changed to \"today\".",
  "description": "",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "user opens the browser and navigates to specified URL",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user enters the username \"chandu.siddhapuram@gmail.com\" and password \"Chandu@55\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Clicks on resumeheadline edit icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "updates the resume headline",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate that the userprofile last updated date is changed to today.",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Exit the browser.",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_opens_the_browser_and_navigates_to_specified_URL()"
});
formatter.result({
  "duration": 8496215041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandu.siddhapuram@gmail.com",
      "offset": 30
    },
    {
      "val": "Chandu@55",
      "offset": 74
    }
  ],
  "location": "Login.the_user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3237115213,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_login_button()"
});
formatter.result({
  "duration": 49738,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_resumeheadline_edit_icon()"
});
formatter.result({
  "duration": 4913720628,
  "status": "passed"
});
formatter.match({
  "location": "Login.updates_the_resume_headline()"
});
formatter.result({
  "duration": 35132,
  "status": "passed"
});
formatter.match({
  "location": "Login.validate_that_the_userprofile_last_updated_date_is_changed_to_today()"
});
formatter.result({
  "duration": 58902222,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat naukariStepDef.Login.validate_that_the_userprofile_last_updated_date_is_changed_to_today(Login.java:117)\r\n\tat ✽.Then validate that the userprofile last updated date is changed to today.(ProfileLogin.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.exit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "this scenario is to validate that after updating the profile, the last updated feild is changed to \"today\".",
  "description": "",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "user opens the browser and navigates to specified URL",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user enters the username \"sudhaguttikonda28@gmail.com\" and password \"Sudha2811*\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Clicks on resumeheadline edit icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "updates the resume headline",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate that the userprofile last updated date is changed to today.",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Exit the browser.",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_opens_the_browser_and_navigates_to_specified_URL()"
});
formatter.result({
  "duration": 5280244834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhaguttikonda28@gmail.com",
      "offset": 30
    },
    {
      "val": "Sudha2811*",
      "offset": 73
    }
  ],
  "location": "Login.the_user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 4167746871,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_login_button()"
});
formatter.result({
  "duration": 56448,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_resumeheadline_edit_icon()"
});
formatter.result({
  "duration": 8705022704,
  "status": "passed"
});
formatter.match({
  "location": "Login.updates_the_resume_headline()"
});
formatter.result({
  "duration": 34737,
  "status": "passed"
});
formatter.match({
  "location": "Login.validate_that_the_userprofile_last_updated_date_is_changed_to_today()"
});
formatter.result({
  "duration": 47321752,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat naukariStepDef.Login.validate_that_the_userprofile_last_updated_date_is_changed_to_today(Login.java:117)\r\n\tat ✽.Then validate that the userprofile last updated date is changed to today.(ProfileLogin.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.exit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "this scenario is to validate that after updating the profile, the last updated feild is changed to \"today\".",
  "description": "",
  "id": "the-purpose-of-this-feature-is-to-validate-the-profile-is-getting-updated-when-some-fields-are-changed-and-saved.;this-scenario-is-to-validate-that-after-updating-the-profile,-the-last-updated-feild-is-changed-to-\"today\".;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "user opens the browser and navigates to specified URL",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user enters the username \"rushi.solleti@gmail.com\" and password \"Gupta@1994012\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Clicks on resumeheadline edit icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "updates the resume headline",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate that the userprofile last updated date is changed to today.",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Exit the browser.",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_opens_the_browser_and_navigates_to_specified_URL()"
});
formatter.result({
  "duration": 6509473547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rushi.solleti@gmail.com",
      "offset": 30
    },
    {
      "val": "Gupta@1994012",
      "offset": 69
    }
  ],
  "location": "Login.the_user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3066048978,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"usernameField\"]\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DIVYA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\chandu\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:60846}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0a34613b80323658b0c9c1ce64d95eb5\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"usernameField\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat naukariPageFactory.NaukariProfilePage.login(NaukariProfilePage.java:24)\r\n\tat naukariStepDef.Login.the_user_enters_the_username_and_password(Login.java:43)\r\n\tat ✽.When the user enters the username \"rushi.solleti@gmail.com\" and password \"Gupta@1994012\"(ProfileLogin.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.clicks_on_resumeheadline_edit_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.updates_the_resume_headline()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.validate_that_the_userprofile_last_updated_date_is_changed_to_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.exit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});