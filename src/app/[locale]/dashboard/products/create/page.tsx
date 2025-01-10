import CreateProductForm from "../../components/create-product";

export default function CreateProduct() {
  return (
    <div className=" w-full mt-14 rounded-md pb-5 flex justify-center flex-col items-center">
      <div className="max-sm:w-full w-1/2 flex flex-col justify-center items-center">
        <h4 className="text-xl text-main_gray mb-4">Create Product</h4>
        <CreateProductForm />
      </div>
    </div>
  );
}
