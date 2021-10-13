const express = require('express');
const app = new express();
const TWILO_AUTH_TOKEN = 'ca64c2dd7f1ab912a4042aac5b22946e';
const TWILO_ACCOUNT_SID = 'AC3a17131d33e15ecd8195e0b9255a7567'
const TWILO_Service_ID = 'VA623805758806abc2c5484e4ae317db33'

const smsService = require('twilio')(TWILO_ACCOUNT_SID,TWILO_AUTH_TOKEN);
app.use(express.static('./html'))
app.use(express.json());

app.post('/login',(req,res)=>{
    const user = req.body;
    smsService
        .verify
        .services(TWILO_Service_ID)
        .verifications
        .create({
            to:`+91${user.phone}`,
            channel: 'sms'
        }).then(
            (data)=>{
                res.status(200).send(data)
            }
        ).catch(e=>{
              res.status(500).send(e)
        })
})

app.post('/verify',(req,res)=>{
    const user = req.body;
    smsService
        .verify
        .services(TWILO_Service_ID)
        .verificationChecks
        .create({
            to: `+91${user.phone}`,
            code: user.code
        }).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            res.status(200).send(err)
        })
        
})


app.listen(4000, console.log("server started at 4000"))