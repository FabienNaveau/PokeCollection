import * as React from "react";
import { 
  Box,
  Button,
  Typography,
  TextField, 
  FormControl, 
  InputLabel, 
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Signup() {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <Box sx= {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Typography sx={{ m: 1, width: '25ch' }}>
                Pas encore inscrit ? S'inscrire.
            </Typography>
            <TextField id="username" label="Username *" variant="outlined" sx={{ m: 1, width: '25ch', color: "white" }} />
            <TextField id="emailSignup" label="Email *" variant="outlined" sx={{ m: 1, width: '25ch', color: "white" }} />
            <FormControl sx={{ m: 1, width: '25ch', bgcolor: "#EC7A6C" }} variant="outlined">
                <InputLabel htmlFor="passwordSignup">Password *</InputLabel>
                <OutlinedInput
                    id="passwordSignup"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                <Button sx={{
                    m: 1,
                    width: "25ch"
                }}
                type="submit"
                variant="contained">S'inscrire</Button>
            </Box>
    )
}
