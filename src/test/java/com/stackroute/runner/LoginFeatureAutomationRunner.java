package com.stackroute.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/stackroute/features",
				glue = {"com.stackroute.stepDefinitions"},
				plugin = {"pretty","html:target/cucumber"})
public class LoginFeatureAutomationRunner {

}
