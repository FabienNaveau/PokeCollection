import Login from "./components/Login";
import Signup from "./components/Signup"
import {
    Box,
    Divider
} from "@mui/material"

export default function LoginSignup() {
    return(
        <Box sx={{
            display: "flex",
            gap: "30px" 
        }}>
            <Login />
            <Divider sx={{bgcolor: "white"}} orientation="vertical" flexItem></Divider>
            <Signup />
        </Box>
    )
}