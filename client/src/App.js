import * as React from "react";
import LoginSignup from "./modules/LoginSignup";
import { 
  Box
} from "@mui/material";


export default function Home() {

  return (
    <Box sx={{
      color: "white",
      bgcolor: "#EC7A6C",
      height: "100vh",  
      display: "flex", 
      alignItems: "center",
      justifyContent: "center"    
    }}>
      <LoginSignup />
    </Box>
  );
}


