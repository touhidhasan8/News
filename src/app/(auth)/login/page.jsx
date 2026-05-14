"use client"

import { Button, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const LoginPage = () => {
    // Password State => 
    const [isVisible, setIsVisible] = useState(false);
    const { register, handleSubmit, } = useForm()

    const onSubmit = async (e) => {
        console.log(e, "event Data ");
        const { email, password } = e;

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message);
        }

        if(data){
            toast( "Login successful" )
        }

    };


    return (
        <div className='flex justify-center items-center mt-5 bg-slate-100 h-screen'>
            <Form className="flex w-96 flex-col gap-4 bg-white p-5 rounded-lg " onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl font-bold text-center mb-5'> Login your account </h1>
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
                    <Input  {...register("email")} placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                {/* Password  */}
                <TextField className="w-full " name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            {...register("password")}
                            placeholder='Enter Your Password'
                            className="w-full"
                            type={isVisible ? "text" : "password"}

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
                </TextField>
                <div className="flex gap-2 w-full">
                    <Button type="submit" className="w-full ">
                        <Checkbox />
                        Submit
                    </Button>

                </div>
                <p className='text-center'>Dont’t Have An Account ? <Link href={'/register'} className='text-red-500'>Register</Link></p>

            </Form>
        </div>
    );
};

export default LoginPage;