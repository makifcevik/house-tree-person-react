const ROUTES = {
  HOME: "",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PUBLICATIONS: "/publications",
  USER_PROFILE: (id) => `/user/${id}`, // Dynamic routing for future
};

export default ROUTES;
