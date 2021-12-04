import React, { useEffect } from "react"
import * as THREE from "three"

import Head from 'next/head'
import Image from 'next/image'
import HeaderLinks from '../components/HeaderLinks'
import ProjectBox from '../components/ProjectBox'
import ProjectRow from "../components/ProjectRow"
import { initializeIcosahedron } from "../helpers/animation"
import Link from "../components/Link"

export default function Index() {
  useEffect(() => {
    initializeIcosahedron()
  }, [])

  return <>
    <Head>
        <title>Marte Montipo'</title>
        <meta name="theme-color" content="#1f1619" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <canvas id="globecanvas" />
    <div className="centraldiv">
      <span id="spanboxparent">
        <span id="spanbox">
          <h1 className="centralh1">Marte Montipo'</h1>

          <span id='projects-grid-span'>
            <ProjectBox title="About me" links={[
              { link: "https://github.com/ichicoro", text: "github" },
              { link: "https://twitter.com/_ichicoro", text: "twitter" },
              { link: "https://t.me/Ichicoro", text: "telegram" },
              { link: "mailto:me@marte.dev", text: "email" }
            ]}>
              I'm a <span id="my-age">21</span> years old developer from Reggio Emilia, Italy. I'm currently employed at <Link href="https://soluzionifutura.it">Soluzioni Futura</Link> as a full-stack web developer. <br /><br />

              On my spare time, I love creating Unity and Godot games, porting <Link href="https://github.com/FWGS/xash3d-fwgs">Xash3D</Link> (a Half-Life engine rewritten from scratch) to platforms like iOS and the Wii and working on other weird projects :)<br /><br />

              I'm also an avid CS:GO player. You can find my Steam profile <Link href="https://steamcommunity.com/id/ichicoro">here</Link>.
            </ProjectBox>
          </span>


          {/* personal projects */}
          <br />
          <ProjectRow title="personal projects" data={[
            {
              title: "PrivacyLayer",
              links: [{ link: "https://github.com/Ichicoro/privacylayer", text: "GitHub" }],
              contents: <>
                PrivacyLayer is an app for Android 4.4+ devices that lets users <b>encrypt</b> and <b>decrypt</b> text using a <i>customizable key</i>.
              </>
            },
            {
              title: "Chicor",
              links: [{ link: "https://github.com/Ichicoro/Chicor", text: "GitHub" }],
              contents: <>
                A flexible, <i>plugin-based</i>, open source Telegram bot for groups written in <b>Python</b>.
              </>
            },
            {
              title: "godot-tetris",
              links: [{ link: "https://github.com/Ichicoro/godot-tetris", text: "GitHub" }],
              contents: <>
                A Tetris remake in the <a href="https://godotengine.org">Godot game engine</a>. It is available both as a <a href="https://github.com/Ichicoro/godot-tetris/releases">native binary</a> or as an <a href="https://marte.dev/tetris">HTML5 page</a>.
              </>
            }
          ]} />

          <br />
          <ProjectRow
            title="things I've worked on @ soluzioni futura"
            subtitle={<span>
              These are all projects I've worked on at <Link href="https://soluzionifutura.it">Soluzioni Futura</Link>
            </span>}
            data={[
              {
                title: "LoveTheSign",
                links: [{
                  text: "Visit website",
                  link: "https://lovethesign.it"
                }],
                contents: <>
                  An online boutique that sells exclusive home design products.
                </>
              },
              {
                title: "HolyArt App",
                links: [
                  {
                    link: "https://apps.apple.com/it/app/holyart-articoli-religiosi/id1538602972",
                    text: "App Store"
                  },
                  {
                    link: "https://play.google.com/store/apps/details?id=com.pulcranet.holyart",
                    text: "Google Play"
                  }
                ],
                contents: <>
                  The official mobile app for <Link href="https://holyart.it">Holyart.it</Link>, written in TypeScript and leveraging <Link href="https://expo.io">Expo</Link>.
                </>
              }
            ]}
          />
        </span>
      </span>
    </div>
  </>
}
