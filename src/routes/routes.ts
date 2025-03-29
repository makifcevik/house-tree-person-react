const ROUTES = {
  HOME: "",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PUBLICATIONS: "/publications",
  USERS: "/users",
  USER_PROFILE: "/users/:id",
};

const PATHS = {
  USER_PROFILE: (id: bigint) => `/users/${id}`,
};

export default ROUTES;
