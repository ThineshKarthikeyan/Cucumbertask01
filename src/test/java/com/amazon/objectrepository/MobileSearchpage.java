package com.amazon.objectrepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.amazon.resources.commonActions;

public class MobileSearchpage extends commonActions{
	
	public MobileSearchpage() {
		
		PageFactory.initElements(commonActions.driver, this);
	}
	
	@FindBy(xpath = "(//input[@type='text'])")
	private WebElement searchBox;
	
	@FindBy(xpath = "(//span[@class='a-size-medium a-color-base a-text-normal'])[1]")
	private WebElement mobileChosen;
	
	@FindBy(xpath = "//span[@class='a-truncate-cut']")
	private WebElement addedMobile;
	
	@FindBy(id = "add-to-cart-button")
	private WebElement addToCart;
	
	@FindBy(xpath = "(//span[@aria-hidden='true'])[1]")
	private WebElement addedMobileIntoTheCart;
	
	public WebElement getSearchBox() {
		return searchBox;
	}

	public WebElement getMobileChosen() {
		return mobileChosen;
	}

	public WebElement getAddedMobile() {
		return addedMobile;
	}

	public WebElement getAddToCart() {
		return addToCart;
	}
	
	public WebElement getaddedMobileIntoTheCart() {
		return addedMobileIntoTheCart;
	}

	

}
