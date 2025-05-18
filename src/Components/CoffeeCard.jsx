import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, taste, price } = coffee;
  const handleDelete = (id) => {
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
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              icon: "success",
              title: "Deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log("Data after Delete", data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 p-2">
      <figure>
        <img className="w-32 rounded-2xl" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{taste}</p>
          <p>{price}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical">
            <Link to={`/coffee/${_id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
