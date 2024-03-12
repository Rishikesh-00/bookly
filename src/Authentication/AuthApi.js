export const CreateAccount=async(userdata)=>{
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/Auth/createAccount',{
            method:'POST',
            body:JSON.stringify(userdata),
            headers:{'content-type':'application/json'}
        })
        response.resolve();
    })
}