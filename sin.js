const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const sechma = require("./sechma")

router.post("/sinup", async (req,res)=>{
    let db = new sechma(req.body)
    db.save().then(response=>{
        res.json(response)

    }).catch(error=>{
        res.json(error.message)
    })
    
})

router.put("/update",async (req,res)=>{
    //let update = await sechma.where("roll_id").equals(req.body.roll_id)
    //console.log(update);
      //if(update != 0){

        let set = await sechma.updateOne({"roll_id":req.body.roll_id},{$unset:{"Frist_name":req.body.Frist_name}})
        res.json(set)
     // }
      // else{
      //   res.json({"message":"not much"})
      // }
   

})
module.exports=router