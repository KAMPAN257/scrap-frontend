import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductDetailList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"productId",headerName:"Product Id",width:150},
        {field:"imageUrl",headerName:"Image",width:150},
        {field:"productName",headerName:"Product Name",width:150},
        {field:"price",headerName:"Price",width:150},
       
    ]
    const [users, setusers] = useState([])

    const getAllProductDetail = async()=>{

        const res = await axios.get("/getproductdetail")
        setusers(res.data.data)


    }
    useEffect(() => {
      
    
      getAllProductDetail()
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