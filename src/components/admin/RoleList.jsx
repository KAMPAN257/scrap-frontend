import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const RoleList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"name",headerName:"Name",width:150},
        {field:"description",headerName:"Description",width:150},
        
    ]
    const [users, setusers] = useState([])

    const getAllRoles = async()=>{

        const res = await axios.get("/roles")
        setusers(res.data.data)


    }
    useEffect(() => {
      
    
      getAllRoles()
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