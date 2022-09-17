import React, { useEffect } from 'react';
import { useState } from 'react';
import AddEntry from './components/AddEntry';
import { Button, SelectChangeEvent } from '@mui/material';
import CustomTable, { TableDataProps } from './components/Table';

const Home = () => {
  const [product, setProduct] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [tableData, setTableData] = useState<TableDataProps[]>([
    { productName: '', pricePerUnit: 0, quantity: 0 }
  ]);

  const handleQuantityChange = (e: SelectChangeEvent) => {
    e.target.value &&
      !isNaN(Number(e.target.value)) &&
      setQuantity(e.target.value as unknown as number);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value && setProduct(e.target.value as string);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    e.target.value &&
      !isNaN(Number(e.target.value)) &&
      setPrice(e.target.value as unknown as number);
  };

  // Open Modal
  const handleModalOpen = (event: {
    currentTarget: React.SetStateAction<HTMLButtonElement | null>;
  }) => {
    setIsModalOpen(!isModalOpen);
    setAnchorEl(event.currentTarget);
  };

  // Close Modal
  const handleModalClose = () => {
    setAnchorEl(null);
    setProduct('');
    setPrice(0);
    setQuantity(0);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log(quantity, product, price);
    setTableData(oldValues => [
      ...oldValues,
      {
        productName: product,
        pricePerUnit: price,
        quantity: quantity
      }
    ]);
    console.log(tableData);
    handleModalClose();
  };

  const canBeOpen = isModalOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div className='flex min-h-screen'>
      <div className='w-20 h-20'>
        <Button
          aria-describedby={id}
          variant='contained'
          onClick={handleModalOpen}
        >
          Open Popover
        </Button>
      </div>
      {isModalOpen && (
        <AddEntry
          id={id}
          anchorEl={anchorEl}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          product={product}
          price={price}
          quantity={quantity}
          handleProductChange={handleProductChange}
          handlePriceChange={handlePriceChange}
          handleQuantityChange={handleQuantityChange}
          handleSubmit={handleSubmit}
        />
      )}
      {/* {tableData.length > 0 && (
        <div className='flex items-center justify-center'>
          <CustomTable rows={tableData} />
        </div>
      )} */}
    </div>
  );
};

export default Home;
