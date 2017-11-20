var express = require('express');
var router = express.Router();
var answer = 0
var maths= {}
var history = []

router.post('/', function (req, res) {
    maths = req.body.mathObject

    if(maths.type == 'add') {
        answer = Number(maths.x) + Number(maths.y)
    }
    else if (maths.type == 'subtract') {
        answer = maths.x - maths.y
    }
    else if (maths.type == 'multiply') {
        answer = maths.x * maths.y
    }
    else if (maths.type == 'divide') {
        answer = maths.x / maths.y
    }
    console.log (answer)
    history.push(maths.x +" "+maths.type+' '+' '+maths.y+' = '+answer)
    res.sendStatus(200)
})

router.get('/', function (req,res) {
    res.send("Your Answer your most holy and blessed: " +answer)
})

router.get('/history', function(req,res){
    res.send(history)
})

module.exports = router;