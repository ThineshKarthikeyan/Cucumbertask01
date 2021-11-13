package com.amazon.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobileSearchSteps {
	
	static WebDriver driver;
	static String mobileName1, mobileName2;
	
	@Given("user launches Amazon application")
	public void user_launches_Amazon_application() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
		driver.get("https://www.amazon.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		
	    
	}

	@When("user searching the mobile")
	public void user_searching_the_mobile() {
		WebElement searchBox = driver.findElement(By.xpath("(//input[@type='text'])"));
		searchBox.sendKeys("Samsung Mobiles",Keys.ENTER);
		WebElement mobileChosen = driver.findElement(By.xpath("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]"));
		mobileName1 = mobileChosen.getText();
		mobileChosen.click();
		
	    
	}

	@When("user click on Add to cart")
	public void user_click_on_Add_to_cart() {
		driver.findElement(By.id("add-to-cart-button")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	    
	}

	@Then("navigates into Add to cart and check the updated order")
	public void navigates_into_Add_to_cart_and_check_the_updated_order() {
		driver.findElement(By.xpath("(//span[@aria-hidden='true'])[1]")).click();
		WebElement addedMobile = driver.findElement(By.xpath("//span[@class='a-truncate-cut']"));
		mobileName2 = addedMobile.getText();
		if (mobileName1.equals(mobileName2)) {
			System.out.println("Passed");
			System.out.println("The Mobile name is "+ mobileName2);
			
		}
	    
	}


}
