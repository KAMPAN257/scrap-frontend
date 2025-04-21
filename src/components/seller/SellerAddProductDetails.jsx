import React, { useState } from 'react';
import axios from 'axios';
//import SellerSidebar from './SellerSidebar'
import styles from '../../assets/SellerAddProduct.module.css'; // Create this CSS file

const SellerAddProductDetails= () => {
  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL after upload
  const [imageFile, setImageFile] = useState(null);
  const [price, setPrice] = useState('');
 // const [sellerId, setSellerId] = useState('SELLER_ID_HERE'); // Replace with actual seller ID
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [addProductError, setAddProductError] = useState(null);
  const [addProductSuccess, setAddProductSuccess] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleImageUpload = async () => {
    if (!imageFile) {
      setUploadError('Please select an image.');
      return null;
    }

    setUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await axios.post('/addprodetailwithfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(response.data.imageUrl);
      setUploading(false);
      return response.data.imageUrl;
    } catch (error) {
      console.error('Image upload failed:', error);
      setUploadError('Failed to upload image.');
      setUploading(false);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAddProductError(null);
    setAddProductSuccess(null);

    let uploadedImageUrl = imageUrl;
    if (imageFile) {
      uploadedImageUrl = await handleImageUpload();
      if (!uploadedImageUrl) return; // Stop if image upload fails
    }

    try {
      const response = await axios.post('/addprodetailwithfile', {
        productName,
        imageUrl: uploadedImageUrl,
        price
        //sellerId,
        // Add other necessary fields if your ProductModel has them
      });

      console.log('Product added:', response.data);
      setAddProductSuccess('Product added successfully!');
      // Reset form fields
      setProductName('');
      setImageUrl('');
      setImageFile(null);
    } catch (error) {
      console.error('Failed to add product:', error.response?.data?.message || error.message);
      setAddProductError('Failed to add product. Please check the details.');
    }
  };

  return (
    <div className={styles.addProductContainer }>
      <h1>Add New Product Details</h1>
      {addProductSuccess && <p className={styles.success}>{addProductSuccess}</p>}
      {addProductError && <p className={styles.error}>{addProductError}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Product Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {uploadError && <p className={styles.error}>{uploadError}</p>}
          {uploading && <p>Uploading image...</p>}
          {imageUrl && !uploading && <img src={imageUrl} alt="Product Preview" className={styles.imagePreview} />}
        </div>
        <button type="submit" disabled={uploading}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default SellerAddProductDetails;

//--------------------------------------

// import React from 'react'

// export const SellerAddProduct = () => {
//   return (
//     <div>SellerAddProduct</div>
//   )
// }
// export default SellerAddProduct;
