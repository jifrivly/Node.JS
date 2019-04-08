module.exports.addNum = (x,y) => {return(x+y)}
module.exports.subNum = (x,y) => {return(x-y)}
module.exports.mulNum = (x,y) => {return(x*y)}
module.exports.devNum = (x,y) => {
    if(y == 0){
        return "Zero devision not accepted.."
    }
    else{
        return(x/y)
    }
}