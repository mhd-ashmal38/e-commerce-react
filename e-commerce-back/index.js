// import dotenv
require('dotenv').config()

// import express
const express=require('express')

// import cors
const cors=require('cors')

// create server using express
const cartServer=express()

// use cors in server
cartServer.use(cors())

// use parser
cartServer.use(express.json())

// customize port
const PORT=4000||process.env.PORT

// run server
cartServer.listen(PORT,()=>{
    console.log(`cart server strated at port ${PORT}`);
})