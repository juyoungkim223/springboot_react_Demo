package com.jy.react.jy.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
//@NoArgsConstructor 어노테이션은 파라미터가 없는 기본 생성자를 생성해주고
@NoArgsConstructor
//@RequiredArgsConstructor 어노테이션은 final이나 @NonNull인 필드 값만 파라미터로 받는 생성자를 만들어줍니다.
@RequiredArgsConstructor
@Entity //하이버네이트를 구현한 jpa를 이용한 entity클래스라는 것을 명시
@SequenceGenerator(name = "SEQ_Group", initialValue = 1, allocationSize = 1)
@Table(name = "user_group")
public class Group {
    //primary key , sequence 이용한 자동생성
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE ,generator = "SEQ_Group")
    private Long id;
    @NonNull
    private String name;
    private String address;
    private String city;
    private String stateOrProvince;
    private String country;
    private String postalCode;
    //cascade : 영속성 전이 설정 중 연관된 엔티티의 상태변화에 같이 처리되는 옵션
    //부모 엔티티 저장 시 자식 엔티티도 저장 가능 , persist로 설정 해 부모 엔티티
    //persist 시 자식도 persist , .ALL 설정은 Remove상태도 전이 된다.
    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;
    //jpa 성능상 지연로딩 설정이지만 데이터 fetch 위해 즉시로딩(EAGER) 설정
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Event> events;
}
