'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import 'animate.css';


const Update = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        await authClient.updateUser({
            image: userData.image,
            name: userData.name,
        })

    };

    return (
        <div>
            {
                user ? (

                    <div className='flex justify-center py-20 px-4 animate__fadeInDown animate__animated'>
                        <Form
                            className="flex w-96 flex-col space-y-5 gap-4 py-7 px-8 rounded-2xl shadow-[0_0_2px_#f97316]"
                            render={(props) => <form {...props} data-custom="foo" />}
                            onSubmit={onSubmit}
                        >

                            <TextField
                                isRequired
                                name="image"
                                type="link"
                            >
                                <Label className='text-[#8a8799] rounded-xl'>Image Link</Label>
                                <Input placeholder="Enter your image bb link here" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                name="name"
                                type="text"
                            >
                                <Label className='text-[#8a8799] rounded-xl'>Name</Label>
                                <Input placeholder="Enter your name here" />
                                <FieldError />
                            </TextField>

                            <div className="">
                                <Button className="w-full linear-bg text-xl" type="submit">
                                    Update Information
                                </Button>
                            </div>
                        </Form>
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-4'>
                        <p className='text-3xl font-bold linear-color'>Please login to update your profile</p>
                        <Link className='btn-primary w-fit' href={'/auth/signin'}>Login</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Update;