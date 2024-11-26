import CreateProductForm from "../../components/create-product";

export default function CreateProduct() {
  return (
    <div className="px-5 mt-14 rounded-md pb-5">
      <h4 className="text-xl text-main_gray mb-4">Create Product</h4>
      <CreateProductForm />
    </div>
  );
}
