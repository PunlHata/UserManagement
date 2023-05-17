package com.javaOracleWebix.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.javaOracleWebix.model.Role;

@Mapper
public interface RoleMapper {
	List<Role> getAll() throws SQLException;
	
	void saveNewRole(Role newRole) throws SQLException;
	
	void putRoleById(Role updateRole) throws SQLException;
	
	void deleteRoleById(int roleId) throws SQLException;
	
	int maxRoleId() throws SQLException;
	
	List<Role> getRoleByIsUse() throws SQLException;
}
