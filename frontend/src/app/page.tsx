"use client";
import { useForm } from "react-hook-form";
import { Container, Button, Stack, Typography } from "@mui/material";
import DynamicField from "../components/DynamicField";
import formData  from "../data/form.json";

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mt={5} mb={3}>
        Signup Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Stack spacing={3}>

          {formData.data.map((field) => (
            <DynamicField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
            />
          ))}

          <Button variant="contained" type="submit">
            Submit
          </Button>

        </Stack>

      </form>
    </Container>
  );
}
