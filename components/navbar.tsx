import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <Link href="/">My Ecommerce</Link>
      </div>
      <div className="">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
