import axios from "axios"


export const commonApi = async(httpRequest, url, reqBody ) =>{
    
    let reqConfig = {
        method:httpRequest,
        url, //because key and value are the same 
        data: reqBody,
        headers: {"Content-Type":"application/json" }

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
 
}