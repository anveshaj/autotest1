package Practice;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class WebTables {
	static WebDriver dd = null;

	public static void main(String[] args) {
		WebDriverManager.chromedriver().version("81").setup();
		dd = new ChromeDriver();

		dd.get("https://www.w3schools.com/html/html_tables.asp");
		WebElement table = dd.findElement(By.id("customers"));
		List<WebElement> rows = table.findElements(By.tagName("tr"));

		loop1: for(int i=0;i<rows.size();i++) {
			if(i==0) {
				List<WebElement> tabelheaders = rows.get(i).findElements(By.tagName("th"));
				for(int k =0;k < tabelheaders.size();k++) {
					System.out.println(tabelheaders.get(k).getText());
				}
				continue loop1;
			}
			List<WebElement> datacells = rows.get(i).findElements(By.tagName("td"));
			for(int j=0;j<datacells.size();j++) { 
				System.out.println(datacells.get(j).getText());
			}
		}

		/*
		 * for(WebElement e :rows) { List<WebElement> datacells
		 * =e.findElements(By.tagName("td")); for(WebElement k:datacells) {
		 * System.out.println(k.getText()); } }
		 */

		dd.close();
		dd.quit();

	}

}
