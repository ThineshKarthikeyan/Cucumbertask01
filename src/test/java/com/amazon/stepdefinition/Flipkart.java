package com.amazon.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Flipkart {
	
	@Given("User launches Flipkart application")
	public void user_launches_Flipkart_application() {
		Hooks.driver.get("https://www.flipkart.com/");
	   
	}

	@Given("user validate login")
	public void user_validate_login() {
		try {
			
			WebElement button = Hooks.driver.findElement(By.xpath("//button[text()='✕']"));
			button.isDisplayed();
			button.click();
			
		} catch (Exception e) {
			System.out.println("Pop up is not displayed");
		}
	   
	}

	@When("user search and choose mobiles")
	public void user_search_and_choose_mobiles() {
		Hooks.driver.findElement(By.name("q")).sendKeys("Mobiles",Keys.ENTER);
		WebElement element = Hooks.driver.findElement(By.xpath("(//div[@class='_4rR01T'])[1]"));
		element.click();
		String parentWindow = Hooks.driver.getWindowHandle();
		
		Set<String> allWindow = Hooks.driver.getWindowHandles();
			for (String a : allWindow) {
				if (!a.equals(parentWindow)) {
					Hooks.driver.switchTo().window(a);
				}
			}
	    
	}

	@Then("user take screenshot")
	public void user_take_screenshot() throws IOException {
		TakesScreenshot s = (TakesScreenshot)Hooks.driver;
		File source = s.getScreenshotAs(OutputType.FILE);
		String title1 = Hooks.driver.getTitle();
		File target = new File(".//target//report" + title1 + ".png");
		FileUtils.copyFile(source, target);
	    
	}

}
