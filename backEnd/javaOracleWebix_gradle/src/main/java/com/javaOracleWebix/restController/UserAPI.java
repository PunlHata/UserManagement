package com.javaOracleWebix.restController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaOracleWebix.model.User;
import com.javaOracleWebix.service.UserServices;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/user-api")
@CrossOrigin( origins = {"http://localhost:8080"} )
public class UserAPI {
	
	@Autowired
	private UserServices UserSrv;
	
	@GetMapping("/getAll")
	ResponseEntity<?> doGetAll() throws Exception{
		return ResponseEntity.ok(UserSrv.getAllUser());
	}
	
	@GetMapping("/getUserById")
	ResponseEntity<?> doGetUserById(@RequestParam("userId") int usrId) {
		List<User> result = new ArrayList<>();
		try {
			result.add(UserSrv.getUserById(usrId));
		} catch (Exception e) {
			result = null;
			log.error("Fail when call API getUserById "+ e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/getUserByRoleId")
	ResponseEntity<?> doDetUserByRoleID(@RequestParam("roleId") int rolId) {
		List<User> result = new ArrayList<>();
		try {
			result = UserSrv.getUserByRoleId(rolId);
		}
		catch (Exception e) {
			result = null;
			log.error("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@PutMapping("/putUserByMaKH")
	ResponseEntity<?> doPutUserByMaKH(@RequestBody User updateUser) {
		HashMap<String, Object> result = new HashMap<>();
		try {
			result.put("Sucess", "Done");
			UserSrv.putUserByMaKH(updateUser);
		} catch (Exception e) {
			result.put("Sucess", "Not done");
			log.error("Fail when call API putUserById" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/deleteUserById")
	ResponseEntity<?> doDeleteUserById(@RequestParam("userId") int userID){
		HashMap<String, Object> result = new HashMap<>();
		try {
			result.put("Sucess", "Done");
			UserSrv.deleteUserById(userID);
		} catch (Exception e) {
			result.put("Sucess", "Not done");
			log.error("Fail when call API deleteUserById" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/postUser")
	ResponseEntity<?> doPostUser(@RequestBody User newUser){
		HashMap<String, Object> result = new HashMap<>();
		try {
			UserSrv.postUser(newUser);
			result.put("Sucess", "Done");
			result.put("Data", newUser);
		} catch (Exception e) {
			result = null;
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/saveUser")
	ResponseEntity<?> doSaveUser(@RequestBody User userInfo) throws Exception {
		try {
			System.out.print("Done");
		} catch (Exception e) {
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(UserSrv.saveRole(userInfo));
	}
}
