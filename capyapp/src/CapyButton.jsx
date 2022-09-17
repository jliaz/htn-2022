import React from "react";
import { Button } from "@mui/material";

const CapyButton = (props) => {

    const { onClick } = props;
    const onClicked = () => {
        onClick();
    }

    return(
        <Button 
        sx={{
            borderWidth: "5px",
            backgroundColor: "white"
        }}
        onClick={onClicked}>Go</Button>
    )

}

export default CapyButton;