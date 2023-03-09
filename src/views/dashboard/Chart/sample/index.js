import { useState } from 'react';
import useAuth from 'hooks/useAuth';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// import UserTables from 'views/Tables/UserTables';

// ==============================|| SAMPLE PAGE ||============================== //
// const UserData =[
//     {id:1,name:'aa',username:'aaaa'},
//     {id:2,name:'bb',username:'bbbb'}
// ];

// const [users,setUsers] = useState(UserData);
// import { useDispatch, useSelector } from 'store';

function SampPage() {
    const { MyQuery } = useAuth();
    // const dispatch = useDispatch();
    const UserData = [
        { id: 1, name: 'aa', username: 'aaaa' },
        { id: 2, name: 'bb', username: 'bbbb' }
    ];

    const display = async () => {
        alert('button clicked');
        const Res = await MyQuery();
    };

    const display1 = async () => {
        alert('button clicked');
        const GroupId=2
        try {
              // dispatch({ type: "SET_LOADING" });
            //   const users = await searchUsers(text);
        const Res = await SecondQuery(GroupId);
        dispatch({ type: "GET_USERS", payload: Res });  
          } catch (error) {
            console.log(error.response.data.error)
          }
        };
    const [users,setUsers] = useState(UserData);
    // console.log(users)
    return(
    <MainCard title="New Sample Card">
        {/* <Typography variant="body2">
            This is sample page 
        </Typography> */}
        <button type="button" onClick={display}>Click</button>
        <button type="button" onClick={display1}>Second Query</button>
    
        {/* <UserTables users = {users} /> */}
        {/* <UserTables/> */}
    </MainCard>
 );
} ;

export default SampPage;