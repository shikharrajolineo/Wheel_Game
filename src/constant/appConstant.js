const masterConfig = {
  local: {
    server_url: "http://127.0.0.1:8000",
  },
  staging: {
    server_url: "https://api.olineoindia.com",
  },
  prod: {
    server_url: "https://api.olineoindia.com",
  },
};

export const { server_url } = masterConfig[process.env.REACT_APP_ENV];
