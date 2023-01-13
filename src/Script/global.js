export const globals = {
    baseUrl: "http://localhost:3333/v1",
    requestHeaders: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    red: "#C20803",
    green: "#08C203",
    token: getUser().token
  };