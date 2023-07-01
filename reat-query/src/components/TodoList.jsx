import React from "react";
import { ListItem, UnorderedList, Box, Input } from "@chakra-ui/react";
import useTodos from "../hooks/useTodos";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

function TodoList() {
  const { data, error, isLoading } = useTodos();
  console.log("🚀 ~ file: TodoList.jsx:8 ~ TodoList ~ data:", data);

  function validateName(value) {
    let error;
    if (!value) error = "Name is required";

    return error;
  }

  const handleSubmit = (values) => {
    console.log("🚀 ~ file: TodoList.jsx:25 ~ handleSubmit ~ values:", values);
  };

  return (
    <Box m="50px">
      <Formik initialValues={{ name: "Sasuke" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" validate={validateName}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="name" />
            </FormControl>
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isLoading}
            type="submit"
            marginBottom="20px"
          >
            Submit
          </Button>
        </Form>
      </Formik>
      <UnorderedList>
        {data?.map((todo) => (
          <ListItem key={todo.id}>{todo.title}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default TodoList;
