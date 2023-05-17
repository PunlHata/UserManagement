package com.javaOracleWebix.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.javaOracleWebix.model.CountRole;

@Mapper
public interface CountRoleMapper {
	List<CountRole> countRole() throws SQLException;
}
