'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Slide, toast } from 'react-toastify';
import 'animate.css';


const SignUpPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState();

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            callbackURL: "/auth/signin",
        }, {
            onSuccess: () => {
                router.push("/auth/signin");
                router.refresh();
                setLoading(false);
                toast.success('Signup successful!', {
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
    };

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className='w-fit p-4 mx-auto'>
            {
                loading ? (
                    <div className="flex min-h-screen items-center justify-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <Form
                        className="flex flex-col gap-4 py-10 px-8 rounded-2xl shadow-[0_0_2px_#f97316] animate__animated animate__fadeInUp"
                        render={(props) => <form {...props} data-custom="foo" />}
                        onSubmit={onSubmit}
                    >

                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label className='text-[#8a8799]'>Name</Label>
                            <Input placeholder="Enter your name here" />
                            <FieldError />
                        </TextField>
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
                            <FieldError />
                        </TextField>

                        <div className="">
                            <Button className="w-full linear-bg text-xl" type="submit">
                                Resister
                            </Button>
                            <Button onClick={handleGoogleSignin} className="w-full linear-bg text-xl mt-6" type="submit">
                                <FcGoogle />Continue With Google
                            </Button>
                            <div className="text-[#8a8799] mt-4">
                                <span>Already have an account?</span>
                                <Link className='linear-color' href={'/auth/signin'}> Login</Link>
                            </div>
                        </div>
                    </Form>
                )
            }
        </div>
    );
};

export default SignUpPage;