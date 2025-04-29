# Tiện Ích Toán Học

Một thư viện TypeScript đơn giản cung cấp các phương thức toán học cơ bản.

## Cài đặt

```bash
npm install math-utils
```

## Sử dụng

```typescript
import { MathUtils } from "math-utils";

const math = new MathUtils();

// Các phép toán cơ bản
const sum = math.add(5, 3); // 8
const diff = math.subtract(5, 3); // 2
const product = math.multiply(5, 3); // 15
const quotient = math.divide(6, 3); // 2

// Các phép toán khác
const power = math.power(2, 3); // 8
const sqrt = math.squareRoot(16); // 4
const abs = math.absolute(-5); // 5
```

## Tài liệu API

Tài liệu API được tạo bằng TypeDoc và có sẵn [tại đây](https://yourusername.github.io/math-utils/).

## Phát triển

```bash
# Cài đặt các phụ thuộc
npm install

# Biên dịch TypeScript
npm run build

# Chạy ví dụ
npm start

# Tạo tài liệu
npm run docs

# Triển khai tài liệu lên GitHub Pages
npm run deploy
```

## Giấy phép

ISC
