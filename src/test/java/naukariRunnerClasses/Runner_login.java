package naukariRunnerClasses;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/featureFile",
		glue = {"naukariStepDef"},
		//plugin = {"usage"},
		monochrome = true
		
//		dryRun = false,
//		format = {"pretty","html:outputreport/naukari", 
//				"json:outputreport/naukari/outputjson.json", 
//				"junit:outputreport/naukari/outputxml.xml"}
		)
public class Runner_login {
//	550193603

}
