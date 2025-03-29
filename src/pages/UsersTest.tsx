import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../services/UserService";
import IUser from "../models/IUser";

const UsersTest = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  console.log(users);

  if (isLoading) return <h1 className='text-gray'>Loading...</h1>;
  if (isError) return <h1 className='text-gray'>AN ERROR OCCURED: {error.message}</h1>;
  if (!isLoading && !users) return <h1 className='text-gray'>No users found!</h1>;

  return (
    <div>
      {users?.map((user) => (
        <div className='text-theme-color space-x-2' key={user.id}>
          <div>
            <p className='font-extrabold'>{user.first_name}</p>
          </div>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersTest;
