import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from "next-auth";

import AuthButton from "@/components/AuthButton";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={30}
          />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <AuthButton
                type="logout"
              >
                <span>Logout</span>
              </AuthButton>

              <Link href={`/user/${session?.user?.name}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <AuthButton
              type="login"
              provider='github'
            >
              Login
            </AuthButton>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar