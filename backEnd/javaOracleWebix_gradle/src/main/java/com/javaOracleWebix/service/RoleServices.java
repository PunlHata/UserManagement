package com.javaOracleWebix.service;

import java.util.List;

import com.javaOracleWebix.model.Role;

public interface RoleServices {
	List<Role> getAllRole() throws Exception;
	
	void saveNewRole(Role newRole) throws Exception;
	
	void putRoleById(Role updateRole) throws Exception;
	
	void deleteRoleById(int roleId) throws Exception;
	
	boolean saveRole(Role roleInfo) throws Exception;
	
	List<Role> getRoleByIsUse() throws Exception;
}
