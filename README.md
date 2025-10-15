# My App Backend

Ứng dụng backend được xây dựng bằng NestJS framework với TypeScript.

## 🚀 Tính năng

- **Authentication Module**: Hệ thống xác thực người dùng
- **API Documentation**: Tự động tạo docs với Swagger UI
- **CORS Support**: Hỗ trợ Cross-Origin Resource Sharing
- **Cookie Parser**: Xử lý cookies
- **Validation**: Validation dữ liệu với class-validator
- **Testing**: Unit tests và E2E tests

## 🛠️ Công nghệ sử dụng

- **Framework**: NestJS 11.x
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Testing**: Jest
- **Documentation**: Swagger/OpenAPI
- **Linting**: ESLint + Prettier

## 📋 Yêu cầu hệ thống

- Node.js >= 18.x
- pnpm >= 8.x

## 🔧 Cài đặt

1. Clone repository:

```bash
git clone <repository-url>
cd myapp-backend
```

2. Cài đặt dependencies:

```bash
pnpm install
```

3. Tạo file environment (nếu cần):

```bash
cp .env.example .env
```

## 🚀 Chạy ứng dụng

### Development mode

```bash
# Chạy với watch mode
pnpm run dev
# hoặc
pnpm run start:dev
```

### Production mode

```bash
# Build ứng dụng
pnpm run build

# Chạy production
pnpm run start:prod
```

### Debug mode

```bash
pnpm run start:debug
```

## 📚 API Documentation

Sau khi chạy ứng dụng, truy cập Swagger UI tại:

```
http://localhost:8000/swagger
```

## 🧪 Testing

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov

# Watch mode
pnpm run test:watch
```

## 🔍 Code Quality

```bash
# Linting
pnpm run lint

# Format code
pnpm run format
```

## 📁 Cấu trúc dự án

```
src/
├── modules/           # Các modules chức năng
│   └── auth/         # Module xác thực
│       ├── dto/      # Data Transfer Objects
│       ├── entities/ # Database entities
│       ├── auth.controller.ts
│       ├── auth.service.ts
│       └── auth.module.ts
├── app.controller.ts  # Controller chính
├── app.module.ts     # Module chính
├── app.service.ts    # Service chính
└── main.ts          # Entry point
```

## 🌐 API Endpoints

Base URL: `http://localhost:8000/api/v1`

### Authentication

- `POST /auth/login` - Đăng nhập
- `POST /auth/register` - Đăng ký (nếu có)
- `POST /auth/logout` - Đăng xuất (nếu có)

## ⚙️ Configuration

Ứng dụng chạy trên port `8000` mặc định. Có thể thay đổi bằng biến môi trường `PORT`.

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📝 License

Dự án này sử dụng license UNLICENSED.
