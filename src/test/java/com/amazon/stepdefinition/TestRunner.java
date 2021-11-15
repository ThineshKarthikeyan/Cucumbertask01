package com.amazon.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Thinesh\\eclipse-workspace\\CucumberTask01\\src\\test\\resources\\Features",
				     glue = "com.amazon.stepdefinition",
				     plugin = "html:target",
				     monochrome = true,
				     dryRun = false)

public class TestRunner {

}
