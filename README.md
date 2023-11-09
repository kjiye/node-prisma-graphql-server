## GraphQL Server Boilerplates for Node.js and Prisma

> TypeScript, Node.js Express, GraphQL, Apollo Server, MySQL, Prisma 환경의 서버 애플리케이션을 위한 기본 설정용 보일러플레이트

## Environment

- TypeScript 5
- Express 4
- GraphQL 16
- Prisma 5
- Apollo Server
- MySQL 8
- Nodemon 3

## Getting Started

- Node.js 최소 버전 점검 : 16.13 / 18.X / 20.X

- yarn 최소 버전 점검 : 1.19.2

- `.env` 파일 생성 (`.env.example` 파일 참고)

  - `PORT` : 서버 실행 포트
  - `DATABASE_URL` : 연동할 데이터베이스 정보 `mysql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public`
  - `SERVICE_CLIENT_URL` : CORS 설정에 적용할 서비스 페이지 정보
  - `ADMIN_CLIENT_URL` : CORS 설정에 적용할 관리자 페이지 정보

- `npm install` 또는 `yarn install` : dependencies를 설치한다

- `prisma init` : Prisma를 셋팅한다

- `yarn migrate` : schema.prisma 파일에 정의한 데이터 모델을 연동 데이터베이스에 마이그레이션 한다

- `npm run dev` 또는 `yarn dev` : 서버를 실행한다

- [Altair GraphQL Client](https://altairgraphql.dev)등과 같은 GraphQL 테스트 툴을 이용하여 `localhost:PORT`의 실행 상태를 점검한다

## Directory Structure

<pre>
└── prisma
    ├── migrations : 스키마 변경에 따른 마이그레이션 히스토리 파일 생성 및 관리
    └── schema.prisma : Prisma 설정 정보 및 DB 스키마 모델 정의 파일
└── src 
    ├── middlewares : Node 서버 애플리케이션 미들웨어, 커스텀 미들웨어 파일 관리
    └── resolvers
        ├── admin : 관리자 페이지에서만 사용하는 GraphQL resolvers 관리
        ├── common : 공통 사용 가능한 GraphQL resolvers 관리
        └── service : 서비스 페이지에서만 사용하는 resolvers 관리
    ├── types : 커스텀 타입 정의 및 관리
    ├── utils : 반복 사용 함수 유틸화
    ├── database.ts : Prisma Client 객체 생성
    ├── index.ts : 서버 실행 파일
    ├── schema.ts : GraphQL 스키마 정의
    └── server.ts : 서버 설정 파일
</pre>
