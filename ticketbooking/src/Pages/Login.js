import React,{useState} from "react"
import "../Css/Login.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import movie from "../Images/movie.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';


function Login() {
  const navigate = useNavigate();
  const  onLoginClick=(e)=>{
    navigate("/dashboard");
}
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("hai");
    console.log(data);
    navigate("/Booking");
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xlg" className="main-banner">
            
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container className="infobox pd-0">
            <Grid lg={7} xs={12} sm={12} md={10}  >
              <Grid container>
                <Grid
                  item
                  lg={6}
                  xs={12}
                  sm={12}
                  md={6}
                  square
                  className="pd-0 lg-lf-bg"
                >              
                  <Box
                    className="login-lf-sec"
                  >

                    <Box className="img-sec-lg">
                      <Box className="mui-image-wrapper">
                        {/* <Image src={Logo} className="img-logo" alt="Logo" /> */}
                      </Box>
                    </Box>
           
                    <Box className="login-form-sec" component="form">
                      <Typography
                        component="h5"
                        variant="h5"
                        className="log-h5"
                      >
                        Login
                      </Typography>
                      <Box className="mb-3" sx={{ height: "10%" }}>
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Please sign in to continue
                        </label>
                        <TextField
                          id="outlined-basic"
                          size="small"                     
                          label="Username"
                          variant="outlined"
                          className="form-control"
                          {...register("userName", { required: "This Field is Required",
                        pattern :{
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message:"Invalid Username"
                        },
                        })}
                          error={Boolean(errors.userName)}
                          helperText={errors.userName?.message}
                        />
                      </Box>
                      <Box className="mb-3">
                        <TextField
                          id="outlined-basic"
                          size="small"
                          label="Password"
                          variant="outlined"
                          className="form-control"
                          type={showPassword ? 'text' : 'password'}
                          InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton                             
                               aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                className="eye-icon"
                              >                              
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                              </IconButton>
                            </InputAdornment>
                          )
                          }}
                          {...register("password",{ required: "This Field is Required",
                          pattern :{
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:"Invalid Username"
                          },
                         })}
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                        />                         
                      </Box>
                      <Box
                        className="bd-cnt"
                        sx={{ display: "flex", flexWrap: "nowrap" }}
                      >
                        <Box className="col-auto">
                          <Checkbox {...label} />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </Box>
                        <Box className="col-auto">
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Forgot Password ?
                          </label>
                        </Box>
                      </Box>
                      <Box className="btn-sec">
                        <Button 
                        type="submit"  
                        onClick={handleSubmit(onSubmit)}                   
                          variant="contained"
                          className="btn btn-success login-btn"
                        >
                          Login
                        </Button>
                       
                      </Box>
                    </Box>
                  </Box>             
                </Grid>
                <Grid
                  className=" pd-0 lg-r-bg log-rig-sec"
                  item
                  sm={12}
                  md={6}
                  lg={6}
                  xs={12}
                  elevation={6}
                  square
                >
                  <Box className="login-Rg-sec">
                    <Box className="img-sec-lg-rgt img-alg">
                      <Image src={movie} className="img-wd" alt="Logo" />
                    </Box>
                    <Box className="log-cont-p">
                      <p>
                        Enjoy the movies!!!..
                      </p>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>   
    </Container>
  );
}

export default Login;
