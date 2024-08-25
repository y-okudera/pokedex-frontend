<div align="center">
  <img width="1624" src="https://github.com/user-attachments/assets/de459139-04aa-424d-82f2-ca64cfc120bf" alt="pokedex_frontend">
  <img width="1624" alt="pokedex_top" src="https://github.com/user-attachments/assets/a8ea1755-de5e-40af-ad97-288886c5bd34">
  <img width="1624" alt="pokedex_detail" src="https://github.com/user-attachments/assets/cbfaed34-74e9-4390-80c6-e25549a088d9">
</div>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables
Before running the project, make sure to set the required environment variables. You can do this by creating a .env file in the root directory with the following content:

```bash
# .env
NEXT_PUBLIC_POKE_API_URL=https://example.com/graphql
```

### Explanation

- `NEXT_PUBLIC_POKE_API_URL`: The URL of the GraphQL API endpoint. Replace the placeholder URL with the actual endpoint for your project.

Make sure that the environment variable is prefixed with `NEXT_PUBLIC_` so that it is exposed to the browser as required by Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
