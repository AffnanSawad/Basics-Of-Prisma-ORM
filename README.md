
## 🔰 ১. **What is Prisma and ORM?**
**ORM (Object Relational Mapping)** একটি পদ্ধতি যার মাধ্যমে আমরা কোড দিয়ে ডেটাবেইসের উপর CRUD (Create, Read, Update, Delete) অপারেশন করতে পারি।

**Prisma** হলো JavaScript/TypeScript ভিত্তিক একটি আধুনিক ORM, যা ডেটাবেইসের সাথে কাজ করাকে অনেক সহজ ও টাইপ-সেফ করে তোলে।

✅ **কেন দরকার?**

* SQL না লিখেও ডেটাবেইসে কাজ করা যায়
* কোড অনেক পরিষ্কার হয়
* টাইপ চেকিং পাওয়া যায়

---

## 🔰 ২. **Prisma Installation & Setup**

👉 **প্রয়োজনীয় প্যাকেজ ইনস্টল করা:**

```bash
npm install prisma --save-dev
npx prisma init
npm install @prisma/client
```

👉 **ফোল্ডার তৈরি হয়:**

* `prisma/schema.prisma`
* `.env` → ডেটাবেইস URL থাকবে এখানে

---

## 🔰 ৩. **Prisma Schema Introduction**

`schema.prisma` ফাইল হচ্ছে তোমার প্রজেক্টের ডেটাবেইসের নকশা বা মডেল ফাইল।

### উদাহরণ:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

এখানে `User` হলো একটি টেবিল/মডেল। এতে ৩টি কলাম আছে: `id`, `name`, `email`.

---

## 🔰 ৪. **Defining Models**

Prisma স্কিমায় মডেল মানে একটি টেবিল। প্রতিটি ফিল্ড মানে একটি কলাম।

✅ **ডেটা টাইপের কিছু উদাহরণ:**

| Prisma টাইপ | ডেটাবেইস টাইপ | উদাহরণ               |
| ----------- | ------------- | -------------------- |
| `Int`       | Integer       | বয়স, ID ইত্যাদি      |
| `String`    | Text/String   | নাম, ইমেইল           |
| `Boolean`   | True/False    | Active/Inactive      |
| `DateTime`  | Timestamp     | CreatedAt, UpdatedAt |

### Example Model:

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

---

## 🔰 ৫. **Prisma Migrations**

প্রতিবার `schema.prisma` পরিবর্তন করলে সেটি ডেটাবেইসে প্রয়োগ করতে হয়।

👉 মাইগ্রেশন কমান্ড:

```bash
npx prisma migrate dev --name init
```

* এটি একটি নতুন মাইগ্রেশন ফাইল তৈরি করবে
* ডেটাবেইসে টেবিল তৈরি করে

---

## 🔰 ৬. **Prisma Client Generation**

Prisma Client মানে Prisma-এর মাধ্যমে অটো জেনারেটেড ফাংশন, যা দিয়ে কোডে ডেটা CRUD করা যায়।

👉 কমান্ড:

```bash
npx prisma generate
```

এতে `node_modules/@prisma/client`-এ কোড জেনারেট হবে।

---

## 🔰 ৭. **Basic CRUD Operations (Create, Read, Update, Delete)**

### ✅ 1. Create:

```ts
const newUser = await prisma.user.create({
  data: {
    name: 'Affnan',
    email: 'affnan@example.com'
  }
})
```

### ✅ 2. Read (find all):

```ts
const users = await prisma.user.findMany()
```

### ✅ 3. Update:

```ts
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Updated Name' }
})
```

### ✅ 4. Delete:

```ts
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
})
```

---


---

## ✅ ১. **Relations Between Models (Model সম্পর্ক)**

#### 🔸 এক মডেল অন্য মডেলের সাথে কীভাবে যুক্ত হয় — সেটাই হলো "Relation"।

### 📘 ধরুন:

* এক জন `User` অনেকগুলো `Post` লিখতে পারে → One-to-Many
* প্রতিটা `Post`-এর একজন লেখক থাকে

### ✅ Prisma Schema:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  posts Post[]  // একাধিক পোস্ট
}

model Post {
  id      Int    @id @default(autoincrement())
  title   String
  userId  Int
  user    User   @relation(fields: [userId], references: [id])
}
```

#### 📌 বোঝার জন্য:

* `User` মডেলের `posts` হলো post গুলোর array।
* `Post` মডেলের `userId` হচ্ছে foreign key, যেটা `User` টেবিলের `id` কে রেফার করে।

---

## ✅ ২. **Include (related ডেটা আনা)**

আপনি চাইছেন ইউজারদের পাশাপাশি তাদের পোস্টগুলাও একসাথে দেখতে।

### ✅ কোড:

```ts
const users = await prisma.user.findMany({
  include: {
    posts: true
  }
})
```

### 📘 বোঝা:

এখানে `user.findMany()` দিয়ে সব ইউজার আনা হচ্ছে।
`include: { posts: true }` বলছে, ইউজারদের পোস্টগুলাও সাথে আনো।

---

## ✅ ৩. **Filtering (where)**

ধরুন, আপনি এমন ইউজার খুঁজছেন যাদের নামের মধ্যে "affnan" আছে।

### ✅ কোড:

```ts
const users = await prisma.user.findMany({
  where: {
    name: {
      contains: 'affnan'
    }
  }
})
```

### 📘 বোঝা:

* `contains: 'affnan'` মানে হচ্ছে, নামের যেকোনো অংশে ‘affnan’ আছে এমন ইউজার।
* case-insensitive করতে চাইলে `mode: 'insensitive'` যুক্ত করা যায়।

---

## ✅ ৪. **Sorting (orderBy), Pagination (skip, take)**

ধরুন, আপনি সর্বশেষ ৫টা পোস্ট descending order এ আনতে চান।

### ✅ কোড:

```ts
const posts = await prisma.post.findMany({
  orderBy: {
    createdAt: 'desc'
  },
  skip: 0,
  take: 5
})
```

### 📘 বোঝা:

* `orderBy: createdAt: 'desc'` মানে latest পোস্ট আগে।
* `skip: 0` মানে প্রথম থেকে শুরু।
* `take: 5` মানে ৫টি পোস্ট আনো।

---

## ✅ ৫. **Environment Variable (.env) এবং DATABASE\_URL**

আপনার ডেটাবেজের URI আমরা `.env` ফাইলে রাখি।

### ✅ উদাহরণ:

#### `.env` ফাইলে:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

#### `schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

📘 এর মানে হলো, ডেটাবেজের URI আলাদা করে রাখা হয় নিরাপত্তা ও environment অনুযায়ী পরিবর্তনের সুবিধার জন্য।

---

## ✅ ৬. **Prisma Studio** (ডেটা দেখতে UI)

Prisma Studio দিয়ে আপনি ডেটা ব্রাউজারে দেখতে পারেন।

### ✅ রান করুন:

```bash
npx prisma studio
```

📘 এটি একটি ব্রাউজার UI খুলবে যেখানে আপনি `User`, `Post` টেবিল দেখতে পারবেন, ডেটা এডিট করতে পারবেন।

---

## ✅ ৭. **Soft Delete (isDeleted ফ্ল্যাগ)**

ডেটা আসলে delete না করে “inactive” করে রাখা হয়।

### ✅ Schema:

```prisma
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  isDeleted Boolean @default(false)
}
```

### ✅ Fetch করার সময়:

```ts
const posts = await prisma.post.findMany({
  where: { isDeleted: false }
})
```

📘 এতে করে শুধু active ডেটাগুলোই দেখা যাবে।

---

## ✅ ৮. **Raw SQL Queries**

কখনও প্রয়োজন হয় SQL নিজে লিখে query করার।

### ✅ কোড:

```ts
const result = await prisma.$queryRaw`SELECT * FROM "User" WHERE name = 'Affnan'`
```

📘 `$queryRaw` দিয়ে custom SQL চালানো যায়।
⚠️ SQL Injection এর জন্য সতর্ক থাকতে হয়।

---

## ✅ ৯. **Error Handling**

যদি ডেটা তৈরি করতে গিয়ে কোনো error হয়, সেটা ধরার জন্য:

### ✅ কোড:

```ts
try {
  const user = await prisma.user.create({
    data: { name: 'Affnan' }
  })
} catch (error) {
  console.error('User create error:', error)
}
```

📘 এর মাধ্যমে অ্যাপ ক্র্যাশ না করে error ধরতে পারবেন।

---

## ✅ ১০. **Prisma with Express / Next.js**

### 📘 Express-এ:

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})
```

### 📘 Next.js API Routes-এ:

```ts
// pages/api/users.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}
```

---

## ✅ উপসংহার (Recap):

| টপিক                | উদ্দেশ্য                        |
| ------------------- | ------------------------------- |
| Relations           | টেবিলের মধ্যে সংযোগ তৈরি করা    |
| Include             | একাধিক মডেল একসাথে আনা          |
| Filtering           | ডেটা ফিল্টার করা                |
| Sorting/Pagination  | সাজিয়ে সীমিত ডেটা দেখানো        |
| Studio              | UI দিয়ে ডেটা দেখা               |
| Env & DATABASE\_URL | নিরাপদে কনফিগার রাখা            |
| Raw SQL             | কাস্টম SQL চালানো               |
| Soft Delete         | বাস্তবিক delete না করে hide করা |
| Error Handling      | সমস্যা হলে ধরার ব্যবস্থা        |
| Next/Express        | রিয়েল প্রজেক্টে ব্যবহার         |

---

চমৎকার! তুমি বলেছো, তুমি এখন নিচের ৩টি টপিক শিখতে চাও:

1. ✅ Model Relationships (1:1, 1\:N, M\:N)
2. ✅ Filtering (where, contains, startsWith, etc.)
3. ✅ Sorting & Pagination

---



---

## ✅ ১. **Model Relationships (1:1, 1\:N, M\:N)**

প্রতিটা ডেটাবেজ টেবিলের মাঝে সম্পর্ক থাকতে পারে। Prisma তে ৩ ধরনের রিলেশন সবচেয়ে গুরুত্বপূর্ণ:

### 🔹 A. One-to-One (1:1)

👉 এক ইউজারের একটি প্রোফাইল থাকবে।

### 📘 উদাহরণ:

```prisma
model User {
  id       Int     @id @default(autoincrement())
  name     String
  profile  Profile?
}

model Profile {
  id      Int    @id @default(autoincrement())
  bio     String
  userId  Int    @unique
  user    User   @relation(fields: [userId], references: [id])
}
```

#### 🔎 ব্যাখ্যা:

* প্রতিটা `Profile` শুধু একটা `User` এর সাথে যুক্ত।
* `userId` হলো foreign key → যেটা `User.id` কে রেফার করে।
* `@unique` মানে একজন ইউজারের একটা প্রোফাইলই থাকবে।

---

### 🔹 B. One-to-Many (1\:N)

👉 একজন ইউজার অনেকগুলো পোস্ট করতে পারে।

### 📘 উদাহরণ:

```prisma
model User {
  id     Int     @id @default(autoincrement())
  name   String
  posts  Post[]
}

model Post {
  id      Int     @id @default(autoincrement())
  title   String
  userId  Int
  user    User    @relation(fields: [userId], references: [id])
}
```

#### 🔎 ব্যাখ্যা:

* `User` এর অনেক `Post` আছে → `Post[]`
* `Post` এ `userId` foreign key হিসেবে কাজ করছে।

---

### 🔹 C. Many-to-Many (M\:N)

👉 একজন ইউজার অনেক কোর্সে এনরোল করতে পারে, আবার একটা কোর্সে অনেক ইউজার থাকতে পারে।

### 📘 উদাহরণ:

```prisma
model User {
  id      Int       @id @default(autoincrement())
  name    String
  courses Course[]  @relation("UserCourses")
}

model Course {
  id     Int     @id @default(autoincrement())
  title  String
  users  User[]  @relation("UserCourses")
}
```

#### 🔎 ব্যাখ্যা:

* Prisma নিজে থেকে মাঝখানের junction table তৈরি করে নেয়।
* `@relation("UserCourses")` নামে রিলেশনটা define করা হয়েছে।

---

## ✅ ২. **Filtering (where, contains, startsWith, endsWith)**

Filtering দিয়ে আমরা ডেটা ফিল্টার করতে পারি।

---

### 🔹 A. contains (মধ্যে আছে কিনা)

```ts
const users = await prisma.user.findMany({
  where: {
    name: {
      contains: 'affnan'
    }
  }
})
```

🟢 যে সব ইউজারের `name` এ ‘affnan’ আছে — সেগুলো আসবে।

---

### 🔹 B. startsWith (শুরু হচ্ছে)

```ts
const users = await prisma.user.findMany({
  where: {
    name: {
      startsWith: 'Aff'
    }
  }
})
```

🟢 যাদের নাম ‘Aff’ দিয়ে শুরু — তারা আসবে।

---

### 🔹 C. endsWith (শেষ হচ্ছে)

```ts
const users = await prisma.user.findMany({
  where: {
    name: {
      endsWith: 'nan'
    }
  }
})
```

🟢 যাদের নাম ‘nan’ দিয়ে শেষ — তারাই আসবে।

---

### 🔹 D. multiple condition (AND, OR)

```ts
const users = await prisma.user.findMany({
  where: {
    AND: [
      { name: { contains: 'aff' } },
      { email: { endsWith: '@gmail.com' } }
    ]
  }
})
```

🟢 যাদের নাম ‘aff’ থাকে এবং ইমেইল `@gmail.com` এ শেষ হয় — তারা আসবে।

---

## ✅ ৩. **Sorting & Pagination**

---

### 🔹 A. Sorting (orderBy)

```ts
const posts = await prisma.post.findMany({
  orderBy: {
    createdAt: 'desc'  // বা 'asc'
  }
})
```

🟢 পোস্টগুলো `createdAt` অনুসারে সাজাবে — নতুন আগে।

---

### 🔹 B. Pagination: skip & take

```ts
const posts = await prisma.post.findMany({
  skip: 10,  // প্রথম ১০টা স্কিপ করো
  take: 5    // পরের ৫টা নাও
})
```

🟢 এর মানে — **১১ থেকে ১৫ নং পোস্ট দেখাবে**।

---

### 🔹 C. Combined:

```ts
const posts = await prisma.post.findMany({
  orderBy: { createdAt: 'desc' },
  skip: 0,
  take: 5
})
```

🟢 লেটেস্ট ৫টা পোস্ট দেখাবে।

---

## 📘 উপসংহার (Recap):

| টপিক        | উদাহরণ                         |
| ----------- | ------------------------------ |
| 1:1 রিলেশন  | User → Profile                 |
| 1\:N রিলেশন | User → Posts                   |
| M\:N রিলেশন | User ↔ Course                  |
| Filtering   | contains, startsWith, AND, OR  |
| Sorting     | orderBy: { createdAt: 'desc' } |
| Pagination  | skip, take                     |

---





---

