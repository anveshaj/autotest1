package naukariStepDef;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import naukariPageFactory.NaukariProfilePage;

public class Login {
	 WebDriver driver= null;
	static WebDriverWait wait;
	NaukariProfilePage npp;
	static String email;
	
	@Given("^user opens the browser and navigates to specified URL$")
	public void user_opens_the_browser_and_navigates_to_specified_URL() throws Throwable {
//	  WebDriverManager.chromedriver().version("81").setup();
	  WebDriverManager.chromedriver().setup();
	  
	  ChromeOptions opt = new ChromeOptions();
//	  opt.addArguments("--window-size=1920,1280");
//	  opt.addArguments("--headless");
	  opt.addArguments("start-maximized");
	  opt.addArguments("--incognito");
	
	  driver = new ChromeDriver(opt);
	  wait = new WebDriverWait(driver, 30);
	  driver.get("https://www.naukri.com/mnjuser/profile?id=&altresid");
	}

	@When("^the user enters the username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void the_user_enters_the_username_and_password(String arg1, String arg2) throws Throwable {
	    npp = new NaukariProfilePage(driver);
	    email = arg1;
	    driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	    npp.login(arg1, arg2);
	}

	@And("^Clicks on login button$")
	public void clicks_on_login_button() throws Throwable {
	}

	@Then("^vlidate that the user is logged-in\\.$")
	public void vlidate_that_the_user_is_logged_in() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10,	TimeUnit.SECONDS);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(npp.displayedemail)));
	   Assert.assertTrue(email.equalsIgnoreCase(driver.findElement(npp.displayedemail).getText()));
	   //driver.close();
	   
	}

@And("^click on logout$")
public void click_on_logout() throws Throwable {
    Actions act = new Actions(driver);
    act.moveToElement(driver.findElement(npp.Mynaukari)).build().perform();
    Thread.sleep(1500);
    driver.findElement(npp.Logout).click();
    
}

@And("^Exit the browser\\.$")
public void exit_the_browser() throws Throwable {
//	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	Thread.sleep(1500);
	//System.out.println(driver.getCurrentUrl().toString());
    Assert.assertTrue(driver.getCurrentUrl().toString().equalsIgnoreCase("https://www.naukri.com/"));

    driver.close();
    driver.quit();
}
@And("^Clicks on resumeheadline edit icon$")
public void clicks_on_resumeheadline_edit_icon() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	wait.until(ExpectedConditions.visibilityOf(driver.findElement(npp.resumeheadline)));
	driver.findElement(npp.resumeheadline).click();
	WebElement editicon = driver.findElement(npp.rsumeedit);
	
	JavascriptExecutor js = (JavascriptExecutor) driver;
	js.executeScript("arguments[0].click();", editicon);
	
	WebElement textarea = driver.findElement(By.xpath("//*[@id=\"resumeHeadlineTxt\"]"));
	WebElement textareasave = driver.findElement(By.xpath("/html/body/div[5]/div[5]/div[2]/form/div[3]/div/button"));
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	
	String healdinetext = textarea.getText();
	System.out.println("Existing text : "+ textarea.getText());
	textarea.clear();
	if(healdinetext.endsWith(".")) {
		textarea.sendKeys(healdinetext.substring(0, healdinetext.length()-1));
		js.executeScript("arguments[0].click();", textareasave);
		System.out.println("Updated text : "+ healdinetext.substring(0, healdinetext.length()-1));
	}
	else {
		textarea.sendKeys(healdinetext+".");
		js.executeScript("arguments[0].click();", textareasave);
		System.out.println("Updated text : "+healdinetext+".");
	}



}

@And("^updates the resume headline$")
public void updates_the_resume__headline() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
}

@Then("^validate that the userprofile last updated date is changed to today\\.$")
public void validate_that_the_userprofile_last_updated_date_is_changed_to_today() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
//	wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//*[@id=\\\"root\\\"]/div/div[1]/span/div/div/div/div/div/div[2]/div[1]/div[1]/div/span[2]"))));
	Thread.sleep(1000);
	String strStatus =driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div/div/div[2]/div[1]/div[1]/div/span[2]")).getText().toString();
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	Assert.assertTrue(strStatus.equals("today"));
}




}
