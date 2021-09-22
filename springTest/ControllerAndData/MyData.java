package com.springwebapp;




import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;

public class MyData implements Serializable{

	private static final long serialVersionUID = -7788619177798333712L;
	

	private List<String> name;
	
	
	
	public List<String> getName() {
		return name;
	}
	public void setName(List<String> name) {
		this.name = name;
	}
	
	
	
	
}
