

const CoffeeCard = ({coffee}) => {
    console.log(coffee);
    const {category, details, name, photo, quantity, supplier, test, _id} = coffee;
  return (
    <div className="card card-side shadow-xl bg-[#e6ddc5] p-4">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between items-center w-full border">
        <div>
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{test}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm btn-primary">view</button>
          <button className="btn btn-sm btn-warning">Edit</button>
          <button className="btn btn-sm btn-error">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
