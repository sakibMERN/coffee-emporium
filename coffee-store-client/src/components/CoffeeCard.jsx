import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { category, details, name, photo, quantity, supplier, test, _id } =
    coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side shadow-xl bg-[#e6ddc5] p-4">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full border">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Test: {test}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm btn-primary">view</button>
          <Link to={`/updateCoffee/${_id}`} className="btn btn-sm btn-warning">Edit</Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
