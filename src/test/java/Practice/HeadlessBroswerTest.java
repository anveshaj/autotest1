package Practice;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class HeadlessBroswerTest {
 @Test
 public void test1() {
	 WebDriverManager.chromedriver().setup();
	 
	 ChromeOptions options = new ChromeOptions();
	 options.addArguments("--headless");
	 options.addArguments("start-maximized");
	 WebDriver driver = new ChromeDriver(options);

	 driver.get("https://google.com");
	 System.out.println(driver.getTitle());

	 driver.findElement(By.name("q")).sendKeys("emo ra babau");
	 driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	 driver.findElement(By.name("q")).sendKeys(Keys.RETURN);
	 
	 System.out.println(driver.getTitle());
	 
	 driver.close();driver.quit();
 }


}