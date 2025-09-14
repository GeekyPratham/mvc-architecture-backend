const express = require ("express")
const router = express.Router();
const {handleCheckBalance,handleTransferMoney}  = require("../controllers/account")
const { authMiddleware } = require("../middlewares/index")


router.get("/balance",authMiddleware,handleCheckBalance);
router.post("/transfer",authMiddleware,handleTransferMoney);

module.exports=router;