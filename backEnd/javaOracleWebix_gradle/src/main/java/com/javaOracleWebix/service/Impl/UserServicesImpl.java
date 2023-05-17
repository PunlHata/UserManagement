package com.javaOracleWebix.service.Impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaOracleWebix.mapper.UserMapper;
import com.javaOracleWebix.model.User;
import com.javaOracleWebix.service.UserServices;

@Service
public class UserServicesImpl implements UserServices {
	@Autowired
	private UserMapper mapper;
	
	@Override
	public List<User> getAllUser() throws Exception{
		List<User> result = mapper.getAll();
		return result;
	}
	
	@Override
	public User getUserById(int usrId) throws Exception {
		// TODO Auto-generated method stub
		return mapper.getUserById(usrId);
	}
	
	@Override
	public List<User> getUserByRoleId(int rolId) throws Exception {
		return mapper.getUserByRoleId(rolId);
	}
	
	@Override
	public void putUserByMaKH(User updateUser) throws Exception {
		updateUser.setDatApi(LocalDate.parse(updateUser.getDate()));
		mapper.putUserByMaKH(updateUser);	
	}
	
	@Override
	public void deleteUserById(int userId) throws Exception {
		mapper.deleteUserById(userId);
	}
	
	@Override
	public void postUser(User newUser) throws Exception {
		newUser.setDatApi(LocalDate.parse(newUser.getDate()));
		mapper.postUser(newUser);
	}
	
	@Override
	public Boolean saveRole(User userInfo) throws Exception {
		userInfo.setDatApi(LocalDate.parse(userInfo.getDate()));
		int maxUserId = mapper.maxUserId();
		if (userInfo.getIdUser() == null) {
			userInfo.setIdUser(maxUserId  + 1);
			mapper.postUser(userInfo);
			return true;
		}
		else {
			mapper.putUserByMaKH(userInfo);
			return false;
		}
	}
}
