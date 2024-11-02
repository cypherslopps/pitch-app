"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div>
      <Link 
        href="/"
      >
        <Image 
          src="/images/logo.png"
          alt="imag"
          width={200}
          height={100}
          priority
        />
      </Link>
    </div>
  )
}

export default Navigation