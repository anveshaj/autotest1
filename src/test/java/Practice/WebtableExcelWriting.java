package Practice;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class WebtableExcelWriting {
	static WebDriver dd = null;
	public static void main(String[] args) throws Exception {
		WebDriverManager.chromedriver().version("81").setup();
		dd = new ChromeDriver();
		
		//excel file rtealted
		File src=new File("C:\\Users\\chandu\\Desktop\\Practice.xlsx");
		FileInputStream fis=new FileInputStream(src);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet Sheet1=wb.createSheet("WebTable Data");
		
		dd.get("https://www.w3schools.com/html/html_tables.asp");
		WebElement table = dd.findElement(By.id("customers"));
		List<WebElement> rows = table.findElements(By.tagName("tr"));
		
		loop1: for(int i=0;i<rows.size();i++) {
			Row r = Sheet1.createRow(i);
			if(i==0) {
				List<WebElement> tabelheaders = rows.get(i).findElements(By.tagName("th"));
				for(int k =0;k < tabelheaders.size();k++) {
					Cell c = r.createCell(k);
					c.setCellValue(tabelheaders.get(k).getText());
				}
				continue loop1;
			}
			List<WebElement> datacells = rows.get(i).findElements(By.tagName("td"));
			for(int j=0;j<datacells.size();j++) {
				Cell c = r.createCell(j);
				c.setCellValue(datacells.get(j).getText());
			}
		}
		FileOutputStream fos = new FileOutputStream(src);
		wb.write(fos);
		wb.close();
		fos.close();
		
		dd.close();
		dd.quit();
		System.out.println("Writing table data to excel completed sucesfully");
	}

}
