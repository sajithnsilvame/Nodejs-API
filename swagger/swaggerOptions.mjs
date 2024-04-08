export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Swagger documentation for the API",
      contact: {
        name: "sajith N silva",
        url: "https://www.linkedin.com/in/sajith-nishantha-silva-265950213/://www.linkedin.com/in/joseph-m-barrera/",
        email: "sajithnsilva.me@gmail.com",
      },
      servers: ["http://localhost:4000"],
    },
    schemes: ["http", "https"],
  },
  apis: ["./routes/*.js"],
};

export default swaggerOptions;
