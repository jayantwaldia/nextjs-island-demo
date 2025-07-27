import LikeButton from "./LikeButton";

export default function ProductCard() {
  return (
    <div className="product-card">
      <h3>Sample Product</h3>
      <p>$99.99</p>
      <img src="/product.jpg" alt="Sample Product" width={300} />
      <LikeButton />
    </div>
  );
}
