import { PrismaClient } from "../generated/prisma"


const prisma = new PrismaClient()

const main = async() => {
    
  
  const insertData = await prisma.post.create({

    data:{
      name : "My Pet ",
      author : 'Jack Hossain',
      isFamous: false ,
      price : 600
    }
  })



    const getReadData = await  prisma.post.findMany()
    
    
    
    console.log(getReadData)
    console.log(insertData)


}
main()