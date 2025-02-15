const ROUTES = {
  HOME: "/",
  SINGUP: "/signup",
  LOGIN: "/login",
  USER_PROFILE: (id) => `/user/${id}`, // Dynamic routing for future
};

export default ROUTES;
