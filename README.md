

## ✅ **ORM কী?**

**ORM (Object Relational Mapping)** হলো এমন একটা টুল বা টেকনিক, যেটা দিয়ে আমরা প্রোগ্রামিং ল্যাঙ্গুয়েজ (যেমন: JavaScript, TypeScript) ব্যবহার করে ডাটাবেসের সঙ্গে কাজ করতে পারি।

🔹 ORM-এর মাধ্যমে কোড লিখেই ডাটাবেসে **create, read, update, delete (CRUD)** করা যায় — SQL লেখার দরকার হয় না।
🔹 এটি ডাটাবেস টেবিলকে JavaScript/TypeScript এর অবজেক্টে রূপান্তর করে।

---

## ✅ **Prisma কী?**

**Prisma** হলো একটি আধুনিক, টাইপ-সেফ ORM টুল যা Node.js ও TypeScript প্রজেক্টে ব্যবহার হয়।

🔹 এটি ডেভেলপারদের ডাটাবেসে সহজভাবে এবং নিরাপদভাবে (type-safe way) CRUD অপারেশন করতে সাহায্য করে।

---

## ✅ **Prisma এর অংশগুলো (Tools):**

1. ### 🔸 **Prisma Client:**

   * এইটা Prisma-generated JavaScript/TypeScript কোড, যা দিয়ে তুমি ডাটাবেসে query করতে পারো।
   * যেমন: `prisma.user.findMany()`

2. ### 🔸 **Prisma Migrate:**

   * এই টুল দিয়ে ডাটাবেস স্কিমা (structure) তৈরি, পরিবর্তন এবং update করা যায়।
   * যেমন: নতুন টেবিল বানানো, কলাম অ্যাড করা ইত্যাদি।

3. ### 🔸 **Prisma Studio:**

   * একটি ব্রাউজার-ভিত্তিক GUI, যেখানে টেবিলের ডাটা দেখতে, এডিট করতে পারো গ্রাফিক্যালভাবে।
   * `npx prisma studio` কমান্ড দিয়ে চালানো হয়।

---

## ✅ **Prisma এর সুবিধা (Pros):**

* 🔹 টাইপ-সেফ ও IntelliSense সাপোর্ট
* 🔹 SQL না লিখেও কাজ চালানো যায়
* 🔹 ডাটাবেস মাইগ্রেশন সহজ
* 🔹 কোড পড়া ও লেখা সহজ
* 🔹 GraphQL ও REST API-তে ভালোভাবে কাজ করে

---

## ✅ **Prisma এর অসুবিধা (Cons):**

* 🔸 বড় ও কমপ্লেক্স query গুলা কখনও কখনও কঠিন
* 🔸 কিছু edge-case SQL ফিচার সাপোর্ট করে না
* 🔸 Performance-heavy অ্যাপের জন্য Native SQL পারফর্ম্যান্স বেশি হতে পারে

---

## ✅ **Prisma এর প্রতিদ্বন্দ্বী (Competitors):**

| Tool Name    | Description                   |
| ------------ | ----------------------------- |
| Sequelize    | জনপ্রিয় ORM (Node.js)         |
| TypeORM      | TypeScript এর জন্য আরেকটা ORM |
| MikroORM     | Lightweight ORM               |
| Objection.js | SQL builder ORM               |
| Knex.js      | Query builder (not full ORM)  |

---

## ✅ **Prisma CRUD Operations কিভাবে কাজ করে (Bengali Example):**

ধরি তুমি একটা `User` মডেল তৈরি করেছো নিচের মত:

```prisma
// schema.prisma
model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
}
```

### Step 1: Prisma setup

```bash
npm install prisma --save-dev
npx prisma init
```

### Step 2: Generate client

```bash
npx prisma generate
```

---

### ✅ Create (ডাটা যোগ করা)

```ts
const newUser = await prisma.user.create({
  data: {
    name: "Affnan",
    email: "affnan@example.com",
  },
});
```

---

### ✅ Read (ডাটা পড়া)

```ts
const allUsers = await prisma.user.findMany(); // সব ইউজার
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
```

---

### ✅ Update (ডাটা আপডেট করা)

```ts
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Affnan Sawad" },
});
```

---

### ✅ Delete (ডাটা মুছে ফেলা)

```ts
const deletedUser = await prisma.user.delete({
  where: { id: 1 },
});
```

---

## ✅ Bonus: Prisma Migrate দিয়ে মডেল পরিবর্তন

1. **স্কিমা ফাইল এডিট করো:** `schema.prisma` ফাইলে মডেল বানাও
2. **মাইগ্রেশন চালাও:**

```bash
npx prisma migrate dev --name init
```

---

## ✅ Prisma Studio চালানো:

```bash
npx prisma studio
```

এতে ডাটাবেসের সব টেবিল ব্রাউজারে সুন্দরভাবে দেখা ও এডিট করা যায়।

---

## ✅ Summary:

| জিনিস          | কাজ                                     |
| -------------- | --------------------------------------- |
| Prisma ORM     | কোড দিয়ে ডাটাবেসে কাজ করতে সাহায্য করে |
| Prisma Client  | ডাটাবেসে CRUD করার জাভাস্ক্রিপ্ট কোড    |
| Prisma Migrate | টেবিল তৈরি/পরিবর্তনের জন্য              |
| Prisma Studio  | GUI দিয়ে ডাটা দেখার জন্য               |
| CRUD           | Create, Read, Update, Delete            |

---

