# DENO

> Node.js 개발자가 만든 javascript, typescript를 위한 새로운 런타임

- 기반 기술
  1. V8 Javascript Runtime
  2. Rust (C++ 대신)
  3. Tokio (event loop)
  4. Typescript

## Deno가 만들어진 이유

- Node.js의 오래된 기술과 단점을 보완하기 위해 새롭게 만든 런타임
- 모듈을 중앙에서 가지고 있어야 하는 현재 node.js의 문제는 분산화 되어야 하는 현재의 트렌드에 맞지 않는다고 본다.
- 또한 아무나 접근할 수 있다는 점에서 보안도 문제시 되어왔다.

## Deno의 개선점

 1. ES Modules만을 유일하게 사용

    - Http URL을 입력하는 것만으로도 서드 파티의 코드를 import 하여 사용할 수 있다.