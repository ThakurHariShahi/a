package com.qait.stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {

	
	WebDriver d;
	WebElement we, we2;
	String BaseUrl, title, s, mw, cw, token;
	int i;
	@Given("^I set up the driver$")
    public void i_set_up_the_driver() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
		d = new ChromeDriver();
    }
	@Given("^I open chrome and launch the gmail$")
	public void i_open_chrome_and_launch_the_gmail() throws Throwable {
		
		BaseUrl = "http://www.gmail.com";
		System.out.println(BaseUrl);
		d.get(BaseUrl);
	}

	@When("^I  enter the (.+) and (.+)$")
    public void i_enter_the_and(String username, String password) throws Throwable {
		we = d.findElement(By.cssSelector("div input.whsOnd[autocomplete=\"username\"][id=\"identifierId\"]"));
		we.sendKeys(username);
		we = d.findElement(By.cssSelector("span.CwaK9>span.RveJvd"));
		we.click();
		Thread.sleep(1000);
		we = d.findElement(By.cssSelector("div>input.whsOnd[type=\"password\"][autocomplete=\"current-password\"]"));
		we.sendKeys(password);
	}

	@When("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable {
		we = d.findElement(By.cssSelector("div.qhFLie span>span.RveJvd"));
		we.click();
	}
	
	@Then("^I validate gmail inbox page for (.+)$")
    public void i_validate_gmail_inbox_page_for(String username) throws Throwable {
        Thread.sleep(3000);
		title = d.getTitle();
        Assert.assertEquals(title.contains(username.concat("@gmail.com")),true,"My error Msg :- I am not in Gmail Inbox");
    }
	
	@Given("^I check the number of mail in the inbox$")
    public void i_check_the_number_of_mail_in_the_inbox() throws Throwable {
        we = d.findElement(By.xpath("(//span//a[@title=\"Inbox\"  and text()=\"Inbox\"]/following::div[@class=\"bsU\"])[1]"));
        i = Integer.parseInt(we.getText());
        
    }

    @When("^I click on the first mail$")
    public void i_click_on_the_first_mail() throws Throwable {
        we = d.findElement(By.cssSelector("tr.zA[id=\":2u\"]"));
        we.click();
    	throw new PendingException();
    }

    @Then("^I validate the inbox message no reduced$")
    public void i_validate_the_inbox_message_no_reduced() throws Throwable {
        throw new PendingException();
    }
	

}
