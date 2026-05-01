'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const Update = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log(userData);
    };

    return (
        <div className='flex justify-center py-20'>
            <Form
                className="flex w-96 flex-col space-y-5 gap-4 py-7 px-8 rounded-2xl shadow-[0_0_2px_#f97316]"
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={onSubmit}
            >
                <div>
                    <label className="text-[#8a8799]">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        className="text-white border mt-1 border-[#8a8799] rounded-xl px-3 py-2 w-full"
                    />
                </div>
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
    );
};

export default Update;