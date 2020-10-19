
const generateDataToSend = (code,body,message)=>{
    let dataToSend = {
        code,
        message,
        body
    }
    return(dataToSend)
}


exports.generateDataToSend = generateDataToSend