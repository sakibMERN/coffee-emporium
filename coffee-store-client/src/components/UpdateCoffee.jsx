import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { category, details, name, photo, quantity, supplier, test, _id } =
    coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateData = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updateData);
  };
  return (
    <div className="space-y-5 bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee</h2>
      <form onSubmit={() => handleUpdate(_id)} className="space-y-4">
        {/* row 1 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name:
              <input
                type="text"
                name="name"
                className="grow text-gray-400"
                defaultValue={name}
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available Quantity:
              <input
                type="text"
                name="quantity"
                className="grow text-gray-400"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>

        {/* row 2 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Supplier Name:
              <input
                type="text"
                name="supplier"
                className="grow text-gray-400"
                defaultValue={supplier}
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Test:
              <input
                type="text"
                name="test"
                className="grow text-gray-400"
                defaultValue={test}
              />
            </label>
          </div>
        </div>

        {/* row 3 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Category:
              <input
                type="text"
                name="category"
                className="grow text-gray-400"
                defaultValue={category}
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details:
              <input
                type="text"
                name="details"
                className="grow text-gray-400"
                defaultValue={details}
              />
            </label>
          </div>
        </div>

        {/* row 4 */}
        <div className="">
          {/* form row left */}
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Photo URL:
              <input
                type="text"
                name="photo"
                className="w-full text-gray-400"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block bg-slate-500 text-white"
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
