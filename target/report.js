$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/Flipkart.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Flipkart Validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "Flipkart.user_launches_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate login",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkart.user_validate_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search and choose mobiles",
  "keyword": "When "
});
formatter.match({
  "location": "Flipkart.user_search_and_choose_mobiles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkart.user_take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature");
formatter.feature({
  "name": "Validating mobile purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user searching the mobile by using 1 dim list concept \"\u003cPhone Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phone Name"
      ]
    },
    {
      "cells": [
        "iPhone"
      ]
    },
    {
      "cells": [
        "Samsung"
      ]
    },
    {
      "cells": [
        "OnePlus"
      ]
    },
    {
      "cells": [
        "Nokia"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches Amazon application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSearchSteps.user_launches_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user searching the mobile by using 1 dim list concept \"iPhone\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSearchSteps.user_searching_the_mobile_by_using_dim_list_concept(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSearchSteps.user_click_on_Add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches Amazon application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSearchSteps.user_launches_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user searching the mobile by using 1 dim list concept \"Samsung\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSearchSteps.user_searching_the_mobile_by_using_dim_list_concept(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSearchSteps.user_click_on_Add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027a-truncate-cut\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4UQ254A\u0027, ip: \u0027192.168.225.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\Thinesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:56707}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 82149c094a14c1a312e6757aab12e6a8\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027a-truncate-cut\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.amazon.stepdefinition.MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order(MobileSearchSteps.java:51)\r\n\tat ✽.navigates into Add to cart and check the updated order(C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches Amazon application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSearchSteps.user_launches_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user searching the mobile by using 1 dim list concept \"OnePlus\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSearchSteps.user_searching_the_mobile_by_using_dim_list_concept(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSearchSteps.user_click_on_Add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches Amazon application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSearchSteps.user_launches_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user searching the mobile by using 1 dim list concept \"Nokia\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSearchSteps.user_searching_the_mobile_by_using_dim_list_concept(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSearchSteps.user_click_on_Add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});