import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    const {_id, name, quantity, supplier, taste, category, photo, details } = loadedData;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        console.log('updated');

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire(
                'Updated',
                'Your file has been deleted.',
                'success'
              )
        })
        
    }
  return (
    <div>
      <div className="w-[1000px] mx-auto text-center my-5 p-8">
        <h3 className="text-5xl mb-5 font-bold">Update Coffee</h3>
        <p className="text-base text-gray-500">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee}>
          {/* group 1  */}
          <div className="flex items-center gap-5 w-full mt-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name='name'
                placeholder="Enter Name: "
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Available Quantity</span>
              </label>
              <input
                type="text"
                name='quantity'
                defaultValue={quantity}
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* group 2  */}
          <div className="flex items-center gap-5 w-full mt-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Supplier</span>
              </label>
              <input
                type="text"
                name='supplier'
                defaultValue={supplier}
                placeholder="Enter Supplier: "
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Taste</span>
              </label>
              <input
                type="text"
                name='taste'
                defaultValue={taste}
                placeholder="Taste:"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* group 3  */}
          <div className="flex items-center gap-5 w-full mt-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Category</span>
              </label>
              <input
                type="text"
                name='category'
                defaultValue={category}
                placeholder="Enter Category: "
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Details</span>
              </label>
              <input
                type="text"
                name='details'
                defaultValue={details}
                placeholder="Enter Details"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* group 4  */}
          <div className="flex items-center gap-5 w-full mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg mb-4 font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name='photo'
                defaultValue={photo}
                placeholder="Photo URL: "
                className="input input-bordered"
              />
            </div>
          </div>
          <input
                type="submit"
                
                className="input bg-stone-600 text-white mt-4 w-full"
                value="Update Coffee"
              />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
