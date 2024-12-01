import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const allData = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo
    }
    console.log(allData);

    fetch('http://localhost:5000/coffee', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className="space-y-5 bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee} className="space-y-4">
        {/* row 1 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Coffee Name"
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available Quantity
              <input
                type="text"
                name="quantity"
                className="grow"
                placeholder="Available Quantity"
              />
            </label>
          </div>
        </div>

        {/* row 2 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Supplier Name
              <input
                type="text"
                name="supplier"
                className="grow"
                placeholder="Supplier Name"
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Test
              <input
                type="text"
                name="test"
                className="grow"
                placeholder="Test"
              />
            </label>
          </div>
        </div>

        {/* row 3 */}
        <div className=" md:flex gap-4">
          {/* form row left */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                className="grow"
                placeholder="Category"
              />
            </label>
          </div>

          {/* form row right */}
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="details"
                className="grow"
                placeholder="Details"
              />
            </label>
          </div>
        </div>

        {/* row 4 */}
        <div className="">
          {/* form row left */}
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Photo URL
              <input
                type="text"
                name="photo"
                className="w-full"
                placeholder="Photo URL"
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block bg-slate-500 text-white" type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default AddCoffee;
