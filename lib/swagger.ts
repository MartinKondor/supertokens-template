import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",  // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "SuperTokens Template API",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [{
        BearerAuth: []
      }],
    },
  });
  return spec;
};