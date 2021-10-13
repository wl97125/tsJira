import React , { useState,useEffect } from 'react'
import { SearchPanel } from './searchPanel';
import List from './list'
import { cleanObject, useDebounce, useMount } from 'utiles';
import * as qs from 'qs'

const apiUrl=process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
    const [users,setUsers]=useState([]);
    const [param,setParam]=useState({
        name:'',
        personId:''
    })
    const debouncedParam=useDebounce(param,2000)
    const [list,setList]=useState([]);
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debouncedParam])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })
    return(
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}/>
            <List list={list} users={users}/>
        </div>
    )
    } 
export default ProjectListScreen;