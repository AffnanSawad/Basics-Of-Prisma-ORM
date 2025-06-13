Prisma নির্দেশিকা: প্রাথমিক থেকে উন্নত স্তরPrisma একটি আধুনিক ORM যা ডেটাবেসের সাথে কাজ করাকে সহজ করে তোলে। এই নির্দেশিকায়, আমরা Prisma-এর বেসিক থেকে অ্যাডভান্সড পর্যন্ত প্রতিটি টপিক ধাপে ধাপে আলোচনা করব।✅ 🔰 Level 1: Basic ConceptsORM কী এবং কেন দরকার (What is ORM and why is it needed)সংজ্ঞা: ORM এর পূর্ণরূপ হলো Object-Relational Mapping। এটি এমন একটি প্রোগ্রামিং টেকনিক যা ডেভেলপারদেরকে ডেটাবেসের সাথে ইন্টারঅ্যাক্ট করার জন্য অবজেক্ট-ওরিয়েন্টেড ল্যাঙ্গুয়েজ ব্যবহার করতে সাহায্য করে, SQL কোয়েরি লেখার পরিবর্তে।বিবরণ: ঐতিহ্যগতভাবে, ডেটাবেসের সাথে কথা বলতে আমাদের SQL কোয়েরি লিখতে হয়। ORM এই প্রক্রিয়াটিকে সরল করে তোলে। এটি ডেটাবেস টেবিলগুলোকে কোডের অবজেক্টে ম্যাপ করে, যাতে আপনি পরিচিত প্রোগ্রামিং সিনট্যাক্স ব্যবহার করে ডেটা ম্যানিপুলেট করতে পারেন।কেন দরকার:কোড সরলীকরণ: SQL না লিখে সরাসরি আপনার পছন্দের প্রোগ্রামিং ভাষায় ডেটাবেস অপারেশন করতে পারেন।ডেটাবেস অ্যাগনস্টিক: অনেক ORM বিভিন্ন ডেটাবেসের সাথে কাজ করতে পারে, তাই ডেটাবেস পরিবর্তন হলেও কোডে বড় পরিবর্তন আনতে হয় না।সুরক্ষা: SQL ইনজেকশনের মতো সাধারণ নিরাপত্তা ঝুঁকি কমাতে সাহায্য করে।উন্নয়ন দ্রুততা: দ্রুত অ্যাপ্লিকেশন ডেভেলপ করতে সাহায্য করে।Prisma কী ও কেন ব্যবহার করবো (What is Prisma and why use it)সংজ্ঞা: Prisma একটি নেক্সট-জেনারেশন ORM যা টাইপ-সেফ ডেটাবেস অ্যাক্সেস এবং মাইগ্রেশন সিস্টেম সরবরাহ করে। এটি ডেটাবেস অ্যাক্সেসের জন্য একটি শক্তিশালী টুলকিট।বিবরণ: Prisma তিনটি প্রধান অংশ নিয়ে গঠিত:Prisma Client: অটো-জেনারেটেড, টাইপ-সেফ কোয়েরি বিল্ডার।Prisma Migrate: ডেটাবেস স্কিমা মাইগ্রেশন সিস্টেম।Prisma Studio: ডেটাবেসের ডেটা দেখার এবং এডিট করার জন্য একটি গ্রাফিক্যাল ইউজার ইন্টারফেস (GUI)।কেন ব্যবহার করবো:টাইপ-সেফটি: TypeScript ব্যবহারকারীদের জন্য চমৎকার টাইপ-সেফটি প্রদান করে, যা ডেভেলপমেন্টের সময়ই ভুল ধরতে সাহায্য করে।সহজ স্কিমা ডিফিনিশন: একটি সহজবোধ্য schema.prisma ফাইল ব্যবহার করে ডেটাবেস স্কিমা ডিফাইন করা যায়।শক্তিশালী মাইগ্রেশন: ডেটাবেস স্কিমা পরিবর্তনের জন্য শক্তিশালী মাইগ্রেশন টুল রয়েছে।উন্নত ডেভেলপার অভিজ্ঞতা: Prisma Studio এবং অন্যান্য ডেভেলপমেন্ট টুলস ডেভেলপারের কাজ সহজ করে তোলে।Prisma Architecture (Client, Schema, Migrations)Prisma Client:বিবরণ: এটি একটি অটো-জেনারেটেড টাইপ-সেফ কোয়েরি বিল্ডার যা আপনার schema.prisma ফাইলের উপর ভিত্তি করে তৈরি হয়। আপনি যখন npx prisma generate কমান্ড চালান, তখন এটি তৈরি হয়। এই ক্লায়েন্টের মাধ্যমেই আপনি অ্যাপ্লিকেশন থেকে ডেটাবেসের সাথে ইন্টারঅ্যাক্ট করেন।উদাহরণ:// Node.js বা TypeScript কোডে Prisma Client ব্যবহার
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(user);
}

main();
Prisma Schema:বিবরণ: এটি আপনার ডেটাবেসের স্কিমা সংজ্ঞায়িত করার জন্য একটি একক উৎস। এটি .prisma ফাইল এক্সটেনশন সহ একটি ডোমেইন-স্পেসিফিক ল্যাঙ্গুয়েজ (DSL) ব্যবহার করে। এখানে আপনি আপনার মডেল, তাদের ফিল্ড, সম্পর্ক এবং ডেটাবেস কানেকশন স্ট্রিং ডিফাইন করেন।উদাহরণ: (নীচে Prisma Schema তৈরি করা অংশে আরও বিস্তারিত থাকবে)// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}
Prisma Migrations:বিবরণ: Prisma Migrate আপনার ডেটাবেস স্কিমা পরিবর্তন (যেমন নতুন টেবিল যোগ করা, কলাম পরিবর্তন করা) পরিচালনা করার জন্য একটি পদ্ধতি সরবরাহ করে। আপনি যখন schema.prisma ফাইল পরিবর্তন করেন, তখন npx prisma migrate dev কমান্ডটি স্বয়ংক্রিয়ভাবে একটি মাইগ্রেশন ফাইল তৈরি করে এবং ডেটাবেসে পরিবর্তনগুলো প্রয়োগ করে।উদাহরণ:# নতুন মাইগ্রেশন তৈরি ও প্রয়োগ করার কমান্ড
npx prisma migrate dev --name init
Prisma Setup & Installationবিবরণ: Prisma সেটআপ করা বেশ সহজ। প্রথমে আপনার প্রজেক্টে Prisma CLI এবং Prisma Client ইনস্টল করতে হবে।উদাহরণ:Node.js প্রজেক্ট তৈরি (যদি না থাকে):mkdir my-prisma-app
cd my-prisma-app
npm init -y
Prisma CLI এবং Prisma Client ইনস্টল:npm install prisma --save-dev
npm install @prisma/client
Prisma ইনিশিয়ালাইজ করা:npx prisma init
এই কমান্ডটি একটি prisma ফোল্ডার এবং তার মধ্যে schema.prisma ফাইল তৈরি করবে। এটি একটি .env ফাইলও তৈরি করবে ডেটাবেস কানেকশন স্ট্রিং এর জন্য।.env ফাইলে ডেটাবেজ কানেকশন (.env file database connection)বিবরণ: .env ফাইলটি এনভায়রনমেন্ট ভেরিয়েবল সংরক্ষণের জন্য ব্যবহৃত হয়, যেমন আপনার ডেটাবেস কানেকশন স্ট্রিং। Prisma স্বয়ংক্রিয়ভাবে এই ফাইল থেকে DATABASE_URL ভেরিয়েবলটি পড়ে।উদাহরণ:# .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
এখানে postgresql হলো ডেটাবেস প্রোভাইডার।user এবং password হলো ডেটাবেস ইউজারনেম ও পাসওয়ার্ড।localhost:5432 হলো ডেটাবেস হোস্ট ও পোর্ট।mydb হলো ডেটাবেস নাম।?schema=public হলো স্কিমা নাম (পোস্টগ্রেসের জন্য ডিফল্ট)।Prisma Schema তৈরি করা (Creating Prisma Schema)বিবরণ: schema.prisma ফাইলটি আপনার ডেটাবেস স্কিমার ব্লুপ্রিন্ট। এখানে আপনি datasource, generator এবং model ডিফাইন করেন।উদাহরণ:// prisma/schema.prisma
// ডেটাবেস কানেকশন
datasource db {
  provider = "postgresql" // আপনি "mysql", "sqlite", "sqlserver", "mongodb" ব্যবহার করতে পারেন
  url      = env("DATABASE_URL")
}

// Prisma Client জেনারেটর
generator client {
  provider = "prisma-client-js"
}

// ইউজার মডেল
model User {
  id        Int      @id @default(autoincrement()) // প্রাথমিক কী, স্বয়ংক্রিয়ভাবে বৃদ্ধি পাবে
  email     String   @unique // ইউনিক ইমেইল
  name      String?  // ঐচ্ছিক ফিল্ড
  createdAt DateTime @default(now()) // তৈরি হওয়ার সময়, ডিফল্ট বর্তমান সময়
  updatedAt DateTime @updatedAt // আপডেট হওয়ার সময়, স্বয়ংক্রিয়ভাবে আপডেট হবে
  posts     Post[]   // User এর অনেকগুলো Post থাকতে পারে (১ থেকে N সম্পর্ক)
}

// পোস্ট মডেল
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id]) // Post এর একজন Author থাকবে (N থেকে ১ সম্পর্ক)
  authorId  Int // ForeignKey
}
উদাহরণ ব্যাখ্যা:datasource db: ডেটাবেসের ধরণ (PostgreSQL) এবং কানেকশন স্ট্রিং (.env ফাইল থেকে নেওয়া DATABASE_URL) ডিফাইন করে।generator client: এটি নির্দেশ করে যে Prisma Client জেনারেট করতে হবে।model User: একটি User টেবিল তৈরি করবে।id: একটি পূর্ণসংখ্যা (Int) টাইপের প্রাইমারি কী (@id), যা স্বয়ংক্রিয়ভাবে বৃদ্ধি পাবে (@default(autoincrement()))।email: একটি String টাইপের কলাম, যা ইউনিক হতে হবে (@unique)।name: একটি String টাইপের কলাম, যা ঐচ্ছিক (String?)।createdAt: DateTime টাইপের কলাম, যা রেকর্ড তৈরির সময় স্বয়ংক্রিয়ভাবে বর্তমান সময় সেট হবে (@default(now()))।updatedAt: DateTime টাইপের কলাম, যা রেকর্ড আপডেটের সময় স্বয়ংক্রিয়ভাবে আপডেট হবে (@updatedAt)।posts Post[]: এটি User এবং Post মডেলের মধ্যে ১ থেকে N সম্পর্ক নির্দেশ করে। একজন ইউজারের একাধিক পোস্ট থাকতে পারে।model Post: একটি Post টেবিল তৈরি করবে।author User: এটি Post এবং User মডেলের মধ্যে N থেকে ১ সম্পর্ক নির্দেশ করে। একটি পোস্ট একজন ইউজারের দ্বারা লেখা হবে।@relation: এটি সম্পর্ককে সংজ্ঞায়িত করে। fields: [authorId] মানে Post মডেলে authorId নামক ফিল্ডটি ফরেন কী হিসেবে কাজ করবে, যা User মডেলের id ফিল্ডকে (references: [id]) রেফার করবে।npx prisma generate কমান্ডবিবরণ: এই কমান্ডটি আপনার schema.prisma ফাইলের উপর ভিত্তি করে Prisma Client জেনারেট করে। যখনই আপনি schema.prisma ফাইল পরিবর্তন করবেন, এই কমান্ডটি চালাতে হবে যাতে Prisma Client আপডেট হয় এবং আপনার কোড নতুন স্কিমার সাথে সামঞ্জস্যপূর্ণ হয়।উদাহরণ:npx prisma generate
npx prisma migrate dev দিয়ে মাইগ্রেশন (Migration with npx prisma migrate dev)বিবরণ: এই কমান্ডটি আপনার schema.prisma ফাইলের পরিবর্তনগুলো ডেটাবেসে প্রয়োগ করে। এটি একটি নতুন মাইগ্রেশন ফাইল তৈরি করে এবং ডেটাবেস স্কিমা আপডেট করে। এটি ডেভেলপমেন্ট পরিবেশে ব্যবহারের জন্য উপযোগী।উদাহরণ:npx prisma migrate dev --name init_database # 'init_database' মাইগ্রেশনের একটি নাম
উদাহরণ ব্যাখ্যা:আপনি যখন আপনার schema.prisma ফাইল পরিবর্তন করবেন (যেমন নতুন মডেল যোগ করবেন বা কলাম পরিবর্তন করবেন), তখন এই কমান্ডটি চালান।Prisma স্বয়ংক্রিয়ভাবে আপনার schema.prisma এবং ডেটাবেসের বর্তমান অবস্থার মধ্যে পার্থক্য শনাক্ত করবে।এটি prisma/migrations ফোল্ডারে একটি SQL ফাইল সহ একটি নতুন মাইগ্রেশন ফোল্ডার তৈরি করবে, যেখানে ডেটাবেস আপডেটের জন্য প্রয়োজনীয় SQL স্টেটমেন্ট থাকবে।এটি স্বয়ংক্রিয়ভাবে সেই মাইগ্রেশনটি আপনার ডেটাবেসে প্রয়োগ করবে।✅ 🛠️ Level 2: Prisma Model ও Schema DesignModel syntax & attributes (like @id, @default, @relation)Model Syntax:model ModelName { fieldName FieldType @attribute }উদাহরণ:model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
Attributes:@id: ফিল্ডটিকে মডেলের প্রাইমারি কী হিসেবে চিহ্নিত করে।@unique: নিশ্চিত করে যে ফিল্ডের মানগুলো ডেটাবেসে অনন্য হবে (কোনো ডুপ্লিকেট থাকবে না)।@default(value): ফিল্ডের জন্য একটি ডিফল্ট মান সেট করে যদি রেকর্ড তৈরির সময় কোনো মান সরবরাহ না করা হয়।@default(autoincrement()): স্বয়ংক্রিয়ভাবে একটি ক্রমবর্ধমান পূর্ণসংখ্যা মান তৈরি করে (প্রাইমারি কী এর জন্য সাধারণ)।@default(uuid()): একটি ইউনিভার্সালি ইউনিক আইডেন্টিফায়ার (UUID) তৈরি করে।@default(now()): ফিল্ডের জন্য বর্তমান ডেটটাইম সেট করে।@relation(...): দুটি মডেলের মধ্যে সম্পর্ক সংজ্ঞায়িত করে। এটি ফরেন কী ফিল্ড এবং রেফারেন্স করা প্রাইমারি কী ফিল্ড নির্দেশ করে।@updatedAt: যখনই রেকর্ড আপডেট হয়, তখন এই ফিল্ডের ডেটটাইম স্বয়ংক্রিয়ভাবে বর্তমান সময়ে সেট হয়।উদাহরণ: উপরে "Prisma Schema তৈরি করা" অংশে দেওয়া User এবং Post মডেলের উদাহরণটি দেখুন।Scalar types: String, Int, Boolean, DateTime, etc.বিবরণ: Prisma বিভিন্ন স্ক্যালার টাইপ সমর্থন করে যা ডেটাবেস কলামের ডেটা টাইপকে ম্যাপ করে।উদাহরণ:String: টেক্সট ডেটা। (name String)Int: পূর্ণসংখ্যা। (age Int)Float: ফ্লোটিং-পয়েন্ট সংখ্যা। (price Float)Boolean: সত্য বা মিথ্যা মান। (published Boolean)DateTime: তারিখ এবং সময়। (createdAt DateTime)Json: JSON অবজেক্ট সংরক্ষণ করতে। (data Json)Bytes: বাইনারি ডেটা।Decimal: উচ্চ-প্রিসিশন সংখ্যা (অর্থনৈতিক ডেটার জন্য)।উদাহরণ:model Product {
  id          Int      @id @default(autoincrement())
  name        String
  price       Decimal
  description String?
  inStock     Boolean  @default(true)
  addedAt     DateTime @default(now())
  details     Json? // পণ্য সম্পর্কে অতিরিক্ত JSON ডেটা
}
Optional & Required fields (?, !)বিবরণ: Prisma স্কিমাতে একটি ফিল্ড ঐচ্ছিক নাকি বাধ্যতামূলক তা আপনি ? বা ! ব্যবহার করে নির্দেশ করতে পারেন।! (Required): ডিফল্ট। ফিল্ডটি ডেটাবেসে অবশ্যই একটি মান থাকতে হবে (নাল হতে পারবে না)।? (Optional): ফিল্ডটি নাল হতে পারে। অর্থাৎ, এই ফিল্ডের জন্য কোনো মান না থাকলেও চলবে।উদাহরণ:model User {
  id    Int     @id @default(autoincrement())
  email String  @unique // Required field (ডিফল্ট)
  name  String?          // Optional field (নাল হতে পারে)
  age   Int?             // Optional field
  bio   String           // Required field
}
Default values: @default(now()), @default(uuid())বিবরণ: আপনি একটি ফিল্ডের জন্য ডিফল্ট মান সেট করতে পারেন যা রেকর্ড তৈরি করার সময় স্বয়ংক্রিয়ভাবে অ্যাসাইন করা হবে যদি আপনি কোনো নির্দিষ্ট মান না দেন।উদাহরণ:model Order {
  id        String   @id @default(uuid()) // স্বয়ংক্রিয়ভাবে UUID তৈরি হবে
  amount    Float
  orderDate DateTime @default(now()) // স্বয়ংক্রিয়ভাবে বর্তমান সময় সেট হবে
  status    String   @default("pending") // ডিফল্ট স্ট্যাটাস "pending"
}
উদাহরণ ব্যাখ্যা:id String @id @default(uuid()): id ফিল্ডটি একটি String টাইপের এবং এর ডিফল্ট মান একটি স্বয়ংক্রিয়ভাবে জেনারেট হওয়া UUID হবে।orderDate DateTime @default(now()): orderDate ফিল্ডের ডিফল্ট মান হলো বর্তমান তারিখ এবং সময়।status String @default("pending"): status ফিল্ডের ডিফল্ট স্ট্রিং মান হলো "pending"।Relations (1:1, 1:N, N:M)বিবরণ: Prisma বিভিন্ন ধরণের ডেটাবেস সম্পর্ক সমর্থন করে এবং @relation অ্যাট্রিবিউট ব্যবহার করে এগুলি সংজ্ঞায়িত করা হয়।1:1 (One-to-One): একটি মডেলের একটি রেকর্ড অন্য মডেলের শুধুমাত্র একটি রেকর্ডের সাথে সম্পর্কিত।1:N (One-to-Many): একটি মডেলের একটি রেকর্ড অন্য মডেলের একাধিক রেকর্ডের সাথে সম্পর্কিত।N:M (Many-to-Many): একটি মডেলের একাধিক রেকর্ড অন্য মডেলের একাধিক রেকর্ডের সাথে সম্পর্কিত। এর জন্য সাধারণত একটি জয়েন টেবিল (Join Table) প্রয়োজন হয়।উদাহরণ:1:1 (User এবং Profile):model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  profile Profile? // একটি User এর একটি ঐচ্ছিক Profile থাকতে পারে
}

model Profile {
  id       Int    @id @default(autoincrement())
  bio      String?
  user     User   @relation(fields: [userId], references: [id])
  userId   Int    @unique // Profile এর একটি User থাকবে, এবং userId ইউনিক হবে
}
1:N (User এবং Post): (উপরে schema.prisma উদাহরণের মতো)model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[] // একজন User এর অনেক Post থাকতে পারে
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  author   User   @relation(fields: [authorId], references: [id])
  authorId Int    // Post এর একজন Author থাকবে
}
N:M (Post এবং Tag - জয়েন টেবিল সহ):model Post {
  id    Int    @id @default(autoincrement())
  title String
  tags  Tag[]  @relation("PostToTag") // Tag এর সাথে Many-to-Many সম্পর্ক
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[] @relation("PostToTag") // Post এর সাথে Many-to-Many সম্পর্ক
}
ব্যাখ্যা: Prisma স্বয়ংক্রিয়ভাবে PostToTag নামের একটি জয়েন টেবিল তৈরি করবে Post এবং Tag এর মধ্যে সম্পর্ক পরিচালনার জন্য।Enum ব্যবহার করা (Using Enum)বিবরণ: Enum একটি নির্দিষ্ট সেট অফ প্রিডিফাইন্ড ভ্যালু ডিফাইন করতে ব্যবহৃত হয়। এটি ডেটাবেস কলামে ডেটার ইন্টিগ্রিটি নিশ্চিত করতে সাহায্য করে।উদাহরণ:enum Role {
  USER
  ADMIN
  EDITOR
}

model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  role  Role   @default(USER) // role ফিল্ডটি Role enum এর যেকোনো একটি ভ্যালু হবে
}
উদাহরণ ব্যাখ্যা:enum Role: USER, ADMIN, EDITOR এই তিনটি সম্ভাব্য মান সংজ্ঞায়িত করে।role Role @default(USER): User মডেলের role ফিল্ডটি Role enum টাইপের হবে এবং এর ডিফল্ট মান USER হবে।Prisma Studio দিয়ে ডেটা দেখা ও edit করা (Viewing and editing data with Prisma Studio)বিবরণ: Prisma Studio একটি গ্রাফিক্যাল ইউজার ইন্টারফেস (GUI) যা আপনাকে আপনার ডেটাবেসের ডেটা সহজেই দেখতে, ফিল্টার করতে, যোগ করতে, এডিট করতে এবং ডিলিট করতে সাহায্য করে। এটি ডেভেলপমেন্টের সময় ডেটা ম্যানেজমেন্টের জন্য খুবই উপযোগী।কীভাবে ব্যবহার করবেন:npx prisma studio
এই কমান্ডটি চালালে আপনার ব্রাউজারে একটি নতুন ট্যাব খুলবে, যেখানে আপনি আপনার ডেটাবেসের মডেলগুলো এবং তাদের ডেটা দেখতে পারবেন।✅ 📦 Level 3: Basic CRUD OperationsPrisma Client ব্যবহার করে ডেটাবেসে CRUD (Create, Read, Update, Delete) অপারেশনগুলি করা হয়।create() – নতুন রেকর্ড তৈরি (creating new record)বিবরণ: create() মেথডটি একটি মডেলের জন্য ডেটাবেসে একটি নতুন রেকর্ড যোগ করতে ব্যবহৃত হয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUserAndPost() {
  // একটি নতুন ইউজার তৈরি
  const newUser = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      role: 'USER', // Role enum থেকে
    },
  });
  console.log('তৈরি করা ইউজার:', newUser);

  // ইউজার এবং পোস্ট একসাথে তৈরি (Nested write)
  const newPostWithAuthor = await prisma.post.create({
    data: {
      title: 'Prisma is awesome',
      content: 'Learning Prisma is fun!',
      published: true,
      author: {
        create: { // নতুন ইউজার তৈরি করবে
          name: 'Charlie',
          email: 'charlie@example.com',
        },
      },
    },
  });
  console.log('নতুন পোস্ট সহ লেখক:', newPostWithAuthor);

  // বিদ্যমান ইউজার এর জন্য পোস্ট তৈরি
  const existingUserPost = await prisma.post.create({
    data: {
      title: 'My second post',
      content: 'This is another post by Bob.',
      published: false,
      authorId: newUser.id, // Bob এর আইডি ব্যবহার করে
    },
  });
  console.log('বিদ্যমান ইউজারের পোস্ট:', existingUserPost);
}

createUserAndPost();
উদাহরণ ব্যাখ্যা:প্রথম prisma.user.create() কলটি name, email এবং role সহ একটি নতুন User রেকর্ড তৈরি করে।দ্বিতীয় prisma.post.create() কলটি একটি Post তৈরি করে এবং author: { create: { ... } } ব্যবহার করে একই সাথে একটি নতুন User রেকর্ডও তৈরি করে (নেস্টেড রাইট)।তৃতীয় prisma.post.create() কলটি একটি Post তৈরি করে এবং authorId ব্যবহার করে একটি বিদ্যমান User এর সাথে লিঙ্ক করে।findMany(), findUnique(), findFirst() – ডেটা রিড (reading data)বিবরণ: ডেটাবেস থেকে রেকর্ড রিড করার জন্য বিভিন্ন মেথড আছে।findMany(): একটি মডেলের সকল রেকর্ড বা নির্দিষ্ট শর্তের সাথে মিলে যাওয়া একাধিক রেকর্ড ফেরত দেয়।findUnique(): প্রাইমারি কী (id) বা ইউনিক ফিল্ড ব্যবহার করে শুধুমাত্র একটি অনন্য রেকর্ড ফেরত দেয়। যদি একাধিক রেকর্ড পাওয়া যায় বা কোনোটি না পাওয়া যায়, তবে null ফেরত দেয়।findFirst(): নির্দিষ্ট শর্তের সাথে মিলে যাওয়া প্রথম রেকর্ডটি ফেরত দেয়। যদি একাধিক রেকর্ড মেলে, তবে প্রথমটি ফেরত দেয়। কোনোটি না পাওয়া গেলে null ফেরত দেয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function readData() {
  // সকল ইউজার খুঁজুন
  const allUsers = await prisma.user.findMany();
  console.log('সকল ইউজার:', allUsers);

  // একটি নির্দিষ্ট ইউজারকে তার ইমেইল দিয়ে খুঁজুন (unique field)
  const specificUser = await prisma.user.findUnique({
    where: {
      email: 'bob@example.com',
    },
  });
  console.log('নির্দিষ্ট ইউজার (ইমেইল):', specificUser);

  // একটি নির্দিষ্ট ইউজারকে তার ID দিয়ে খুঁজুন (primary key)
  const userById = await prisma.user.findUnique({
    where: {
      id: 1, // ধরে নিচ্ছি আইডি 1 বিদ্যমান
    },
  });
  console.log('নির্দিষ্ট ইউজার (আইডি):', userById);

  // প্রথম প্রকাশিত পোস্ট খুঁজুন
  const firstPublishedPost = await prisma.post.findFirst({
    where: {
      published: true,
    },
  });
  console.log('প্রথম প্রকাশিত পোস্ট:', firstPublishedPost);
}

readData();
উদাহরণ ব্যাখ্যা:findMany() কোনো আর্গুমেন্ট ছাড়াই সকল User রেকর্ড আনে।findUnique() where ক্লজ ব্যবহার করে email ফিল্ডের মাধ্যমে একটি নির্দিষ্ট User খুঁজে বের করে।findFirst() where ক্লজ ব্যবহার করে published: true শর্তে মিলে যাওয়া প্রথম Post রেকর্ডটি খুঁজে বের করে।update(), updateMany() – রেকর্ড আপডেট (updating records)বিবরণ:update(): একটি নির্দিষ্ট রেকর্ড আপডেট করতে ব্যবহৃত হয়। এটি where ক্লজ দ্বারা নির্বাচিত একটি একক রেকর্ড আপডেট করে।updateMany(): একাধিক রেকর্ড আপডেট করতে ব্যবহৃত হয় যা একটি নির্দিষ্ট শর্তের সাথে মিলে যায়। এটি কতগুলি রেকর্ড আপডেট হয়েছে তা ফেরত দেয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function updateData() {
  // একটি ইউজারকে আপডেট করুন (id দিয়ে)
  const updatedUser = await prisma.user.update({
    where: {
      email: 'bob@example.com',
    },
    data: {
      name: 'Robert',
    },
  });
  console.log('আপডেট করা ইউজার:', updatedUser);

  // সকল অপ্রকাশিত পোস্টকে প্রকাশিত করুন
  const updateManyPosts = await prisma.post.updateMany({
    where: {
      published: false,
    },
    data: {
      published: true,
    },
  });
  console.log('আপডেট করা পোস্টের সংখ্যা:', updateManyPosts.count);
}

updateData();
উদাহরণ ব্যাখ্যা:update() email দ্বারা নির্বাচিত User এর name ফিল্ড আপডেট করে।updateMany() published: false শর্তে মিলে যাওয়া সকল Post রেকর্ডকে published: true তে আপডেট করে। updateMany একটি অবজেক্ট ফেরত দেয় যাতে count প্রপার্টি থাকে যা আপডেট করা রেকর্ডের সংখ্যা নির্দেশ করে।delete(), deleteMany() – রেকর্ড ডিলিট (deleting records)বিবরণ:delete(): একটি নির্দিষ্ট রেকর্ড ডিলিট করতে ব্যবহৃত হয়। এটি where ক্লজ দ্বারা নির্বাচিত একটি একক রেকর্ড ডিলিট করে।deleteMany(): একাধিক রেকর্ড ডিলিট করতে ব্যবহৃত হয় যা একটি নির্দিষ্ট শর্তের সাথে মিলে যায়। এটি কতগুলি রেকর্ড ডিলিট হয়েছে তা ফেরত দেয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteData() {
  // একটি পোস্ট ডিলিট করুন (আইডি দিয়ে)
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: 1, // ধরে নিচ্ছি আইডি 1 এর পোস্ট বিদ্যমান
      },
    });
    console.log('ডিলিট করা পোস্ট:', deletedPost);
  } catch (e) {
    console.error('পোস্ট ডিলিট করতে সমস্যা:', e);
  }

  // সকল অপ্রকাশিত পোস্ট ডিলিট করুন
  const deleteUnpublishedPosts = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log('ডিলিট করা অপ্রকাশিত পোস্টের সংখ্যা:', deleteUnpublishedPosts.count);

  // সকল ইউজার ডিলিট করুন (সতর্কতার সাথে ব্যবহার করুন!)
  // const deleteAllUsers = await prisma.user.deleteMany({});
  // console.log('ডিলিট করা সকল ইউজারের সংখ্যা:', deleteAllUsers.count);
}

deleteData();
উদাহরণ ব্যাখ্যা:delete() একটি নির্দিষ্ট Post রেকর্ড ডিলিট করে তার id ব্যবহার করে। ত্রুটি হ্যান্ডলিংয়ের জন্য try-catch ব্লক ব্যবহার করা হয়েছে।deleteMany() published: false শর্তে মিলে যাওয়া সকল Post রেকর্ড ডিলিট করে।Filtering with where, orderBy, select, includewhere:বিবরণ: ডেটা ফিল্টার করার জন্য এটি সবচেয়ে গুরুত্বপূর্ণ ক্লজ। আপনি বিভিন্ন অপারেটর (যেমন equals, contains, startsWith, endsWith, in, notIn, gt, gte, lt, lte, AND, OR, NOT) ব্যবহার করে জটিল কোয়েরি তৈরি করতে পারেন।উদাহরণ:// ইমেইল @example.com দিয়ে শেষ হওয়া এবং নাম 'B' দিয়ে শুরু হওয়া ইউজার খুঁজুন
const users = await prisma.user.findMany({
  where: {
    email: {
      endsWith: '@example.com',
    },
    name: {
      startsWith: 'B',
    },
    AND: [
      { age: { gt: 18 } }, // বয়স 18 এর বেশি
      { age: { lt: 60 } }  // বয়স 60 এর কম
    ]
  },
});
orderBy:বিবরণ: ফলাফল সেটকে এক বা একাধিক ফিল্ডের উপর ভিত্তি করে সাজাতে ব্যবহৃত হয়, হয় অ্যাসেন্ডিং (asc) অথবা ডিসেন্ডিং (desc) অর্ডারে।উদাহরণ:// আইডি অনুযায়ী ডিসেন্ডিং অর্ডারে সকল পোস্ট খুঁজুন
const posts = await prisma.post.findMany({
  orderBy: {
    id: 'desc',
  },
});
select:বিবরণ: আপনি ডেটাবেস থেকে শুধুমাত্র নির্দিষ্ট ফিল্ডগুলো নির্বাচন করতে select ব্যবহার করতে পারেন। এটি নেটওয়ার্ক লোড কমায় এবং অপ্রয়োজনীয় ডেটা আনা এড়িয়ে যায়।উদাহরণ:// শুধুমাত্র ইউজারের নাম এবং ইমেইল আনুন
const users = await prisma.user.findMany({
  select: {
    name: true,
    email: true,
  },
});
include:বিবরণ: সম্পর্কিত মডেলের ডেটা আনতে include ব্যবহার করা হয় (যেমন, একটি ইউজারের সাথে তার পোস্টগুলো আনা)। এটি জয়েন অপারেশন করার মতো কাজ করে।উদাহরণ:// প্রত্যেক ইউজারের সাথে তার পোস্টগুলো আনুন
const usersWithPosts = await prisma.user.findMany({
  include: {
    posts: true, // ইউজারের সকল পোস্ট ইনক্লুড করবে
  },
});

// পোস্টের সাথে তার লেখকের নাম আনুন
const postsWithAuthor = await prisma.post.findMany({
  include: {
    author: { // লেখকের সকল ডেটা ইনক্লুড করবে
      select: {
        name: true, // শুধুমাত্র লেখকের নাম
        email: true,
      },
    },
  },
});
Pagination: skip, takeবিবরণ: skip এবং take মেথডগুলি ডেটাবেস কোয়েরিতে পেজিনেশন প্রয়োগ করতে ব্যবহৃত হয়, যা বৃহৎ ডেটাসেটকে ছোট ছোট অংশে ভাগ করে লোড করতে সাহায্য করে।take: কতগুলি রেকর্ড নিতে হবে তা নির্দিষ্ট করে।skip: কতগুলি রেকর্ড স্কিপ করতে হবে (বাদ দিতে হবে) তা নির্দিষ্ট করে। এটি পেজের অফসেটের জন্য ব্যবহৃত হয়।উদাহরণ:// প্রথম ১০টি পোস্ট (পেজ ১)
const firstPagePosts = await prisma.post.findMany({
  take: 10,
});

// পরের ১০টি পোস্ট (পেজ ২)
const secondPagePosts = await prisma.post.findMany({
  skip: 10,
  take: 10,
});

// পঞ্চম থেকে দশম পোস্ট পর্যন্ত
const postsFrom5to10 = await prisma.post.findMany({
  skip: 4, // ইনডেক্স ০ থেকে শুরু হয়, তাই পঞ্চম রেকর্ড আনতে ৪টি স্কিপ করতে হবে
  take: 6, // ৪ স্কিপ করার পর ৬টি রেকর্ড
});
উদাহরণ ব্যাখ্যা:প্রথম উদাহরণে, take: 10 ডেটাবেস থেকে প্রথম ১০টি Post রেকর্ড ফেরত দেয়।দ্বিতীয় উদাহরণে, skip: 10 প্রথম ১০টি Post রেকর্ড বাদ দেয় এবং take: 10 পরের ১০টি রেকর্ড ফেরত দেয়, যা পেজ ২ এর জন্য কার্যকর।✅ 📊 Level 4: Intermediate UsageAggregation Queriesবিবরণ: অ্যাগ্রিগেশন কোয়েরিগুলি ডেটাসেটের উপর গণনা (যেমন, মোট সংখ্যা, গড়, যোগফল, সর্বনিম্ন, সর্বোচ্চ) করার জন্য ব্যবহৃত হয়। Prisma-তে এটি $aggregate মেথড ব্যবহার করে করা হয়।_count, _avg, _sum, _min, _max:_count: রেকর্ড বা নির্দিষ্ট ফিল্ডের সংখ্যা গণনা করে।_avg: নিউমেরিক ফিল্ডের গড় মান গণনা করে।_sum: নিউমেরিক ফিল্ডের যোগফল গণনা করে।_min: নিউমেরিক বা ডেটটাইম ফিল্ডের সর্বনিম্ন মান খুঁজে বের করে।_max: নিউমেরিক বা ডেটটাইম ফিল্ডের সর্বোচ্চ মান খুঁজে বের করে।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function runAggregations() {
  // মোট ইউজারের সংখ্যা
  const userCount = await prisma.user.aggregate({
    _count: {
      id: true, // অথবা '_all'
    },
  });
  console.log('মোট ইউজারের সংখ্যা:', userCount._count.id);

  // সকল প্রকাশিত পোস্টের সংখ্যা
  const publishedPostsCount = await prisma.post.aggregate({
    where: {
      published: true,
    },
    _count: {
      _all: true, // সকল ফিল্ড গণনা করুন
    },
  });
  console.log('মোট প্রকাশিত পোস্টের সংখ্যা:', publishedPostsCount._count._all);

  // যদি আপনার Product মডেল থাকে যাতে price ফিল্ড থাকে:
  // পণ্যের গড় মূল্য
  const avgPrice = await prisma.product.aggregate({
    _avg: {
      price: true,
    },
  });
  console.log('গড় পণ্যের মূল্য:', avgPrice._avg.price);

  // পণ্যের মোট মূল্য
  const sumPrice = await prisma.product.aggregate({
    _sum: {
      price: true,
    },
  });
  console.log('মোট পণ্যের মূল্য:', sumPrice._sum.price);

  // সর্বনিম্ন এবং সর্বোচ্চ মূল্যের পণ্য
  const minMaxPrice = await prisma.product.aggregate({
    _min: {
      price: true,
    },
    _max: {
      price: true,
    },
  });
  console.log('সর্বনিম্ন মূল্য:', minMaxPrice._min.price, 'সর্বোচ্চ মূল্য:', minMaxPrice._max.price);
}

runAggregations();
Group By & Filtering with having clauseবিবরণ: groupBy আপনাকে এক বা একাধিক ফিল্ডের উপর ভিত্তি করে রেকর্ডগুলোকে গ্রুপ করতে দেয় এবং তারপর প্রতিটি গ্রুপের জন্য অ্যাগ্রিগেশন করতে দেয়। having ক্লজটি গ্রুপের উপর ফিল্টারিং করতে ব্যবহৃত হয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function runGroupBy() {
  // প্রকাশিত স্ট্যাটাস অনুযায়ী পোস্ট গণনা করুন
  const postsByPublishedStatus = await prisma.post.groupBy({
    by: ['published'],
    _count: {
      id: true,
    },
  });
  console.log('প্রকাশিত স্ট্যাটাস অনুযায়ী পোস্ট:', postsByPublishedStatus);

  // প্রতিটি ইউজারের মোট পোস্টের সংখ্যা (id এবং authorId ব্যবহার করে)
  // Note: GroupBy in Prisma requires direct access to scalar fields.
  // To group by user details like name, you might need a more complex query or pre-fetch data.
  const postsCountByAuthor = await prisma.post.groupBy({
    by: ['authorId'],
    _count: {
      _all: true,
    },
    // having: {
    //   id: {
    //     _count: {
    //       gt: 1 // শুধুমাত্র যাদের 1টির বেশি পোস্ট আছে
    //     }
    //   }
    // }
  });
  console.log('প্রত্যেক লেখকের পোস্টের সংখ্যা:', postsCountByAuthor);
  // Prisma's `having` clause works differently than SQL. It operates on the aggregate result directly.
  // For example, to filter groups based on count:
  const usersWithManyPosts = await prisma.post.groupBy({
    by: ['authorId'],
    _count: {
      _all: true,
    },
    having: {
      _count: {
        _all: {
          gt: 1, // শুধুমাত্র সেই লেখক যাদের 1টির বেশি পোস্ট আছে
        },
      },
    },
  });
  console.log('অনেক পোস্ট সহ ইউজার (id):', usersWithManyPosts);
}

runGroupBy();
উদাহরণ ব্যাখ্যা:প্রথম groupBy কোয়েরিটি published স্ট্যাটাস অনুযায়ী পোস্টগুলোকে গ্রুপ করে এবং প্রতিটি গ্রুপের জন্য পোস্টের সংখ্যা গণনা করে।দ্বিতীয় groupBy কোয়েরিটি authorId অনুযায়ী পোস্টগুলোকে গ্রুপ করে এবং প্রতিটি লেখকের পোস্টের মোট সংখ্যা গণনা করে।having ক্লজটি _count._all: { gt: 1 } ব্যবহার করে শুধুমাত্র সেই গ্রুপগুলোকে ফিল্টার করে যাদের পোস্টের সংখ্যা ১ এর বেশি।Transactionsবিবরণ: ট্রানজ্যাকশনগুলি ডেটাবেস অপারেশনগুলির একটি সেট যা একটি একক, অবিভাজ্য ইউনিট হিসাবে কার্যকর করা হয়। এর মানে হল যে হয় সমস্ত অপারেশন সফল হবে (commit), অথবা যদি কোনো একটি ব্যর্থ হয়, তবে সমস্ত অপারেশন রোলব্যাক করা হবে (rollback), ডেটাবেসের ইন্টিগ্রিটি নিশ্চিত করে।Batch Transactions: prisma.$transaction([...])বিবরণ: যখন আপনি একাধিক ইন্ডিপেন্ডেন্ট অপারেশন একসাথে চালাতে চান এবং নিশ্চিত করতে চান যে সব সফল হয়েছে, তখন ব্যাচ ট্রানজ্যাকশন ব্যবহার করা হয়।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function batchTransaction() {
  try {
    const [createUser, updatePost] = await prisma.$transaction([
      prisma.user.create({
        data: { name: 'David', email: 'david@example.com' },
      }),
      prisma.post.update({
        where: { id: 2 }, // ধরে নিচ্ছি আইডি 2 এর পোস্ট বিদ্যমান
        data: { published: true },
      }),
    ]);
    console.log('ব্যাচ ট্রানজ্যাকশন সফল হয়েছে।', createUser, updatePost);
  } catch (error) {
    console.error('ব্যাচ ট্রানজ্যাকশন ব্যর্থ হয়েছে:', error);
  }
}

batchTransaction();
Interactive Transactions: prisma.$transaction(async (tx) => {})বিবরণ: যখন আপনার ট্রানজ্যাকশনের মধ্যে একটি অপারেশনের ফলাফল অন্য অপারেশনের ইনপুট হিসাবে প্রয়োজন হয়, তখন ইন্টারেক্টিভ ট্রানজ্যাকশন ব্যবহার করা হয়। এটি একটি কলব্যাক ফাংশন গ্রহণ করে যা একটি ট্রানজ্যাকশন ক্লায়েন্ট (tx) পায়, যার মাধ্যমে আপনি আপনার অপারেশনগুলি চালান।উদাহরণ:import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function interactiveTransaction() {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // একটি নতুন ইউজার তৈরি করুন
      const newUser = await tx.user.create({
        data: { name: 'Eve', email: 'eve@example.com' },
      });

      // সেই ইউজারের জন্য একটি পোস্ট তৈরি করুন
      const newPost = await tx.post.create({
        data: {
          title: 'Hello from Eve',
          content: 'This is Eve\'s first post.',
          authorId: newUser.id,
        },
      });

      // যদি কোনো কারণে একটি শর্ত ব্যর্থ হয়, এটি স্বয়ংক্রিয়ভাবে রোলব্যাক করবে
      // if (newUser.name === 'Eve') {
      //   throw new Error('Something went wrong, rolling back');
      // }

      return { newUser, newPost };
    });
    console.log('ইন্টারেক্টিভ ট্রানজ্যাকশন সফল হয়েছে:', result);
  } catch (error) {
    console.error('ইন্টারেক্টিভ ট্রানজ্যাকশন ব্যর্থ হয়েছে:', error);
  }
}

interactiveTransaction();
উদাহরণ ব্যাখ্যা:ইন্টারেক্টিভ ট্রানজ্যাকশনে, আমরা প্রথমে একটি User তৈরি করি। তারপর সেই তৈরি হওয়া ইউজারের id ব্যবহার করে একটি Post তৈরি করি। যদি কোনো ধাপে ত্রুটি হয় (যেমন, ম্যানুয়ালি throw new Error()), তাহলে পুরো ট্রানজ্যাকশন রোলব্যাক হয়ে যাবে।Raw Queriesবিবরণ: Prisma-এর ORM মেথডগুলো বেশিরভাগ ক্ষেত্রে পর্যাপ্ত হলেও, কিছু জটিল বা ডেটাবেস-নির্দিষ্ট কোয়েরির জন্য সরাসরি SQL লিখতে হতে পারে। Prisma $queryRaw এবং $executeRaw মেথডগুলি ব্যবহার করে র ডেটাবেস কোয়েরি চালানোর সুবিধা দেয়।prisma.$queryRaw: ডেটাবেস থেকে ডেটা আনতে ব্যবহৃত হয় (যেমন SELECT স্টেটমেন্ট)। এটি একটি অ্যারে অফ অবজেক্ট ফেরত দেয়।prisma.$executeRaw: ডেটাবেস পরিবর্তন করতে ব্যবহৃত হয় (যেমন INSERT, UPDATE, DELETE, CREATE TABLE স্টেটমেন্ট)। এটি প্রভাবিত সারির সংখ্যা ফেরত দেয়।উদাহরণ:import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

async function runRawQueries() {
  // র কোয়েরি দিয়ে সকল ইউজার আনুন (SELECT)
  const usersRaw = await prisma.$queryRaw(
    Prisma.sql`SELECT id, name, email FROM "User" WHERE email LIKE '%@example.com%';`
  );
  console.log('র কোয়েরি থেকে ইউজার:', usersRaw);

  // র কোয়েরি দিয়ে একটি ইউজার আপডেট করুন (UPDATE)
  const updatedCount = await prisma.$executeRaw(
    Prisma.sql`UPDATE "User" SET name = ${'Frank'} WHERE email = ${'david@example.com'};`
  );
  console.log('র কোয়েরি থেকে আপডেট করা ইউজারের সংখ্যা:', updatedCount);
}

runRawQueries();
উদাহরণ ব্যাখ্যা:Prisma.sql ট্যাগড টেমপ্লেট লিটারেল ব্যবহার করা SQL ইনজেকশন থেকে রক্ষা করে এবং স্ট্রিংগুলোতে ডায়নামিক ভেরিয়েবল সঠিকভাবে এম্বেড করতে সাহায্য করে।$queryRaw একটি SELECT স্টেটমেন্ট চালায় এবং ডেটা ফেরত দেয়।$executeRaw একটি UPDATE স্টেটমেন্ট চালায় এবং প্রভাবিত সারির সংখ্যা ফেরত দেয়।Compound unique constraints & composite primary keyCompound unique constraints:বিবরণ: যখন আপনি চান যে একটি মডেলের একাধিক ফিল্ডের সংমিশ্রণটি অনন্য হোক, তখন কম্পাউন্ড ইউনিক কনস্ট্রেইন্ট ব্যবহার করা হয়। এটি নিশ্চিত করে যে এই ফিল্ডগুলোর কম্বিনেশন ডুপ্লিকেট হবে না।উদাহরণ: ধরুন আপনি একটি CourseEnrollment মডেল তৈরি করতে চান যেখানে একজন শিক্ষার্থী (studentId) একটি নির্দিষ্ট কোর্সে (courseId) শুধুমাত্র একবার এনরোল হতে পারবে।model CourseEnrollment {
  id        Int @id @default(autoincrement())
  studentId Int
  courseId  Int
  grade     String?

  @@unique([studentId, courseId]) // studentId এবং courseId এর কম্বিনেশন ইউনিক হবে
}
Composite primary key:বিবরণ: যখন একটি মডেলের প্রাইমারি কী একটি একক ফিল্ডের পরিবর্তে একাধিক ফিল্ডের সংমিশ্রণ হয়, তখন তাকে কম্পোজিট প্রাইমারি কী বলে। এটি প্রায়শই জয়েন টেবিলগুলিতে ব্যবহৃত হয়।উদাহরণ: _RelationalTable বা কাস্টম জয়েন টেবিলের জন্য।model UserCourse {
  userId   Int
  courseId Int
  assignedAt DateTime @default(now())

  @@id([userId, courseId]) // userId এবং courseId এর কম্বিনেশন প্রাথমিক কী হবে
}
উদাহরণ ব্যাখ্যা:@@unique([studentId, courseId]): CourseEnrollment মডেলে, studentId এবং courseId এর সংমিশ্রণটি ডেটাবেসে অনন্য হতে হবে। অর্থাৎ, একটি নির্দিষ্ট studentId এবং courseId এর কম্বিনেশন শুধু একবারই থাকতে পারবে।@@id([userId, courseId]): UserCourse মডেলে, userId এবং courseId এর সংমিশ্রণটি এই টেবিলের প্রাথমিক কী হবে। এটি স্বয়ংক্রিয়ভাবে এই দুটি ফিল্ডকে UNIQUE এবং NOT NULL করে দেয়।এই বিশদ বিবরণ এবং উদাহরণগুলি আপনাকে Prisma-এর প্রতিটি গুরুত্বপূর্ণ দিক বুঝতে সাহায্য করবে। আপনার Prisma শেখার যাত্রা সফল হোক!
