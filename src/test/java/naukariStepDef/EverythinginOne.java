package naukariStepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import naukariPageFactory.NaukariProfilePage;

public class EverythinginOne {
	NaukariProfilePage pagefact;
	WebDriver driver;

	@Given("^the user opnes browsetr and navigates to URL$")
	public void the_user_opnes_browsetr_and_navigates_to_URL() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebDriverManager.chromedriver().version("79").setup();
		ChromeOptions crmopt = new ChromeOptions();
		crmopt.addArguments("start-maximized");
		driver = new ChromeDriver(crmopt);
		pagefact = new NaukariProfilePage(driver);
		driver.get("https://www.naukri.com/mnjuser/profile?id=&altresid");
		System.out.println("this is given block");}

	@When("^the user enters the username and password$")
	public void the_user_enters_the_username_and_password() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("this is when block");
		//driver.findElement(pagefact.loginButton).click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		pagefact.login("chandu.siddhapuram@gmail.com", "Chandu@55");

	}

	@And("^cliks the login button$")
	public void cliks_the_login_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("this is and block");
		
		driver.findElement(pagefact.resumeheadline).click();
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement headlineclick = driver.findElement(pagefact.rsumeedit);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", headlineclick);
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

	@Then("^validate that the user is logged in$")
	public void validate_that_the_user_is_logged_in() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("this is then block");
		WebElement Mynaukari = 	driver.findElement(By.xpath("/html/body/div[1]/div/div/ul[2]/li[2]/a/div[2]"));
		Actions act = new Actions(driver);
		act.moveToElement(Mynaukari).build().perform();
//		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		Thread.sleep(3000);
		WebElement Logout = driver.findElement(By.xpath("/html/body/div[1]/div/div/ul[2]/li[2]/div/ul[2]/li[5]/a"));
		Logout.click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
System.out.println("licked on logout elment and logged out so exiting browser");
		
		driver.close();
		driver.quit();
	}
}


