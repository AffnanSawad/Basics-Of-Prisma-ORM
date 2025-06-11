 import { PrismaClient } from "../generated/prisma"
 
 
 const prisma = new PrismaClient()
 
 const main = async() => {
     
   
   const update = await prisma.post.update({

    where : {
        id : 1 
    } ,

    data: {
        price : 850
    }
   })
 


// updateMany
// 👉 এটি একাধিক রেকর্ড একসাথে আপডেট করতে ব্যবহার হয়।

// where ক্লজে যেসব রেকর্ড মিলে যাবে, তাদের সবগুলোকেই আপডেট করবে।

// এটা unique না, সাধারণ condition ও ব্যবহার করা যায়।

// 🧪 উদাহরণ:

// ts
// Copy
// Edit
// await prisma.user.updateMany({
//   where: { role: "user" },
//   data: { active: false }
// });
// 👉 এখানে যাদের role "user", তাদের সবার active ফিল্ড false হয়ে যাবে।


 
console.log(update)
 }
 main()