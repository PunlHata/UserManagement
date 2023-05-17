package com.javaOracleWebix.restController;

import java.util.HashMap;

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

import com.javaOracleWebix.model.Role;
import com.javaOracleWebix.service.RoleServices;

@RestController
@RequestMapping("/role-api")
@CrossOrigin( origins = {"http://localhost:8080"} )
public class RoleAPI {
	@Autowired
	private RoleServices RoleServ;
	
	@GetMapping("/getAll")
	ResponseEntity<?> doGetAll() throws Exception{
		return ResponseEntity.ok(RoleServ.getAllRole());
	}
	
	@GetMapping("/getRoleByIsUse")
	ResponseEntity<?> doGetRoleByIsUse() throws Exception {
		return ResponseEntity.ok(RoleServ.getRoleByIsUse());
	}
	
	@PostMapping("/postSaveNewRole")
	ResponseEntity<?> doPostSaveNewRole(@RequestBody Role newRole) throws Exception {
		HashMap<String, Object> result = new HashMap<>();
		try {
			RoleServ.saveNewRole(newRole);
			result.put("Sucess", "Done");
			result.put("Data", newRole);
		} catch (Exception e) {
			result = null;
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@PutMapping("/putRoleById")
	ResponseEntity<?> doPutRoleById(@RequestBody Role updateRole){
		HashMap<String, Object> result = new HashMap<>();
		try {
			RoleServ.putRoleById(updateRole);
			result.put("Sucess", "Done");
		} catch (Exception e) {
			result.put("Sucess", "Not Done");
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/saveRole")
	ResponseEntity<?> doSaveRole(@RequestBody Role roleInfo) throws Exception {
		HashMap<String, Object> result = new HashMap<>();
		try {
			result.put("Sucess", "Done");
		} catch (Exception e) {
			result.put("Sucess", "Not Done");
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(RoleServ.saveRole(roleInfo));
	}
	
	@DeleteMapping("/deleteRoleById")
	ResponseEntity<?> doDeleteRoleById(@RequestParam("roleId") int roleId){
		HashMap<String, Object> result = new HashMap<>();
		try {
			result.put("Sucess", "Done");
			RoleServ.deleteRoleById(roleId);
		} catch (Exception e) {
			result.put("Sucess", "Not done");
			System.out.println("Fail when call API getUserByRoleId" + e);
			e.printStackTrace();
		}
		return ResponseEntity.ok(result);
	}
}
