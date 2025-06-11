import {  PrismaClient } from "../generated/prisma";

 
 const prisma = new PrismaClient();

 const main = async()=> {

    // get all data
const getAllData = await prisma.post.findMany();

// findFirst data according to the consition

const findFirst = await prisma.post.findFirst({

    where:{
        id: 1
    }
})


// findFirst data according to the condtn or no data then show eeror

// const showError = await prisma.post.findFirstOrThrow({

//     where:{
//         id: 20
//     }
// })

// find unique data
const unique = await prisma.post.findUnique({
    where : {
        id: 5
    }
})

console.log(getAllData);
console.log(findFirst)
// console.log(showError)
console.log(unique)
 }
 main()
