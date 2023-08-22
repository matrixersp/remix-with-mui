import React from 'react';
import { Typography } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h1" fontSize="2rem">Remix with MUI</Typography>
    </React.Fragment>
  );
}
