import { Outlet, Link } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div>
        <h1>Products</h1>
        <Link to="/products">Product List</Link>
        <Outlet />
    </div>
  );
}