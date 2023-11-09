## GraphQL Server Boilerplates for Node.js and Prisma

> TypeScript, Node.js Express, GraphQL, Apollo Server, MySQL, Prisma 환경의 서버 애플리케이션을 위한 기초

## Environment

- TypeScript 5
- Express 4
- GraphQL 16
- Prisma 5
- Apollo Server
- MySQL 8

## Getting Started

- Node.js 최소 버전 점검 : 16.13 / 18.X / 20.X

- yarn 최소 버전 점검 : 1.19.2

- `.env` 파일 생성 (`.env.example` 파일 참고)

  - PORT : 서버 실행 포트
  - DATABASE_URL : 연동할 데이터베이스 정보 `mysql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public`
  - SERVICE_CLIENT_URL : CORS 설정에 적용할 서비스 페이지 정보
  - ADMIN_CLIENT_URL : CORS 설정에 적용할 관리자 페이지 정보

- `npm install` 또는 `yarn install` : dependencies를 설치한다

- `prisma init` : Prisma를 셋팅한다

- `yarn migrate` : schema.prisma 파일에 정의한 데이터 모델을 연동 데이터베이스에 마이그레이션 한다

- `npm run dev` 또는 `yarn dev` : 서버를 실행한다

- [Altair GraphQL Client](https://altairgraphql.dev)등과 같은 GraphQL 테스트 툴을 이용하여 `localhost:PORT`의 실행 상태를 점검한다

## Directory Structure

<pre>
└── prisma
    ├── migrations :
    └── schema.prisma :
└── src 
    ├── middlewares : 
    ├── resolvers :     
    ├── types :     
    ├── utils :     
    ├── database.ts :    
    ├── index.ts :    
    ├── schema.ts :    
    └── server.ts : 
</pre>
