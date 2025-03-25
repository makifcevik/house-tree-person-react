const ROUTES = {
  HOME: "",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PUBLICATIONS: "/publications",
  USERS: "/users",
  USER_PROFILE: (id: number) => `/user/${id}`, // Dynamic routing for future
};

export default ROUTES;
