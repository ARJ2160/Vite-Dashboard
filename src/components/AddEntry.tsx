import React from 'react';
import Popover from '@mui/material/Popover';
import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Popper,
  Select,
  TextField
} from '@mui/material';

const AddEntry = ({
  id,
  anchorEl,
  isModalOpen,
  handleModalClose,
  product,
  price,
  quantity,
  handleProductChange,
  handlePriceChange,
  handleQuantityChange,
  handleSubmit
}: any) => {
  return (
    <ClickAwayListener onClickAway={handleModalClose}>
      <Popover id={id} open={isModalOpen} anchorEl={anchorEl}>
        <div className='product-name'>
          <TextField
            id='standard-basic'
            value={product}
            onChange={handleProductChange}
            label='Product Name'
            variant='standard'
          />
        </div>
        <div>
          <div className='product-price mt-10 bg-white'>
            <TextField
              id='standard-basic'
              type='number'
              value={price}
              onChange={handlePriceChange}
              label='Product Price'
              variant='standard'
            />
          </div>
          <div className='quantity-dropdown mt-10'>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Quantity</InputLabel>
              <Select
                id='demo-simple-select'
                value={quantity ? quantity : 0}
                onChange={handleQuantityChange}
                label='Quantity'
                labelId='demo-simple-select-label'
              >
                <MenuItem value={0}>Zero</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='action-buttons mt-10'>
            <span className='mr-5'>
              <Button onClick={handleModalClose} variant='outlined'>
                Cancel
              </Button>
            </span>
            <span>
              <Button onClick={handleSubmit} variant='contained'>
                Add Entry
              </Button>
            </span>
          </div>
        </div>
      </Popover>
    </ClickAwayListener>
  );
};

export default AddEntry;
