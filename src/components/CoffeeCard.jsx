import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;
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
              const newCoffees = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(newCoffees);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[300px] h-[200px]" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full px-4 items-center ">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn ">View</button>
              <Link to={`/coffee/${_id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.object,
  setCoffees: PropTypes.func,
};
export default CoffeeCard;
