package com.jy.react.jy.repository;

import com.jy.react.jy.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

//springboot data jpa
public interface GroupRepository extends JpaRepository<Group, Long> {
    //findBy컬럼이름
    Group findByName(String name);
}