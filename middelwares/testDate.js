

const testDate =(req,res,next)=>{

    let date = new Date();
    let day = date.getDate();
    let hours = date.getHours();
    if(day > 5 || hours < 9 || hours > 17){
        res.send('we are closed in this moment')

    }else{
        next()
    }
    
}
module.exports = testDate