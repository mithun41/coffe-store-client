import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData);
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("Data after added server", data);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto mb-10">
      <h2 className="text-4xl text-center my-3">Add New Coffee</h2>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        minus possimus. Aperiam commodi perferendis sed saepe voluptatum
        doloremque necessitatibus natus eius dicta? Incidunt, libero cum? Ipsam
        quod, et, neque reprehenderit ad nemo veritatis id aliquid nihil
        perspiciatis, atque quae? Doloremque enim molestias nemo, rem veniam
        odio minima aut? Facilis, autem.
      </p>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="Quantity "
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details Name"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
