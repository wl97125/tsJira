import react from "react"

export const SearchPanel=({users,param,setParam})=>{
    
    
    // setParam(Object.assign({},param,{name:evt.target.value}))
    return <form >
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })} />
            <select value={param.personId} onChange={e=>setParam({
                ...param,
                personId:e.target.value
            })}>
                <option value="">负责人</option>
                {
                    users.map(user=><option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}