import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async() => {
    
    // upsert : update hobe , update id na thakle create korbe id + all data
    const upsertData = await prisma.post.upsert({


        where : {
            id : 18 
        },

        update : {

            name : 'new book',
             
        },
        
        create: {
              name : 'new book',
            author: "ami",
            isFamous : true ,
            price : 120 
        }
     
    })
 

    console.log(upsertData)
 
}
main()