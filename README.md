# NestJS + TypeORM Tutorial <img src="./nestjs.png" align=left width="100" alt="Logo" />

> [NestJS + TypeORM Tutorial](https://www.youtube.com/watch?v=9MGKKJTwicM)영상을 보고 학습한 내용을 정리 합니다.

<br/>

## 🌿 목차

### 1. Setting

- [Setting 정리](./docs/1.Setting.md)

### 2. Repositories

- Repository
- EntityManager

### 3. Relations

- 1:1(One to One)
- 1:N(One to Many)
- N:1(Many to One)
- N:M(Many to Many)

### 4. Transactions

- [updateTransaction Function](./src/items/entities/item.entity.ts)

### 5. Subscribers

- [items.subscriber.ts](./src/items/items.subscriber.ts)

### 6. Migrations

```bash
# 마이그레이션 파일 생성
npm run typeorm:create-migration --name=PublicItems
# 마이그레이션 파일 실행
npm run typeorm:run-migrations
# 마이그레이션 파일 되돌리기
npm run typeorm:revert-migrations
```

### 7. Testing

```bash
npm run test items.service
```
