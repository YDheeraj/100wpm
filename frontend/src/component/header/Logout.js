import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {setUser } from '../../actions';

const Logout = () => {

  const sendUserStatus = useDispatch();

const history = useNavigate();
    useEffect(() => {
      fetch('logout',{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }
      }).then((res)=>{

         sendUserStatus(setUser(false));
         
           history("/login",{replace:true});
           if(res.status!==200){
            const error =new Error(res.error);
            throw error;
           }
      }).catch((err)=>{
        console.log(err);
      });
    });
    

  return (
    <div><h1 style={{color:"white"}}>
        This is Logout Page 
    </h1></div>
  )
}

export default Logout