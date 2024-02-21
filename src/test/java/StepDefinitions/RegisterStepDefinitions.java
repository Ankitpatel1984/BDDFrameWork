package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class RegisterStepDefinitions {
    WebDriver driver;
    @Given("^User able to open browser$")
    public void user_able_to_open_browser()  {
        WebDriverManager.firefoxdriver().setup();
        driver = new FirefoxDriver();
        driver.manage().window().maximize();

    }

    @Given("^Enter Url$")
    public void enter_Url()  {
        driver.get("https://demo.nopcommerce.com/");

    }

    @Then("^User click on Register Link$")
    public void user_click_on_Register_Link()  {
        driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();
    }
    @Then("^User enter firstname and lastname$")
    public void user_enter_firstname_and_lastname() {
        driver.findElement(By.id("FirstName")).sendKeys("Ankit");
        driver.findElement(By.id("LastName")).sendKeys("Patel");

    }


    @Then("^User enter Email$")
    public void user_enter_Email() {
        driver.findElement(By.id("Email")).sendKeys("Tester123@gmail.com");

    }

    @Then("^User enter Company name$")
    public void user_enter_Company_name() {
        driver.findElement(By.id("Company")).sendKeys("abc");

    }

    @Then("^User enter password$")
    public void user_enter_password(){
        driver.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys("Test123");


    }

    @Then("^User Confirm password$")
    public void user_Confirm_password()  {
        driver.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys("Test123");

    }

    @Then("^User click on register button$")
    public void user_click_on_register_button() {
        driver.findElement(By.id("register-button")).click();


    }
    @Then("^User close the browser$")
    public void user_close_the_browser()  {
      driver.quit();
    }

}
