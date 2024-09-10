import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/userTypes";

//const [user,setUser] = useState(initalState)
//user 
//Redux toolkit
interface UsersState{
    users:User[],
    filteredUsers:User[],
    status:"idle"|"loading"|'failed',
};

//setUser
const initialState:UsersState ={
    users:[],
    filteredUsers :[],
    status:"idle",
};

export const fetchUsers= createAsyncThunk('users/fetchUsers', async ()=>{
    const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data as User[];
});

const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
        filterUsers: (state, action) => {
            const { name, username, email, phone } = action.payload;
            state.filteredUsers = state.users.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase()) &&
                user.username.toLowerCase().includes(username.toLowerCase()) &&
                user.email.toLowerCase().includes(email.toLowerCase()) &&
                user.phone.toLowerCase().includes(phone.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'idle';
            state.users = action.payload;  
            state.filteredUsers = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = 'failed';
        });
    },
});



export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;

