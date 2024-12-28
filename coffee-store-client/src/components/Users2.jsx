import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Users2 = () => {

    const {isPending, isError, error ,data: users} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json()
        }
    })

    // const [users, setUsers] = useState([]);

    // useEffect(()=> {
    //     fetch('http://localhost:5000/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [])

  const handleDeleteUser = (id) => {
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
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // const remainingUser = users.filter(user => user._id !== id);
              // setUsers(remainingUser);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  if(isPending){
    return <div>
        <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
    </div>
  }

  if(isError){
    return alert(error.message)
  }
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-4xl font-bold text-center">Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Id</th>
              <th>Join Date</th>
              <th>Last SingIn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user._id}</td>
                <td>{user.createdAt ? user.createdAt : "N/A"}</td>
                <td>{user.lastSignInTime ? user.lastSignInTime : "N/A"}</td>
                <td className="flex gap-2">
                  <button className="text-green-500 text-lg" title="edit">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="text-red-600 text-lg"
                    title="delete"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
