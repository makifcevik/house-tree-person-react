import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../services/UserService";
import IUser from "../models/IUser";
import { useParams } from "react-router-dom";

const UserProfileTest = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery<IUser>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  });

  console.log(user);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>AN ERROR OCCURRED!</h1>;
  if (!user) return <h1>No user found!</h1>;

  return (
    <div className='text-theme-color'>
      <h3>{user.first_name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfileTest;
