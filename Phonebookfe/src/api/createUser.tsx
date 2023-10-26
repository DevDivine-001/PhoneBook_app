import axios  from "axios"


// const url : string = "mongodb://localhost:27017/contact"
const url : string = "http://localhost:3204"

export const createuser =async (data:any) => {
    try {
        return axios.post(`${url}/api/user-contacts`, data).then((res)=>{
            return res.data.data
            // console.log("this is data",res.data)
        });
    } catch (error) {
        
    };
};

export const readuser =async (data:any) => {
    try {
        return axios.get(`${url}/api/view-contacts`, data).then((res)=>{
            return res.data.data
            // console.log("this is data",res.data)
        });
    } catch (error) {
        
    }
}
export const Deleteuser =async (contactID:any) => {
    try {
        return axios.get(`${url}/api/${contactID}/delete`).then((res)=>{
            return res.data.data
            // console.log("this is data",res.data)
        });
    } catch (error) {
        
    }
}