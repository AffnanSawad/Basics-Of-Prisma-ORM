
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

