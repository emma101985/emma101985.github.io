package com.springwebapp.test;



import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.web.client.RestTemplate;

import com.springwebapp.RestURIConstants;
import com.springwebapp.MyData;

public class TestRestExample {

	public static final String SERVER_URI = "https://dog.ceo/api/breeds/list/all";
	
	public static void main(String args[]){
		
		
		testGetAllData();
	}

	private static void testGetAllData() {
		RestTemplate restTemplate = new RestTemplate();
		
		List<LinkedHashMap> data = restTemplate.getForObject(SERVER_URI+RestURIConstants.GET_ALL, List.class);
		System.out.println(data.size());
		for(LinkedHashMap map : data){
			System.out.println(map.get("name"));;
		}
	}

	
}
