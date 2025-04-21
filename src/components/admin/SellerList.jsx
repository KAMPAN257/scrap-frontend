import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SellerList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"fullName",headerName:"Full Name",width:150},
        {field:"email",headerName:"Email",width:150},
        {field:"password",headerName:"Password",width:150},
        {field:"phoneNumber",headerName:"Phone No",width:150},
        {field:"CompanyName",headerName:"Company Name",width:150},
        {field:"roleId",headerName:"Role Id",width:150},
        {field:"address",headerName:"address",width:150},
    ]
    const [users, setusers] = useState([])

    const getAllSeller = async()=>{

        const res = await axios.get("/getallsellers")
        setusers(res.data.data)


    }
    useEffect(() => {
      
    
      getAllSeller()
    }, [])
    


  return (
    <div style={{ textAlign: "center" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      ></DataGrid>
    </div>
  );
};