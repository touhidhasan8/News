"use client"

import { Button, Checkbox, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    // Password State => 
    const [isVisible, setIsVisible] = useState(false);
    const { register,
        handleSubmit,
        formState: { errors }, } = useForm()

    const onSubmit = async (e) => {
        const { name, email, password, photo, } = e;

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        console.log(data, error);
        if (error) {
            toast.error(error.message);
        }

        if (data) {
            toast("Registration Success")
        }

    };


    return (
        <div className='flex justify-center items-center mt-5 bg-slate-100 h-screen'>
            <Form className="flex w-96 flex-col gap-4 bg-white p-5 rounded-lg " onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl font-bold text-center mb-5'> Register your account </h1>
                {/* Input Name  */}
                <TextField>
                    <Label>Your Name </Label>
                    <Input aria-label="Name"
                        type='text'

                        {...register("name", { required: true })}
                        placeholder="Enter your name" />
                    {errors.name && <span className='text-red-500'>This field is required</span>}
                </TextField>

                {/* Photo Url*/}
                <TextField>
                    <Label>Photo Url</Label>
                    <Input aria-label="Name"
                        type='text'

                        {...register("photo", { required: true })}
                        placeholder="Enter your Photo Url" />
                    {errors.photo && <span className='text-red-500'>This field is required</span>}
                </TextField>

                {/* Email */}
                <TextField
                    isRequired

                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input  {...register("email", { required: true })} placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                {/* Password  */}
                <TextField
                    className="w-full "
                    name="password"
                    isRequired>
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input

                            placeholder='Enter Your Password'
                            className="w-full"
                            type={isVisible ? "text" : "password"}
                            {...register("password", { required: true })}
                        />

                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </TextField>
                <div className="flex gap-2 w-full">
                    <Button type="submit" className="w-full ">
                        <Checkbox />
                        Submit
                    </Button>
                </div>
                <h1 className=' text-center'> Have An Account ?
                    <Link href={"/login"}><span className='text-blue-400'> Login</span>
                    </Link></h1>

            </Form>
        </div>
    );
};

export default RegisterPage;