const ROUTES = {
  HOME: "",
  ABOUT: "/about",
  DEMO: "/demo",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PUBLICATIONS_AND_REFERENCES: "/publicationsAndReferences",
  USERS: "/users",
  USER_PROFILE: "/users/:id",
};

const PATHS = {
  USER_PROFILE: (id: bigint) => `/users/${id}`,
};

export default ROUTES;
