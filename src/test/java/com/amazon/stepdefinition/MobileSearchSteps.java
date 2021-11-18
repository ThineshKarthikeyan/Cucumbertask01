package com.amazon.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.amazon.objectrepository.MobileSearchpage;
import com.amazon.resources.commonActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobileSearchSteps extends commonActions{
	
	commonActions ca = new commonActions();
	MobileSearchpage ms = new MobileSearchpage();
	
	static WebDriver driver;
	static String mobileName1, mobileName2, input;
	
	@Given("user launches Amazon application")
	public void user_launches_Amazon_application() {
		System.out.println("");
			    
	}

	@When("user searching the mobile")
	public void user_searching_the_mobile() {
		WebElement searchBox = ms.getSearchBox();
		ca.insertTextAndEnter(searchBox, "Samsung Mobiles");
		WebElement mobileChosen = ms.getMobileChosen();
		mobileName1 = mobileChosen.getText();
		ca.button(mobileChosen);
		
	    
	}

	@When("user click on Add to cart")
	public void user_click_on_Add_to_cart() {
		WebElement addToCartButton = ms.getAddToCart();
		ca.button(addToCartButton);
			
	    
	}

	@Then("navigates into Add to cart and check the updated order")
	public void navigates_into_Add_to_cart_and_check_the_updated_order() {
		WebElement mobile = ms.getaddedMobileIntoTheCart();
		ca.button(mobile);
		WebElement addedMobile = ms.getAddedMobile();
		mobileName2 = addedMobile.getText();
		if (mobileName1.equals(mobileName2)) {
			System.out.println("Passed");
			System.out.println("The Mobile name is "+ mobileName2);
			
		}
	    
	}
	
	@When("user searching the mobile by using {int} dim list concept")
	public void user_searching_the_mobile_by_using_dim_list_concept(Integer int1,DataTable dataTable) {
		
		 List<String> data = dataTable.asList();
		 	WebElement searchBox = ms.getSearchBox();
			ca.insertTextAndEnter(searchBox, data.get(0));
			WebElement mobileChosen = ms.getMobileChosen();
			mobileName1 = mobileChosen.getText();
			ca.button(mobileChosen);
		
	   
	}
	
	@When("user searching the mobile by using {int} dim list concept {string}")
	public void user_searching_the_mobile_by_using_dim_list_concept(Integer int1, String phoneName) {
		WebElement searchBox = ms.getSearchBox();
		input = phoneName;
		ca.insertTextAndEnter(searchBox, phoneName);
		WebElement mobileChosen = ms.getMobileChosen();
		mobileName1 = mobileChosen.getText();
		ca.button(mobileChosen);
	}


}
