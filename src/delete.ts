 import { PrismaClient } from "../generated/prisma"
 
 
 const prisma = new PrismaClient()
 
 const main = async() => {
      

// single
const deleteData = await prisma.post.delete({

    where : {
        id: 14
    }
})


    // many
    const deleteManyData = await prisma.post.deleteMany({
        where : {
           isFamous : false
        }
    })

   
    

    console.log(deleteData)
    console.log(deleteManyData);
 
 }
 main()