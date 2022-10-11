import { Button } from "@mui/material";

import React from 'react'

const Buttoncomp = (props) => {
  return (
    <>
      <Button 
        key={props.k}
        onClick={props.f}
        value = {props.data}
        variant="contained" sx={{
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        mx: '1rem',
        my: '1rem',
        color: "black",
        bgcolor: "white", ':hover': {
          bgcolor: 'primary.light',
          color: 'white',
        },
      }}>{props.data}</Button>
    </>
  )
}

export default Buttoncomp