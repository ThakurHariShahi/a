$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/gmail.feature");
formatter.feature({
  "line": 2,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verifying the login page",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verifying-the-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open chrome and launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I  enter the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate gmail inbox page for \u003cusername\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verifying-the-login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "reset-functionality-on-login-page-of-application;verifying-the-login-page;;1"
    },
    {
      "cells": [
        "thakurharishahi",
        "HARIgmail275275"
      ],
      "line": 15,
      "id": "reset-functionality-on-login-page-of-application;verifying-the-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver()"
});
formatter.result({
  "duration": 6482934832,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verifying the login page",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verifying-the-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open chrome and launch the gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I  enter the thakurharishahi and HARIgmail275275",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate gmail inbox page for thakurharishahi",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_open_chrome_and_launch_the_gmail()"
});
formatter.result({
  "duration": 2341143816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thakurharishahi",
      "offset": 13
    },
    {
      "val": "HARIgmail275275",
      "offset": 33
    }
  ],
  "location": "StepDef.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 1790319274,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 163562679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thakurharishahi",
      "offset": 32
    }
  ],
  "location": "StepDef.i_validate_gmail_inbox_page_for(String)"
});
formatter.result({
  "duration": 8078459271,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver()"
});
formatter.result({
  "duration": 4512510135,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verifying the inbox",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verifying-the-inbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Inbox"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I check the number of mail in the inbox",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on the first mail",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I validate the inbox message no reduced",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_check_the_number_of_mail_in_the_inbox()"
});
formatter.result({
  "duration": 29436596,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//span//a[@title\u003d\"Inbox\"  and text()\u003d\"Inbox\"]/following::div[@class\u003d\"bsU\"])[1]\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 27 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027ASDP1498PO01976\u0027, ip: \u002710.0.9.142\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49797}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}), userDataDir\u003dC:\\Users\\HARISH~1\\AppData\\Local\\Temp\\scoped_dir18360_862803892}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.132, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 37e293cfddabe604d34ad3b785752fba\n*** Element info: {Using\u003dxpath, value\u003d(//span//a[@title\u003d\"Inbox\"  and text()\u003d\"Inbox\"]/following::div[@class\u003d\"bsU\"])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.qait.stepDef.StepDef.i_check_the_number_of_mail_in_the_inbox(StepDef.java:61)\r\n\tat ✽.Given I check the number of mail in the inbox(src/test/resources/Features/gmail.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_first_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_validate_the_inbox_message_no_reduced()"
});
formatter.result({
  "status": "skipped"
});
});