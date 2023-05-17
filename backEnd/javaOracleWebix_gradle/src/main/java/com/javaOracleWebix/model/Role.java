package com.javaOracleWebix.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
	private Integer roleID;
	private String roleName;
	private char isUse;
	private String image;
	private String description;
}
