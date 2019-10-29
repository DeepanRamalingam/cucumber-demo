$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserLogin.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Automation",
  "description": "",
  "id": "user-login-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": User login failure - test-1",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enters username with \u003cusername\u003e and password with \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "finds the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "user-login-automation;:-user-login-failure---test-1;;1"
    },
    {
      "cells": [
        "Admin",
        "admin234"
      ],
      "line": 12,
      "id": "user-login-automation;:-user-login-failure---test-1;;2"
    },
    {
      "cells": [
        "Deepan",
        "Deepan123"
      ],
      "line": 13,
      "id": "user-login-automation;:-user-login-failure---test-1;;3"
    },
    {
      "cells": [
        "stackuser",
        "user123"
      ],
      "line": 14,
      "id": "user-login-automation;:-user-login-failure---test-1;;4"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 15,
      "id": "user-login-automation;:-user-login-failure---test-1;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": ": User login failure - test-1",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enters username with Admin and password with admin234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "finds the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.navigate_to_login_page()"
});
formatter.result({
  "duration": 2674410375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    },
    {
      "val": "admin234",
      "offset": 45
    }
  ],
  "location": "stepDefinition.enters_username_password(String,String)"
});
formatter.result({
  "duration": 15084153006,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#txtUsername\"}\n  (Session info: chrome\u003d77.0.3865.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLR-STR-DEEPAN\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-64-generic\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /tmp/.com.google.Chrome.tdeGdW}, goog:chromeOptions: {debuggerAddress: localhost:43557}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: edc40116aab5f8d510a399d6c677bdb1\n*** Element info: {Using\u003did, value\u003dtxtUsername}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.stackroute.stepDefinitions.stepDefinition.enters_username_password(stepDefinition.java:56)\n\tat ✽.When enters username with Admin and password with admin234(UserLogin.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.display_error_msg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": ": User login failure - test-1",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enters username with Deepan and password with Deepan123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "finds the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.navigate_to_login_page()"
});
formatter.result({
  "duration": 1169409189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepan",
      "offset": 21
    },
    {
      "val": "Deepan123",
      "offset": 46
    }
  ],
  "location": "stepDefinition.enters_username_password(String,String)"
});
formatter.result({
  "duration": 13664324121,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dtxtUsername\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLR-STR-DEEPAN\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-64-generic\u0027, java.version: \u002711.0.4\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.stackroute.stepDefinitions.stepDefinition.enters_username_password(stepDefinition.java:56)\n\tat ✽.When enters username with Deepan and password with Deepan123(UserLogin.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.display_error_msg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": ": User login failure - test-1",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enters username with stackuser and password with user123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "finds the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.navigate_to_login_page()"
});
formatter.result({
  "duration": 1234794496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stackuser",
      "offset": 21
    },
    {
      "val": "user123",
      "offset": 49
    }
  ],
  "location": "stepDefinition.enters_username_password(String,String)"
});
formatter.result({
  "duration": 862823838,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dtxtUsername\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLR-STR-DEEPAN\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-64-generic\u0027, java.version: \u002711.0.4\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.stackroute.stepDefinitions.stepDefinition.enters_username_password(stepDefinition.java:56)\n\tat ✽.When enters username with stackuser and password with user123(UserLogin.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.display_error_msg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": ": User login failure - test-1",
  "description": "",
  "id": "user-login-automation;:-user-login-failure---test-1;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enters username with Admin and password with admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "finds the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.navigate_to_login_page()"
});
formatter.result({
  "duration": 1498017894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    },
    {
      "val": "admin123",
      "offset": 45
    }
  ],
  "location": "stepDefinition.enters_username_password(String,String)"
});
formatter.result({
  "duration": 3182432844,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dtxtUsername\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLR-STR-DEEPAN\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-64-generic\u0027, java.version: \u002711.0.4\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.stackroute.stepDefinitions.stepDefinition.enters_username_password(stepDefinition.java:56)\n\tat ✽.When enters username with Admin and password with admin123(UserLogin.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.display_error_msg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});