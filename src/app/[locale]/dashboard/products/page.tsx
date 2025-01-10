"use client";

export default function ManageProductsPage() {
  async function getProducts() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/products/create`
    );

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <button onClick={getProducts}>Traer data</button>
    </div>
  );
}
