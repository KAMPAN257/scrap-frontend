import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const CartList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"buyerId",headerName:"Image",width:150},
        {field:"productId",headerName:"Product Name",width:150},
        {field:"productdetailId",headerName:"Product detail Id",width:150},
        {field:"quantity",headerName:"Quantity",width:150},
        {field:"unit",headerName:"Unit",width:150},
        {field:"totalPrice",headerName:"Total Price",width:150},
        {field:"status",headerName:"Status",width:150},
       
    ]
    const [users, setusers] = useState([])

    const getAllCarts = async()=>{

        const res = await axios.get("/getcart")
        setusers(res.data.data)


    }
    useEffect(() => {
      
    
      getAllCarts()
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