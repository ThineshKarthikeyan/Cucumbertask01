$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature");
formatter.feature({
  "name": "Validating mobile purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
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
  "keyword": "Scenario Outline"
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.MobileSearchSteps.user_click_on_Add_to_cart(MobileSearchSteps.java:50)\r\n\tat ✽.user click on Add to cart(C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.Hooks.afterScenario(Hooks.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "keyword": "Scenario Outline"
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.MobileSearchSteps.user_click_on_Add_to_cart(MobileSearchSteps.java:50)\r\n\tat ✽.user click on Add to cart(C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.Hooks.afterScenario(Hooks.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "keyword": "Scenario Outline"
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.MobileSearchSteps.user_click_on_Add_to_cart(MobileSearchSteps.java:50)\r\n\tat ✽.user click on Add to cart(C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.Hooks.afterScenario(Hooks.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "keyword": "Scenario Outline"
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.MobileSearchSteps.user_click_on_Add_to_cart(MobileSearchSteps.java:50)\r\n\tat ✽.user click on Add to cart(C:/Users/Thinesh/eclipse-workspace/CucumberTask01/src/test/resources/Features/MobileSearch.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates into Add to cart and check the updated order",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSearchSteps.navigates_into_Add_to_cart_and_check_the_updated_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.amazon.stepdefinition.Hooks.afterScenario(Hooks.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});