import './App.css';
import { useEffect, useState} from 'react';
import { Button, Grid } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Canvas from "./Canvas";

import CapyButton from "./CapyButton";


let theme = createTheme({
  palette: {
    primary: {
      main: "#FAC460",
    },
    secondary: {
      main: "#9C9B69",
    }
  }
});

theme = responsiveFontSizes(theme);

function App() {

  const [uploadedImage, setUploadedImage] = useState();

  const onImageUpload = (event) => {
    console.log(event);
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
  }

  const onButtonClick = () => {
    console.log("capyfying image...");
  }

  const isMobile = useMediaQuery('(max-width:600px)');


  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              borderColor:"#9C9B69",
              borderStyle: "dashed",
              borderWidth: theme.spacing(1),
              padding: theme.spacing(4),
              width: "75%",
              height: "400px",
            }}
          >
            {uploadedImage ? 
              <img src={uploadedImage} width={isMobile ? "auto": "40%"} height={isMobile ? "200px" : "auto"}/> : 
              <Button
                  variant="contained"
                  component="label"
                  color='secondary'
                >
                  upload file
                  <input
                    type="file"
                    hidden
                    accept="image/*" 
                    onChange={onImageUpload}
                  />
              </Button>
            }
          </Grid>
          
          <Grid>
            <Canvas />
          </Grid>
        </Grid>
        <CapyButton onButtonClick={onButtonClick}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
