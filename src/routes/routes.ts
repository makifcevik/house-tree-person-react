const ROUTES = {
  HOME: "",
  ABOUT: "/about",
  DEMO: "/demo",
  SIGNUP: "/signup",
  LOGIN: "/login",
  PUBLICATIONS_AND_REFERENCES: "/publications_and_references",
  PSYCHOLOGICAL_FEATURES: "/psychological_features",
  SAMPLE_DATA: "/sample_data",
  CONTACT: "/contact",
  USERS: "/users",
  USER_PROFILE: "/users/:id",
};

const PATHS = {
  USER_PROFILE: (id: bigint) => `/users/${id}`,
};

export default ROUTES;
