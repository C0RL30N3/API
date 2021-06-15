import axios from 'axios';
import React,{useState , useEffect} from 'react'

const UserList = () => {
    const [listOfUSer,setListOfUSer]=useState([]);
    useEffect(() => {
    
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setListOfUSer(res.data);
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    listOfUSer.map(user => 
                        <li key={user.id}>
                            Name: {user.name}
                            <br />
                            UserName: {user.username}
                            <br />
                            Email: {user.email}
                            <br />
                            <br />
                        </li>
                        )
                }
            </ul>
        </div>
    )
}

export default UserList
