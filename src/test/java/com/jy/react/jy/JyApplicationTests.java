package com.jy.react.jy;

import com.jy.react.jy.model.Event;
import com.jy.react.jy.model.Group;
import com.jy.react.jy.repository.GroupRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@SpringBootTest
class JyApplicationTests {
    @Autowired
    GroupRepository repository;

    @Test
    void contextLoads() {
        Stream.of("youngkim", "Utah JUG", "Seattle JUG",
                "Richmond JUG").forEach(name ->
                repository.save(new Group(name))
        );

        Group djug = repository.findByName("youngkim");
        //@Builder 선언해서 빌더패턴으로 객체 생성
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.now())
                .build();
        djug.setEvents(Collections.singleton(e));
        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }

}
