import axios from "axios";


export const signUpaction = async (formdata)=>{
  return await axios.post(`http://localhost:5000/signUp`,formdata,{
       headers:{
        "Content-Type": "application/json"
    },
    withCredentials:true
    }).then(response => response.data)
}

export const signInaction = async (formdata)=>{
  return await axios.post(`http://localhost:5000/signIn`,formdata,{
       headers:{
        "Content-Type": "application/json"
    },
    withCredentials:true
    }).then(response => response.data)
}

export const signOut = async ()=>{
  return await axios.get(`http://localhost:5000/signOut`,{
    withCredentials:true
  })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
}

export const isAuth = async () => {
   return await axios.get('http://localhost:5000/dashboard',{
    withCredentials:true
  }).then(response => response.data)
  .catch(err => console.log(err))
}