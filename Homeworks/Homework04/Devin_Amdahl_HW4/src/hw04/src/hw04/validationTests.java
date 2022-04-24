package hw04;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class validationTests {

	static WebDriver driver;

	// Set Selenium driver path.
	static String pathChromeDriver = "/Users/devin/Desktop/personalWorkspace/seleniumWebDriver/chromedriver";
	// Set path for HTML file / validation page.
	static String pathValidationPage = "file:///Users/devin/Desktop/SCHOOL/SPRING22/SE319/Homeworks/Homework04/HW4-UITesting-Files/task1/validation.html";

	// ID value for the user's first name.
	String txtFirstName = "txtFirstName";
	// ID value for the user's last name.
	String txtLastName = "txtLastName";
	// ID value for the user's gender.
	String selectGender = "genderSelect";
	// ID value for the user's state of residence.
	String selectState = "stateSelect";
	// ID value for the user's email address.
	String txtEmail = "txtEmail";
	// ID value for the user's phone number.
	String txtPhone = "txtPhone";
	// ID value for the user's city and abbreviated state.
	String txtAddress = "txtAddress";
	// ID value for the validation page's 'validate' button.
	String btnValidate = "btnValidate";
	// ID value for the validation page's validation result paragraph.
	String finalResult = "FinalResult";

	@BeforeClass
	public static void openBrowser()
	{
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@AfterClass
	public static void closeBrowser() 
	{
		driver.quit();
	}

	@Test
	public void validationSuccessTest() throws InterruptedException 
	{
		// Get the path of the validation page.
		driver.get(pathValidationPage);
		// Maximize the window once found.
		driver.manage().window().maximize();
		
		// Set desirable input values based on the specified information in the homework document.
		driver.findElement(By.id(txtFirstName)).sendKeys("Jason");
		driver.findElement(By.id(txtLastName)).sendKeys("Mamoa");
		
		// TODO talk about issues that arised here from trying to access this using above methods
		Select genderSelect = new Select(driver.findElement(By.id(selectGender)));
		genderSelect.selectByValue("male");
		Select stateSelect = new Select(driver.findElement(By.id(selectState)));
		stateSelect.selectByValue("iowa");
		
		driver.findElement(By.id(txtEmail)).sendKeys("jason@gmail.com");
		driver.findElement(By.id(txtPhone)).sendKeys("5157043322");
		driver.findElement(By.id(txtAddress)).sendKeys("Ames,IA");
		// Wait to ensure all information is entered prior to clicking validate.
		Thread.sleep(1000);
		
		// Click the validate button.
		driver.findElement(By.id(btnValidate)).click();
		// Acquire the value of our result string.
		String strMessage = driver.findElement(By.id(finalResult)).getText();
		// Check the value of our result string.
		assertEquals("OK", strMessage);
	}

	@Test
	public void validationFailureTest() throws InterruptedException 
	{
		// Get the path of the validation page.
		driver.get(pathValidationPage);
		// Maximize the window once found.
		driver.manage().window().maximize();
		
		// Set desirable input values based on the specified information in the homework document.
		driver.findElement(By.id(txtFirstName)).sendKeys("Jason");
		driver.findElement(By.id(txtLastName)).sendKeys("Mamoa");

		// TODO talk about issues that arised here from trying to access this using above methods
		Select genderSelect = new Select(driver.findElement(By.id(selectGender)));
		genderSelect.selectByValue("male");
		Select stateSelect = new Select(driver.findElement(By.id(selectState)));
		stateSelect.selectByValue("iowa");
		
		driver.findElement(By.id(txtEmail)).sendKeys("jason@gmail.com");
		// Purposefully withhold Jason's phone number.
		driver.findElement(By.id(txtAddress)).sendKeys("Ames,IA");
		// Wait to ensure all information is entered prior to clicking validate.
		Thread.sleep(1000);
		
		// Click the validate button.
		driver.findElement(By.id(btnValidate)).click();
		// Acquire the value of our result string.
		String strMessage = driver.findElement(By.id(finalResult)).getText();
		// Check the value of our result string.
		assertEquals("Error", strMessage);
	}

}
