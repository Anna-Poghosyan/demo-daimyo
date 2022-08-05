import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from'./AlertPopup.module.css';


export const AlertPopup = (props) => {
    const [isShowAlert, setisShowAlert] = useState(props.isShowAlert);

    function closePopup() {
        setisShowAlert(false)
    }

    if(isShowAlert) {
        return (
            <div className={classes.popup}>
                <button onClick={closePopup} className={classes.close}>X</button>
                <p className={classes.popupP}>{props.alertMessage}</p>
            </div>
        ) 

    } else return

   

}