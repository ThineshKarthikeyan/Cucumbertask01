package com.amazon.resources;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class commonActions {
	
	protected static WebDriver driver;
	
	public void launch(String uRL) {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get(uRL);

	}
	
	public void insertText(WebElement ele, String value) {
		ele.sendKeys(value);

	}
	
	public void insertTextAndEnter(WebElement ele, String value) {
		ele.sendKeys(value,Keys.ENTER);

	}
	
	public void button(WebElement ele) {
		ele.click();
		
	}
}
