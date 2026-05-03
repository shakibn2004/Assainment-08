"use client";

import { AlertDialog, Button } from "@heroui/react";


import React from 'react';
import { FaPlay } from "react-icons/fa";

const Dialog = () => {
    return (
        <AlertDialog>
            <Button className='border border-[#8a8799]/50 text-[#8a8799] px-4 py-2 flex gap-2 items-center rounded-xl' variant="danger">Watch Demo<FaPlay /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default Dialog;

