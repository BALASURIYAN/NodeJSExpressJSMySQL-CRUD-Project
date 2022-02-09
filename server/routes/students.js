const express=require("express");
const router=express.Router();

const studentController=require("../controllers/studentscontroller");


//view all records
router.get("/",studentController.view);


//Add new records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);

//update records
router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);

//delete record
router.get("/deleteuser/:id",studentController.deleteuser);

router.get('',(req,res)=>{
    res.render("home");
  });//homepage
  

  module.exports=router;