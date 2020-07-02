# Node.js 03

---

## SQL 쿼리의 기초 (SQL -> sequelize)

- Insert table ('name') values ('alice');

  -> User.create({name: 'alice'})

- select * from users;

  -> User.findAll()

- update users set name = 'bek' where id = 1;

  -> User.update({name: 'bek'}, {where: {id: 1}})

- delete from users where id = 1;

  -> destroy({where: {id: 1}});

## ORM

- 데이터베이스를 객체로 추상화해 논것을 ORM(Object Relational Mapping)이라고 함
- 쿼리를 직접 작성하는 대신 ORM의 메소드로 데이터를 관리 할 수 있는 것이 장점
- 노드에서 SQL ORM은 시퀄라이즈(Sequelize)가 있다.

## 모델

- 데이터베이스 테이블을 ORM으로 추상화한것을 모델이라고 한다.
  1. sequelize.define(): 모델 정의
  2. Sequelize.sync(): 데이터베이스 연동

## API-DB 연동

- API 로직인 user.ctrl.js에서 모델을 연동하여 디비를 연결