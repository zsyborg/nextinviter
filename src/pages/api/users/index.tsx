import { NextApiRequest, NextApiResponse } from 'next'
import Card, {Cards} from '../../../models/Card'
const MONGODB_URI = process.env.MONGODB_URI!
import dbConnect from '../../../lib/dbConnect'
import clientPromise from '../../../lib/mongodb'
import { MongoClient } from 'mongodb'
import NextCors from 'nextjs-cors'




// const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'

// async function listDatabases(client: MongoClient){
//   const db = client.db('Inviter')
//   const coll = db.collection('Users')
//   const items = coll.find()
//   // console.log(items)
//   return items
// };


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    
    
    
    ////////////////////////
    /////GET All Users Details 
    ////////////////////////
    
    
    case 'GET':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
      var opts:  {
        dbName: 'Inviter',
        server:
        { socketOptions: 
          { 
            socketTimeoutMS: 5000, 
            connectTimeoutMS: 10000 
          }
        }
      }

      
      
       
      try {

        
    const clt = new MongoClient(MONGODB_URI)
    
    const huntCollection = clt.db("Inviter").collection("Users")
    // const crd = await huntCollection.find({}).toArray()
    const crd = await huntCollection.find().sort({clicks: -1}).toArray()
      

        res.status(200).json({ success: true, data: crd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

////////////////////////
// POST - Create New User
//////////////////////// 
    case 'POST':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

        const clt = new MongoClient(MONGODB_URI)
    const huntCollection = clt.db("Inviter").collection("Users")
    const curruser = JSON.stringify(req.body)
    const usr = JSON.parse(curruser)
    const wlt = usr.wallet

    // const getAllUsers = await huntCollection.findOne({ wallet: wlt }, { projection: { _id: 0 } })

     // Check if the user already exists
     const existingUser = await huntCollection.findOne({ wallet: wlt });
    if (existingUser) {
      res.status(201).json({ success: true, data: existingUser })
      clt.close()
    } else {
      const crd = await huntCollection.insertOne(req.body)
      res.status(201).json({ success: true, data: crd })
      clt.close()
    }
    // Condition to check is user exists. Create if doesn't
    /*if (getAllUsers.wallet === wlt) {
      console.log("User Exists")
      res.status(201).json({ success: true, data: getAllUsers, user: "User Exists" })
    } else {
      const data = {
        wallet: req.body.wallet,
        click: 0
      }
      console.log("User Doesn't Exists")
    }
    */
      break

      ////////////////////////
      // PATCH - Update User Click score
      //////////////////////// 
          case 'PATCH':
            
        await NextCors(req, res, {
          // Options
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
          origin: '*',
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
       });
       
       const clty = new MongoClient(MONGODB_URI)
       const usrCollection = clty.db("Inviter").collection("Users")
       
       const currusr = JSON.stringify(req.body)
       const usry = JSON.parse(currusr)
       const wlty = usry.wallet
       
       const ucl = JSON.stringify(req.body)
       const cl = JSON.parse(ucl)
       const userclicks = cl.clicks
       const lvl = cl.level
       
       
       console.log("PATCH " + wlty)
          const patchUserClick = await usrCollection.updateOne({ wallet: wlty }, { $set: { clicks: userclicks, level: lvl } })
          res.status(200).json({ success: true, data: patchUserClick })
          clty.close()


      // Default if all others fail
    default:
      res.status(400).json({ success: false, data: "Default Output" })
      break
  }
}
