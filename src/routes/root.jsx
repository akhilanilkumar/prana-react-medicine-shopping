import {Outlet, useLoaderData} from "react-router-dom";
import ResponsiveAppBar from "../header/header";
import {FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import UserList from "../contact/user-list";

const Root = () => {
    const users = useLoaderData();
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div id="sidebar">
                <div>
                    <form id="search-form" role="search">
                        <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type='text'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon aria-label="toggle password visibility"/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                        <UserList users={users}/>
                    </form>
                </div>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}

export const loader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await response.json();
}

export default Root;