"use client";

import React, { FC } from 'react'
import { signIn, signOut } from 'next-auth/react';

type AuthButtonProps = {
    provider?: "github";
    type: "login" | "logout";
    children: React.ReactNode
}

const AuthButton: FC<AuthButtonProps> = ({ provider, type, children }) => {
    const action = () => type === "login" && provider ? signIn(provider) : signOut({ callbackUrl: "/" });

    return (
        <button
            type="button"
            onClick={action}
        >
            {children}
        </button>
    )
}

export default AuthButton