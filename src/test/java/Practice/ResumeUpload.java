package Practice;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;
import naukariPageFactory.NaukariProfilePage;

public class ResumeUpload {
	WebDriver driver=null;
	NaukariProfilePage npp;
	@Before
	public void setup() {
		WebDriverManager.chromedriver().setup();
		ChromeOptions opt = new ChromeOptions();
		opt.addArguments("start-maximized");
		opt.addArguments("--incognito");
		driver = new ChromeDriver(opt);
		npp = new NaukariProfilePage(driver);
	}
	@Test
	public void test_01() throws IOException, InterruptedException{
		driver.get("https://www.naukri.com/mnjuser/profile?id=&altresid");

		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		npp.login("chandu.siddhapuram@gmail.com", "Chandu@55");
//		npp.login("sudhaguttikonda28@gmail.com", "Sudha2811*");
		Thread.sleep(5000);

		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/span/div/div/div/div/div/div[2]/div[2]/div/div/ul/li[2]/a")).click();
		WebElement updateresume =  driver.findElement(npp.UpdateResume);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", updateresume);
		Thread.sleep(1000);

		Runtime.getRuntime().exec("C:\\Users\\chandu\\Desktop\\naukari\\AutomationJobs\\src\\test\\resources\\AutoITfiles\\Chandu_.exe");
		Thread.sleep(15000);
		System.out.println("Resume last updated on :"+driver.findElement(By.xpath("//*[@id=\"lazyAttachCV\"]/div/div/div[2]/div[1]/div[1]/div[1]/div/span")).getText());
		Actions act = new Actions(driver);
		act.moveToElement(driver.findElement(npp.Mynaukari)).build().perform();
		Thread.sleep(1500);
		driver.findElement(npp.Logout).click();
	}
	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}
}
