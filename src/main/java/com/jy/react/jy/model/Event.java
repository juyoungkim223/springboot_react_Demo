package com.jy.react.jy.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
//builder 패턴으로 해당 Object을 만들어준다.
@Builder
@Entity
@SequenceGenerator(name = "SEQ_Event", initialValue = 1, allocationSize = 1)
public class Event {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE , generator = "SEQ_Event")
    private Long id;
    //Instant: 클래스로 시간을 타임스탬프(utc기준 1970 1월 1일 0시 0분 0초를 숫자 0으로 정하고 그로부터 경과된시간을 양수 음수로 표현)로 다루기위해서 사용
    private Instant date;
    private String title;
    private String description;
    @ManyToMany
    private Set<User> attendees;
}