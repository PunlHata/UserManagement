package com.javaOracleWebix.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaOracleWebix.mapper.CountRoleMapper;
import com.javaOracleWebix.model.CountRole;
import com.javaOracleWebix.service.CountRoleServices;

@Service
public class CountRoleServicesImpl implements CountRoleServices {
	@Autowired
	private CountRoleMapper mapper;
	@Override
	public List<CountRole> countRole() throws Exception {
		List<CountRole> result = mapper.countRole();
		return result;
	}
}
