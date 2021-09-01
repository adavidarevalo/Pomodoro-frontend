import React, {useState} from "react"
import Image from 'next/image'
import user from "../public/user.svg"
import Head from 'next/head'
import Menu from "./Menu"
import {HeaderContainer} from "../styles/components/Header"
import Link from "next/link"

const Header = () => {
  return(
    <header>
       <Head>
        <title>Pomodoro Clock</title>
        <meta name="description" content="Pomodoro Clock" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
       <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&family=Roboto:wght@300&family=Teko:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <HeaderContainer>
        <Link href="/">
          pomodoro
        </Link>
          <Menu />
      </HeaderContainer>
    </header>
  )
}

export default Header