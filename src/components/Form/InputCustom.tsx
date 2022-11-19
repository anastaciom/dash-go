import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface InputCustomProps extends InputProps {
  label?: string;
}

export default function InputCustom({ label, ...rest }: InputCustomProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={rest?.name}>{label}</FormLabel>}
      <Input
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
