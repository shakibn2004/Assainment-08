'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import 'animate.css';

const SignInPage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [loading, setLoading] = useState();

    const [errorMsg, setErrorMsg] = useState()
    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/",
        }, {
            onSuccess: () => {
                setLoading(false);
                toast.success('Signin successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            },
            onError: (ctx) => {
                setLoading(false);
                toast.error(ctx.error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                return
            }
        });
        setErrorMsg(error.message);
    };


    return (
        <div className='w-fit mx-auto'>
            {
                isPending ? (
                    <div className="flex min-h-screen items-center justify-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <Form
                        className="flex w-96 flex-col gap-4 py-10 px-8 rounded-2xl shadow-[0_0_2px_#f97316] animate__animated animate__fadeInUp"
                        render={(props) => <form {...props} data-custom="foo" />}
                        onSubmit={onSubmit}
                    >
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label className='text-[#8a8799]'>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }

                                return null;
                            }}
                        >
                            <Label className='text-[#8a8799]'>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            {
                                errorMsg ? <Description className='text-red-500'>{errorMsg} ! Please try again with correct information</Description> : ""
                            }
                            <FieldError />
                        </TextField>

                        <div className="">
                            <Button className="w-full linear-bg text-xl" type="submit">
                                Login
                            </Button>
                            <div className="text-[#8a8799] mt-4">
                                <span>Don&#39;t have an account?</span>
                                <Link className='linear-color' href={'/auth/signup'}> Resister</Link>
                            </div>
                        </div>
                    </Form>
                )
            }
        </div>
    );
};

export default SignInPage;