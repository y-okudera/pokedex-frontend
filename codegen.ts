import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql-pokeapi.vercel.app/api/graphql",
  documents: "graphql/documents/**/*.graphql",
  generates: {
    "src/repositories/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "@graphql-codegen/typescript-msw",
        {
          "graphql-codegen-typescript-mock-data": {
            prefix: "mock",
          },
        },
      ],
      config: {
        scalars: {
          DateTime: "string",
          JSON: "unknown",
          Upload: "unknown",
          Time: "string",
          Date: "string",
          Long: "number",
        },
      },
    },
  },
};

export default config;
