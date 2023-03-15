import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  return (
    <div className="categories">
      <h1>{status}</h1>
      <button
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
};
export default Categories;
