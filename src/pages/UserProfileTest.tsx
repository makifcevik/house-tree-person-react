import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../services/userService";
import IUser from "../models/IUser";
import { useParams } from "react-router-dom";
import IResponse from "@/models/IResponse";

const UserProfileTest = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery<IResponse<IUser>>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  });

  const user = response?.data;

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>AN ERROR OCCURRED: {error.message}</h1>;
  if (!user) return <h1>No user found!</h1>;

  return (
    <div className='text-theme-color'>
      <h3>{user.first_name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfileTest;
