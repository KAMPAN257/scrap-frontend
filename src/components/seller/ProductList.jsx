import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"imageUrl",headerName:"Image",width:150},
        {field:"productName",headerName:"Product Name",width:150},
       
    ]
    const [users, setusers] = useState([])

    const getAllProducts = async()=>{

        const res = await axios.get("/getproducts")
        setusers(res.data.data)


    }
    useEffect(() => {
      
    
      getAllProducts()
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