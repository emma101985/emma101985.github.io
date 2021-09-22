package com.springwebapp;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.emory.mathcs.backport.java.util.Arrays;


/**
 * Handles requests for the Employee service.
 */
@Controller
public class MyDataController {
	
	private static final Logger logger = LoggerFactory.getLogger(MyDataController.class);
	
	//Map to store employees, ideally we should use database
	Map<String, List<String>> myData = new HashMap<String, List<String>>();
	
	@RequestMapping(value = RestURIConstants.GET_NAME, method = RequestMethod.GET)
	public @ResponseBody MyData getDummyData() {
		logger.info("Start getDummyData");
		MyData data = new MyData();
		List<String> l = new ArrayList<>();
		l.add("irish");
		data.setName(l);

	    myData.put("wolfhound", l);
		return data;
	}
	
		
}

