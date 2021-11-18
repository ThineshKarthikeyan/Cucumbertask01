package com.amazon.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.amazon.objectrepository.FlipkartObjRes;
import com.amazon.resources.commonActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Flipkart extends commonActions{
	
	commonActions ca = new commonActions();
	FlipkartObjRes fk = new FlipkartObjRes();
	
	@Given("User launches Flipkart application")
	public void user_launches_Flipkart_application() {
		System.out.println("");
	   
	}

	@Given("user validate login")
	public void user_validate_login() {
		try {
			
			WebElement button = fk.getPopUpClose();
			button.isDisplayed();
			ca.button(button);
			
		} catch (Exception e) {
			System.out.println("Pop up is not displayed");
		}
	   
	}

	@When("user search and choose mobiles")
	public void user_search_and_choose_mobiles() {
		WebElement searchBox = driver.findElement(By.name("q"));
		ca.insertTextAndEnter(searchBox, "Mobiles");
		WebElement element = fk.getChosenMobile();
		ca.button(element);
		String parentWindow = driver.getWindowHandle();
		
		Set<String> allWindow = driver.getWindowHandles();
			for (String a : allWindow) {
				if (!a.equals(parentWindow)) {
					driver.switchTo().window(a);
				}
			}
	    
	}

	@Then("user take screenshot")
	public void user_take_screenshot() throws IOException {
		TakesScreenshot s = (TakesScreenshot)Hooks.driver;
		File source = s.getScreenshotAs(OutputType.FILE);
		String title1 = driver.getTitle();
		File target = new File(".//target//report" + title1 + ".png");
		FileUtils.copyFile(source, target);
	    
	}

}
