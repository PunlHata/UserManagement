package com.javaOracleWebix.service;

import java.util.List;

import com.javaOracleWebix.model.User;

public interface UserServices {
	List<User> getAllUser() throws Exception;
	
	User getUserById(int usrId) throws Exception;
	
	List<User> getUserByRoleId(int rolId) throws Exception;
	
	void putUserByMaKH(User updateUser) throws Exception;
	
	void deleteUserById(int userId) throws Exception;
	
	void postUser(User newUser) throws Exception;
	
	Boolean saveRole(User userInfo) throws Exception;
}
