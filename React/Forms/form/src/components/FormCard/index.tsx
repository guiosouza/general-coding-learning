import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function StateTextFields() {
  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "95vh",
            height: "80vh",
          }}
        >
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <h2>Formulário de cadastro do produtos</h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginBottom: "40px"
            }}
          >
            <TextField
              sx={{
                marginBottom: "40px",
              }}
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
            <TextField
              sx={{
                marginBottom: "40px",
              }}
              id="outlined-name"
              label="Name"
              value={name}
              onChange={handleChange}
            />
            <TextField
              sx={{
                marginBottom: "40px",
              }}
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
            <TextField
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
            <TextField
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
            <TextField
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
          </div>
          <Button sx={{width:"85vh"}}variant="contained">Salvar</Button>
        </Paper>
      </Box>
    </>
  );
}
