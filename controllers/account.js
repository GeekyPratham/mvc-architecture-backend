const Account  = require("../models/account")

async function handleCheckBalance(req,res){
    const account = await Account.findOne({
        userId:req.userId
    })

    res.status(200).json({
        balance:account.balance
    })
}

async function handleTransferMoney(req,res){
    console.log(req.userId)
    // console.log(req.body)
    // console.log("transfer start")
    const session = await mongoose.startSession();
    session.startTransaction();

    const {amount,to} = req.body; // this details get from the frontend/user
    // console.log("amount")
    // console.log(amount)
    // console.log("to")
    // console.log(to)
    const account =await Account.findOne({
        userId:req.userId
    }).session(session);
    console.log(account.userId)
    // console.log(account.balance)
    
    if(!account || account.balance<amount){
        console.log("i am here and account has insufficient balance")
        await session.abortTransaction();
        return res.status(400).json({
            msg:"insufficient balance"
        })
    }

    const toAccount =await Account.findOne({
        userId:to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"invalid account"
        })  
    }
    // console.log("i am here")
    // every thing is correct then perform transaction

    // sender
    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance:-amount
        }
    }).session(session)

    // receiver
    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    }).session(session)

    // commit the transaction

    await session.commitTransaction();

    return res.status(200).json({
        message:"amount transfer successfully"
    })
}

module.exports={
    handleCheckBalance,
    handleTransferMoney,

}