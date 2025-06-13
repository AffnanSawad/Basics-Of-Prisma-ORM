
---

## ✅ **3-1: Introduction and Overview of Prisma**

### 🔍 Prisma কী?

Prisma হলো একটি **ORM (Object Relational Mapper)**, যার মাধ্যমে আমরা আমাদের কোডের মাধ্যমে ডাটাবেজের ওপর CRUD (Create, Read, Update, Delete) অপারেশন করতে পারি খুব সহজে এবং টাইপ-সেইফ ভাবে।

Prisma মূলত তিনটি টুল নিয়ে গঠিত:

1. **Prisma Client** – TypeScript/JavaScript থেকে ডাটাবেজ এক্সেসের জন্য
2. **Prisma Migrate** – ডাটাবেজ স্কিমা ম্যানেজমেন্ট
3. **Prisma Studio** – একটি GUI টুল, যেখানে আপনি ব্রাউজারে ডাটাবেজ ব্রাউজ করতে পারেন

---

### 🌐 Prisma কোন ডাটাবেজ সাপোর্ট করে?

* PostgreSQL ✅
* MySQL ✅
* SQLite ✅
* SQL Server ✅
* MongoDB ✅

---

### 🔧 Prisma কীভাবে কাজ করে?

Prisma আপনার schema থেকে Prisma Client জেনারেট করে এবং এরপর সেই Client ব্যবহার করে আপনি টাইপ-সেইফ কোডের মাধ্যমে ডাটাবেজে কাজ করতে পারেন।

---

### 📌 একটি উদাহরণ:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

উপরের `User` মডেল Prisma schema ফাইলে লিখলে, Prisma Client-এ নিচের মতো কোড অটো জেনারেট হবে:

```ts
const users = await prisma.user.findMany()
```

এখানে `user` হচ্ছে মডেলের নাম, এবং `findMany()` হলো সব ইউজার রেকর্ড পাওয়ার মেথড।

---

## ✅ **53-2: Project Setup for Prisma**

### 🧱 ধাপে ধাপে সেটআপ:

1. **প্রজেক্ট শুরু করুন:**

```bash
mkdir prisma-app
cd prisma-app
npm init -y
```

2. **Prisma ইনস্টল:**

```bash
npm install prisma --save-dev
npx prisma init
```

এই কমান্ড `prisma` ফোল্ডার তৈরি করবে এবং তার মধ্যে থাকবে:

* `schema.prisma`
* `.env` (যেখানে ডাটাবেজ URI থাকবে)

3. **ডাটাবেজ যুক্ত করুন:**
   .env ফাইলে যুক্ত করুন (PostgreSQL উদাহরণ):

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

4. **Prisma CLI install করুন globally (optional):**

```bash
npm install -g prisma
```

5. **Prisma Client install করুন:**

```bash
npm install @prisma/client
```

---

## ✅ **53-3: Prisma Extension, Schema & ts-node-dev**

### 🔌 Prisma VS Code Extension:

* Install: “Prisma” by Prisma
* এটা auto-formatting ও schema highlighting দেয়।

### 🧩 Schema তৈরি উদাহরণ:

```prisma
model Product {
  id    Int    @id @default(autoincrement())
  name  String
  price Float
}
```

### ⚙️ ts-node-dev setup:

Install:

```bash
npm install ts-node-dev typescript @types/node --save-dev
```

`package.json` এ স্ক্রিপ্ট যুক্ত করুন:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

---

## ✅ **53-4: Insert & Retrieve All Records**

### ✏️ Data Insert:

```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const product = await prisma.product.create({
    data: {
      name: "Laptop",
      price: 1200.50
    }
  })
  console.log(product)
}
main()
```

### 📥 সব রেকর্ড রিড করা:

```ts
const allProducts = await prisma.product.findMany()
console.log(allProducts)
```

#### Output:

```json
[
  { id: 1, name: "Laptop", price: 1200.5 },
  { id: 2, name: "Mouse", price: 20.0 }
]
```

---

## ✅ **53-5: Reading Records & Queries**

### 🔎 findUnique (by ID):

```ts
const user = await prisma.user.findUnique({
  where: {
    id: 1
  }
})
```

### 🔎 findFirst (first matching):

```ts
const user = await prisma.user.findFirst({
  where: {
    email: {
      endsWith: "@gmail.com"
    }
  }
})
```

### 🔎 Filtering:

```ts
const users = await prisma.user.findMany({
  where: {
    name: {
      contains: "Affnan"
    }
  }
})
```

---

## ✅ **53-6: create vs createMany**

### 🧍‍♂️ create:

```ts
await prisma.user.create({
  data: { name: "Affnan", email: "affnan@gmail.com" }
})
```

### 👥 createMany:

```ts
await prisma.user.createMany({
  data: [
    { name: "John", email: "john@gmail.com" },
    { name: "Jane", email: "jane@gmail.com" }
  ]
})
```

**Difference:** `create` = 1 record, `createMany` = multiple records at once (faster for bulk insert)

---
চমৎকার! তাহলে এখন আমরা **Prisma Update, Delete, Upsert, Pagination, এবং Relations** নিয়ে আলোচনা করবো। প্রতিটি টপিক ব্যাখ্যা সহ উদাহরণ থাকবে, যেন তুমি ভালোভাবে বুঝতে পারো।

---

## ✅ **53-7: Updating Records – Single & Multiple Record Updates**

### 🔄 Single Update

```ts
await prisma.user.update({
  where: { id: 1 },
  data: { name: "Affnan Sawad" }
})
```

এখানে শুধু `id: 1` ইউজারের নাম আপডেট করা হচ্ছে।

---

### 🔄 Multiple Update (updateMany)

```ts
await prisma.user.updateMany({
  where: { email: { endsWith: "@gmail.com" } },
  data: { name: "Updated User" }
})
```

এখানে সব `@gmail.com` ইমেইল ব্যবহারকারীর নাম আপডেট করা হবে।

**⚠️ Warning:** `updateMany` return করে কতগুলো রেকর্ড আপডেট হয়েছে, কিন্তু রেকর্ডগুলো return করে না।

---

## ✅ **53-8: Deleting Records – Single & Multiple**

### ❌ Single Delete

```ts
await prisma.user.delete({
  where: { id: 1 }
})
```

### ❌ Multiple Delete

```ts
await prisma.user.deleteMany({
  where: { email: { contains: "@test.com" } }
})
```

একইভাবে `deleteMany` কোন রেকর্ড return করে না, শুধু কতগুলো ডিলিট হয়েছে তা জানায়।

---

## ✅ **53-9: Upsert & Select Queries**

### 🔁 Upsert (Update or Insert)

```ts
await prisma.user.upsert({
  where: { email: "affnan@gmail.com" },
  update: { name: "Affnan Updated" },
  create: { name: "Affnan", email: "affnan@gmail.com" }
})
```

**বোঝা সহজে:**

* যদি `email = affnan@gmail.com` থাকে → আপডেট করবে
* না থাকলে → নতুন করে ইনসার্ট করবে

---

### 🔍 Select specific fields only:

```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  select: {
    name: true,
    email: true
  }
})
```

এখানে শুধুমাত্র `name` এবং `email` রিটার্ন হবে।

---

## ✅ **53-10: Pagination & Sorting**

### 🧭 Pagination

```ts
const users = await prisma.user.findMany({
  skip: 10,  // 10 জন বাদ দিয়ে
  take: 5    // পরবর্তী 5 জন নেবে
})
```

এইভাবে তুমি pagination implement করতে পারো।

---

### 📊 Sorting

```ts
const users = await prisma.user.findMany({
  orderBy: {
    name: 'asc' // বা 'desc'
  }
})
```

চমৎকারভাবে `orderBy` দিয়ে যেকোনো ফিল্ডের ওপর ascending বা descending sorting করা যায়।

---

## ✅ **54-1: Exploring Prisma Relations**

Prisma-তে আমরা **one-to-one**, **one-to-many**, ও **many-to-many** relationship তৈরি করতে পারি।

---

## ✅ **54-2: One-to-One & One-to-Many / Many-to-One**

### 🎯 One-to-One উদাহরণ:

```prisma
model User {
  id     Int     @id @default(autoincrement())
  name   String
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}
```

* প্রতিটি ইউজারের একটি প্রোফাইল
* `@relation` দিয়ে relation সেট করা হয়

---

### 📚 One-to-Many উদাহরণ (User → Posts)

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  posts Post[]
}

model Post {
  id     Int    @id @default(autoincrement())
  title  String
  user   User   @relation(fields: [userId], references: [id])
  userId Int
}
```

* একজন ইউজারের অনেকগুলো পোস্ট থাকতে পারে
* পোস্টের মধ্যে থাকে `userId` ফিল্ড

---

## ✅ **54-3: Many-to-Many Relation**

### উদাহরণ: Students & Courses

```prisma
model Student {
  id       Int       @id @default(autoincrement())
  name     String
  courses  Course[]  @relation("StudentCourses")
}

model Course {
  id        Int        @id @default(autoincrement())
  title     String
  students  Student[]  @relation("StudentCourses")
}
```

Prisma internally একটি junction table তৈরি করবে এই সম্পর্ক রাখতে।

---

## ✅ **54-4: Insert Data with Relation**

```ts
await prisma.user.create({
  data: {
    name: "Affnan",
    profile: {
      create: {
        bio: "Full-stack Developer"
      }
    }
  },
  include: { profile: true }
})
```

এখানে ইউজার তৈরি করার সাথে সাথে প্রোফাইলও তৈরি হচ্ছে।

---

## ✅ **54-5: Relation Query**

```ts
const users = await prisma.user.findMany({
  include: {
    profile: true
  }
})
```

বা অন্যভাবে:

```ts
const posts = await prisma.post.findMany({
  include: {
    user: true
  }
})
```

---

## ✅ **54-6: Relation Filters**

```ts
const users = await prisma.user.findMany({
  where: {
    posts: {
      some: {
        title: {
          contains: "Next.js"
        }
      }
    }
  }
})
```

এখানে এমন ইউজারদের ফিল্টার করা হয়েছে, যাদের কোনো পোস্টের টাইটেলে “Next.js” আছে।

---

## ✅ **54-7, 54-8, 54-9: Advanced Filters**

* **AND, OR Filters:**

```ts
where: {
  AND: [
    { name: { contains: "A" } },
    { email: { endsWith: "@gmail.com" } }
  ]
}
```

* **startsWith, endsWith, contains:**

```ts
where: {
  name: { startsWith: "A" }
}
```

---

## ✅ **54-10: Enable Logging**

```ts
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})
```

এতে Prisma কনসোলে সব query log করবে। Debugging এর জন্য দারুণ কাজের।

---

---

## ✅ **55-1: Aggregation – Average Aggregation**

### 📌 Aggregation কি?

Aggregation মানে অনেকগুলো রেকর্ড থেকে একটি সারাংশ তথ্য বের করা (যেমন: গড়, মোট, সর্বোচ্চ, সর্বনিম্ন)। SQL এর মতোই কাজ করে।

---

### 🎯 উদাহরণ: Average Calculation

ধরো আমাদের একটি `Product` মডেল আছে:

```prisma
model Product {
  id    Int
  name  String
  price Float
}
```

#### 👉 গড় মূল্য বের করা:

```ts
const avgPrice = await prisma.product.aggregate({
  _avg: {
    price: true
  }
})
```

**আউটপুট:**

```json
{ _avg: { price: 120.5 } }
```

---

## ✅ **55-2: Sum, Count, Max, Min Aggregation**

```ts
const result = await prisma.product.aggregate({
  _sum: { price: true },
  _count: true,
  _max: { price: true },
  _min: { price: true }
})
```

**আউটপুট হতে পারে:**

```json
{
  _sum: { price: 603 },
  _count: { id: 5 },
  _max: { price: 250 },
  _min: { price: 50 }
}
```

---

## ✅ **55-3: Group By & Having Clause**

Group By ব্যবহার করা হয় কোনো নির্দিষ্ট ফিল্ড অনুযায়ী ডেটা গ্রুপ করে summary বের করার জন্য।

### 🎯 উদাহরণ:

```ts
const result = await prisma.product.groupBy({
  by: ['category'],
  _sum: { price: true },
  having: {
    price: {
      _sum: {
        gt: 1000
      }
    }
  }
})
```

* `by: ['category']` → ক্যাটাগরি অনুযায়ী গ্রুপ
* `_sum` → প্রতিটি ক্যাটাগরির মোট দাম
* `having` → যাদের মোট দাম 1000-এর বেশি

---

## ✅ **55-4: Introduction to Transaction API**

Prisma তে **multiple query একসাথে execute করা হয়** transaction এর মাধ্যমে। এতে যদি একটি query fail করে, তাহলে সবগুলো rollback হয়।

---

## ✅ **55-5: Batch Transaction**

```ts
await prisma.$transaction([
  prisma.user.create({ data: { name: "A" } }),
  prisma.user.create({ data: { name: "B" } })
])
```

উপরের ২টি query একসাথে চলবে। একটি fail করলে দুইটাই rollback হবে।

---

## ✅ **55-6: Interactive Transaction**

Interactive transaction এ তুমি async/await দিয়ে multiple step এ কাজ করতে পারো।

```ts
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: { name: "Affnan" } });
  await tx.profile.create({ data: { bio: "Full stack", userId: user.id } });
})
```

এখানে `user` তৈরি হয়ে তার `id` দিয়ে `profile` তৈরি হচ্ছে।

---

## ✅ **55-7: Raw Queries**

যদি কখনো Prisma-supported ফিচার না লাগে, তখন আমরা raw SQL ব্যবহার করতে পারি।

```ts
const users = await prisma.$queryRaw`SELECT * FROM "User"`
```

বা

```ts
const user = await prisma.$executeRaw`INSERT INTO "User" ("name") VALUES ('Test')`
```

**⚠️ নিরাপত্তা:** Raw query ইনজেকশন অ্যাটাকের ঝুঁকি বেশি। তাই সর্বদা **parameterized query** ব্যবহার করো:

```ts
const name = "Affnan";
await prisma.$queryRaw`SELECT * FROM "User" WHERE "name" = ${name}`
```

---

## ✅ **55-8: Essential Prisma Commands & Conclusion**

### 🧰 Common Prisma Commands:

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| `npx prisma init`        | Prisma config ফাইল তৈরি করে |
| `npx prisma db push`     | schema → database sync করে  |
| `npx prisma migrate dev` | নতুন migration তৈরি করে     |
| `npx prisma studio`      | Prisma GUI tool চালায়       |

---

## 🎁 Bonus: Prisma Studio

```bash
npx prisma studio
```

এই কমান্ড দিয়ে তুমি **browser UI** দিয়ে তোমার ডেটাবেস ব্রাউজ করতে পারো। super helpful!

---

## ✅ সংক্ষেপে সব বিষয় রিভিশন (with example keywords)

| বিষয়                       | কী করে                                     | উদাহরণ                                         |
| -------------------------- | ------------------------------------------ | ---------------------------------------------- |
| `_avg`, `_sum`, `_min`     | Aggregate ডেটা বিশ্লেষণ                    | `product.aggregate({ _avg: { price: true } })` |
| `groupBy` + `having`       | ক্যাটাগরি বা ফিল্ড অনুযায়ী গ্রুপ ও ফিল্টার | `groupBy({ by: ['category'], having: {...} })` |
| `$transaction([])`         | একাধিক query atomically চালানো             | `prisma.$transaction([...])`                   |
| `interactive tx`           | async await এর মাধ্যমে transaction         | `prisma.$transaction(async (tx) => {...})`     |
| `$queryRaw`, `$executeRaw` | Direct SQL query                           | `prisma.$queryRaw`                             |

---



---




