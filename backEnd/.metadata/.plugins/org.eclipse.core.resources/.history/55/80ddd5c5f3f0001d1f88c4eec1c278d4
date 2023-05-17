package com.javaOracleWebix.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaOracleWebix.mapper.RoleMapper;
import com.javaOracleWebix.model.Role;
import com.javaOracleWebix.service.RoleServices;

@Service
public class RoleServicesImpl implements RoleServices{
	@Autowired
	private RoleMapper mapper;
	
	@Override
	public List<Role> getAllRole() throws Exception{
		List<Role> result = mapper.getAll();
		return result;
	}
	
	@Override
	public void saveNewRole(Role newRole) throws Exception{
		mapper.saveNewRole(newRole);	
	}
	
	@Override
	public void putRoleById(Role updateRole) throws Exception {
		mapper.putRoleById(updateRole);
		
	}
	
	@Override
	public void deleteRoleById(int roleId) throws Exception {
		mapper.deleteRoleById(roleId);	
	}
	
	@Override
	public boolean saveRole(Role roleInfo) throws Exception {
//		System.out.print(roleInfo.getRoleID());
//		List<Role> result = mapper.getAll();

		Boolean test = false;
		int result  = mapper.maxRoleId();
		
		if (roleInfo.getRoleID() != null) {
			test = true;
			mapper.putRoleById(roleInfo);
			return test;
		}
		else {
			roleInfo.setRoleID(result + 1);
			mapper.saveNewRole(roleInfo);
			return test;
		}
	}
	
	@Override
	public List<Role> getRoleByIsUse() throws Exception {
		List<Role> result = mapper.getRoleByIsUse();
		return result;
	}
}
