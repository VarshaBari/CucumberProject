package stepdefs;


import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorStepDefs {
	
	
	int num1;
	int num2;
	int actresult;
	
	@Given("I have two numbers {int} and {int}")
	public void i_have_two_numbers_and(Integer a, Integer b) {
	    // Write code here that turns the phrase above into concrete actions
		num1=a;
		num2=b;
	    
	}

	@When("I add those two numbers")
	public void i_add_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
		actresult=num1+num2;
	}

	@Then("I should get the result as {int}")
	public void i_should_get_the_result_as(int expResult) {
	    // Write code here that turns the phrase above into concrete actions
	   
		Assert.assertEquals(expResult, actresult);
	}

	

	@When("I sub those two numbers")
	public void i_sub_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
		actresult=num1-num2;
	}
	
	@When("I multiply those two numbers")
	public void i_multiply_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
		actresult=num1*num2;
	}





}
