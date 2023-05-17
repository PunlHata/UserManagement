package com.javaOracleWebix.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javaOracleWebix.model.User;

@Mapper
public interface UserMapper {
	List<User> getAll() throws SQLException;
	
	User getUserById(@Param("usrId") int usrId) throws SQLException;
	
	List<User> getUserByRoleId(@Param("rolId") int rolId) throws SQLException;
	
	void putUserByMaKH(User updateUser) throws SQLException; 
	
	void deleteUserById(int userId) throws SQLException;
	
	void postUser(User newUser) throws SQLException;
	
	int maxUserId() throws SQLException;
}
