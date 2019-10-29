package com.stackroute.stepDefinitions;


import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;



public class stepDefinition {
	
	WebDriver driver;
	WebElement username;
	WebElement password;
	WebElement submit;
	WebElement welcome = null;
	WebElement error = null;
	
	
	@Given("^user navigates to the login page$")
	public void navigate_to_login_page() throws PendingException  {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get("https://opensource-demo.orangehrmlive.com/");
		
		System.out.println("User navigates to login page");
		
	}
	
	@Given("^user registers for a new account$")
	public void user_registers(DataTable data) {
		List<List<String>> credentials = data.raw();
		System.out.println(credentials.get(0).get(0));
		System.out.println(credentials.get(0).get(1));
	}
	
	@When("^enters username with (.+) and password with (.+)$")
	public void enters_username_password(String uname, String pass) throws PendingException  {
		System.out.println("User enters username nad password");
		
		username = driver.findElement(By.id("txtUsername"));
		password = driver.findElement(By.id("txtPassword"));
		submit = driver.findElement(By.id("btnLogin"));
		username.sendKeys(uname);
		password.sendKeys(pass);
		submit.click();
		
	}
	
	@Then("^navigates to the dashboard page$")
	public void navigates_to_dashboard() throws PendingException {
		System.out.println("User directed to the dashboard page");
		welcome = driver.findElement(By.id("welcome"));
		assertTrue(welcome != null);
	}
	
	@Then("^finds the error message$")
	public void display_error_msg() throws PendingException  {
		
		System.out.println("User is restricted from navigating to the dashboard page");
		
		error = driver.findElement(By.id("spanMessage"));
		assertTrue(error != null);
	}
	
	@And("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}
	

    @Given("^user navigates to the registration page$")
    public void user_navigates_to_the_registration_page() throws Throwable {
      System.out.println("User navigated to the registration page");
    }

    @When("^user registers for a new account with the below details$")
    public void user_registers_for_a_new_account_with_the_below_details(DataTable userDetails) throws Throwable {
        
    	List<List<String>> details = userDetails.raw();
    	
    	for(int i=0;i<details.size();i++) {
    		
    		for(int j=0;j<details.get(i).size();j++) {
    			System.out.println(details.get(i).get(j));
    		}
    	}
    	
    }
	
	
}
