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


전체적으로 개선되었으나 아직 실험단계의 코드들이 많아 행후 교체 가능성이 농후하다.

### Built-in TypeScript

- Deno에서는 타입스크립트를 기본 내장하고 있다. 

### Browser compatible

- Deno는 자바스크립트로 만들어져있으며 전역 네임스페이스를 사용하는 것은 허용되지 않는다. 또한 변경점 없이 모던 브라우저에서 동작할 수 있도록 만들어져있다.
- Node.js에서 fetch를 사용하기 위해서는 라이브러리를 사용해야 하지만 브라우저에서는 fetch를 단독으로 사용하는 것이 가능하다.
- 반면 Deno는 fetch를 단독으로 사용하는 것이 가능하다.

#### Extension Compatibility Error

- Deno에서 정식으로 제공되는 VSCode용 익스텐션에서 Node.js 문법을 잘못 인식해서 모듈을 인식 못하는 오류 발생 (실제로는 동작하나 모듈을 찾을 수 없다고 뜸)