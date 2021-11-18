package com.amazon.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.amazon.resources.commonActions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	
	commonActions ca = new commonActions();
	
	public static WebDriver driver; 
	
	@Before
	public void beforeScenario() {
		
		System.out.println("Before Method");
		ca.launch("https://www.amazon.com/");

	}
	
	@After
	public void afterScenario() {
		
		System.out.println("After Method");
		driver.quit();

	}

}
