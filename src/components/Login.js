import homepage from "./image/homepage.png";
import { Box } from "@mui/material";

const Login = () => {
  // const innerHeight =  "30%";
  return (
    <Box display="flex" h justifyItems="center">
      <div>
        <img
          src={homepage}
          alt="homepage"
          style={
            {
              // Here we put style
            }
          }
          className=""
        />
      </div>
      <div>
        <div>
          <h1>Login</h1>
          <h2></h2>
        </div>
      </div>
    </Box>
  );
};

export default Login;
