import { useState, useRef,useEffect } from 'react'
import {reqResApi} from '../api/reqRes'
import { ReqResList, User } from '../interfaces/ReqResList'

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    useEffect(() => {
        requestUsers();
    }, [])
    
    /**
    * 
    */
     const requestUsers = async () => {
       try {
           const response = await reqResApi.get<ReqResList>('/users',{
               params: {
                   page:pageRef.current
               }
           })
           if (response.data.data.length > 0) {
               setUsers(response.data.data)
            }else{
               pageRef.current--;
               alert('No users found');
           }
       } catch (error) {
           console.log(error);
       }
    }
    const previousPage = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current --;
            requestUsers();
        }
    }
    const nextPage = () => {
        pageRef.current ++;
        requestUsers();
    }

  return { 
      users,
      nextPage,
      previousPage
  }
}
