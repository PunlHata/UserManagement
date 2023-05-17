package com.javaOracleWebix.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountRole {
	private Integer roleId;
	private String roleName;
	private Integer count;
}
