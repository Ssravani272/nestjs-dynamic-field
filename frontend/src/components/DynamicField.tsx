"use client";
import {
    TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormControl, InputLabel, FormLabel,
    FormHelperText
} from "@mui/material";

export default function DynamicField({ field, register, errors }: any) {

    const validationRules = {
        required: field.required ? `${field.name} is required` : false,
        minLength: field.minLength
            ? { value: field.minLength, message: `Minimum ${field.minLength} characters` }
            : undefined,
        maxLength: field.maxLength
            ? { value: field.maxLength, message: `Maximum ${field.maxLength} characters` }
            : undefined,
        pattern:
            field.name === "Email"
                ? { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
                : undefined
    };

    if (field.fieldType === "TEXT") { 
        return (
            <TextField
                label={field.name}
                defaultValue={field.defaultValue}
                fullWidth
                error={!!errors[field.id]}
                helperText={errors[field.id]?.message}
                {...register(field.name, validationRules)}
            />
        );
    }

    if (field.fieldType === "LIST") {
        return (
            <FormControl fullWidth error={!!errors[field.id]}>
                <InputLabel>{field.name}</InputLabel>

                <Select
                    defaultValue=""
                    label={field.name}
                    {...register(field.name, validationRules)}
                >
                    {field.listOfValues1.map((item: string) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>

                <FormHelperText>
                    {errors[field.id]?.message}
                </FormHelperText>
            </FormControl>
        );
    }

    if (field.fieldType === "RADIO") {
        return (
            <FormControl error={!!errors[field.id]}>

                <FormLabel>{field.name}</FormLabel>

                <RadioGroup
                    defaultValue={field.defaultValue || ""}
                    {...register(field.name, validationRules)}
                >
                    {field.listOfValues1.map((item: string) => (
                        <FormControlLabel
                            key={item}
                            value={item}
                            control={<Radio />}
                            label={item}
                        />
                    ))}
                </RadioGroup>

                <FormHelperText>{errors[field.id]?.message}</FormHelperText>

            </FormControl>
        );
    }

    return null;
}