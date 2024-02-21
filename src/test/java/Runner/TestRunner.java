package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.runtime.junit.FeatureRunner;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\Jalpankit\\IdeaProjects\\BDDFrameWork\\src\\test\\resources\\Features\\Register.feature",
        glue = {"StepDefinitions"},
        format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"},
        dryRun = false


)
public class TestRunner {

}
