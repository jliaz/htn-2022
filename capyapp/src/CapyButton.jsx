import React from "react";
import { Button } from "@mui/material";

const CapyButton = (props) => {

    const { onButtonClick } = props;
    const onClicked = () => {
        onButtonClick();
    }

    return(
        <Button 
        sx={{
            borderWidth: "5px",
            backgroundColor: "white"
        }}
        onClick={onClicked}>Capyfy</Button>
    )

}

export default CapyButton;