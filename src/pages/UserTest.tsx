import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../services/UserService";
import IUser from "../models/IUser";

const UserTest = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery<IUser[]>({
    queryKey: [],
    queryFn: getAllUsers,
  });

  console.log(users);

  if (isLoading) return <h1 className='text-gray'>Loading...</h1>;
  if (isError) return <h1 className='text-gray'>AN ERROR OCCURED!</h1>;
  if (!isLoading && !users) return <h1 className='text-gray'>No users found!</h1>;

  return (
    <div>
      {users?.map((user) => (
        <div className='space-x-2' key={user.id}>
          <div>
            <p className='text-gray font-extrabold'>{user.first_name}</p>
          </div>
          <p className='text-gray'>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserTest;
