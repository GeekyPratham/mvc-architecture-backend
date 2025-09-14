const express = require ("express")
const router = express.Router()
const {handleUserSignUp ,handleUserSignIn , handleUpdateUserInfo, handleGettingAllUser} = require("../controllers/user.js")

const {authMiddleware} = require("../middlewares/index.js")


router.post("/signup",handleUserSignUp);


router.post("signin",handleUserSignIn);


router.put("/",authMiddleware,handleUpdateUserInfo);



router.get("/bulk",handleGettingAllUser);

module.exports = router;