import IResponse from "@/models/IResponse";
import IUser from "@/models/IUser";
import { getAllUsers } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

const UsersTest = () => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery<IResponse<IUser[]>>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const users = response?.data || []; // Extract the actual users array

  if (isLoading) return <h1 className='text-gray'>Loading...</h1>;
  if (isError) return <h1 className='text-gray'>Error: {error.message}</h1>;
  if (users.length === 0) return <h1 className='text-gray'>No users found</h1>;

  return (
    <div>
      {users.map((user) => (
        <div className='text-theme-color space-x-2' key={user.id}>
          <p className='font-extrabold'>{user.first_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersTest;
