package com.amazon.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobileSearchSteps {
	
	static WebDriver driver;
	static String mobileName1, mobileName2, input;
	
	@Given("user launches Amazon application")
	public void user_launches_Amazon_application() {
		Hooks.driver.get("https://www.amazon.com/");
			    
	}

	@When("user searching the mobile")
	public void user_searching_the_mobile() {
		WebElement searchBox = Hooks.driver.findElement(By.xpath("(//input[@type='text'])"));
		searchBox.sendKeys("Samsung Mobiles",Keys.ENTER);
		WebElement mobileChosen = Hooks.driver.findElement(By.xpath("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]"));
		mobileName1 = mobileChosen.getText();
		mobileChosen.click();
		
	    
	}

	@When("user click on Add to cart")
	public void user_click_on_Add_to_cart() {
		Hooks.driver.findElement(By.id("add-to-cart-button")).click();
		Hooks.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	    
	}

	@Then("navigates into Add to cart and check the updated order")
	public void navigates_into_Add_to_cart_and_check_the_updated_order() {
		Hooks.driver.findElement(By.xpath("(//span[@aria-hidden='true'])[1]")).click();
		WebElement addedMobile = Hooks.driver.findElement(By.xpath("//span[@class='a-truncate-cut']"));
		mobileName2 = addedMobile.getText();
		if (mobileName1.equals(mobileName2)) {
			System.out.println("Passed");
			System.out.println("The Mobile name is "+ mobileName2);
			
		}
	    
	}
	
	@When("user searching the mobile by using {int} dim list concept")
	public void user_searching_the_mobile_by_using_dim_list_concept(Integer int1,DataTable dataTable) {
		
		 List<String> data = dataTable.asList();
		 	WebElement searchBox = Hooks.driver.findElement(By.xpath("(//input[@type='text'])"));
			searchBox.sendKeys(data.get(0),Keys.ENTER);
			WebElement mobileChosen = Hooks.driver.findElement(By.xpath("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]"));
			mobileName1 = mobileChosen.getText();
			mobileChosen.click();
		
	   
	}
	
	@When("user searching the mobile by using {int} dim list concept {string}")
	public void user_searching_the_mobile_by_using_dim_list_concept(Integer int1, String phoneName) {
		WebElement searchBox = Hooks.driver.findElement(By.xpath("(//input[@type='text'])"));
		input = phoneName;
		searchBox.sendKeys(input,Keys.ENTER);
		WebElement mobileChosen = Hooks.driver.findElement(By.xpath("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]"));
		mobileName1 = mobileChosen.getText();
		mobileChosen.click();
	}


}
