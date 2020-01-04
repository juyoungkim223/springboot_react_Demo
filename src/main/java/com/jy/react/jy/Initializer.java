package com.jy.react.jy;

import com.jy.react.jy.model.Event;
import com.jy.react.jy.model.Group;
import com.jy.react.jy.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;
//register for spring context
@Component
//CommandLineRunner 로 스프링 부트 구동시점에 특정코드 실행시키기.
//구현 클래스에 @Component 로 빈으로 등록하여 구동시점에 run 메서드의 코드가 실행된다.
class Initializer implements CommandLineRunner {


    @Override
    public void run(String... args) throws Exception {

    }
}
