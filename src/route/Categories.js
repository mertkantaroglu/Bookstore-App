import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((status) => status.category);
  return (
    <div>
      <h2 id="check-span">{typeof status === 'string' && status}</h2>
      <button
        type="button"
        id="check-btn"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
    </div>
  );
}

export default Categories;
