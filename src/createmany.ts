import { PrismaClient } from "../generated/prisma"


const prisma = new PrismaClient()

const main = async() => {
    
  
  const insertManyData = await prisma.post.createMany({

    data:[
        {
      name : "My Pet ",
      author : 'Jack Hossain',
      isFamous: false ,
      price : 600
    },
    {
        name: " 13",
        author: "sqsqd",
        isFamous : false ,
        price : 400
    }
]
  })

   console.log(insertManyData)


}
main()