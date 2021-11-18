package com.amazon.objectrepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.amazon.resources.commonActions;

public class FlipkartObjRes extends commonActions{
	
	public FlipkartObjRes() {
		
		PageFactory.initElements(commonActions.driver, this);
	}
	
	@FindBy(xpath = "//button[text()='✕']")
	private WebElement popUpClose;
	
	@FindBy(xpath = "(//div[@class='_4rR01T'])[1]")
	private WebElement chosenMobile;


	public WebElement getPopUpClose() {
		return popUpClose;
	}

	public WebElement getChosenMobile() {
		return chosenMobile;
	}

	
}


