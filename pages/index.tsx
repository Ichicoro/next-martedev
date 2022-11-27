import React, { useEffect } from "react"

import Head from 'next/head'
import { initializeIcosahedron } from "../helpers/animation"
import Link from "../components/Link"
import { FaAndroid, FaApple, FaEnvelope, FaGithub, FaLink, FaTelegram, FaTwitter, FaUser } from "react-icons/fa"
import TwemojiSVG from "../components/TwemojiSVG"

const Index = () => {
  useEffect(() => {
    initializeIcosahedron()
  }, [])

  const _calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return <>
    <Head>
        <title>Marte Montipo'</title>
        <meta name="theme-color" content="#ededed" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <canvas id="globecanvas" />

    <div className="centraldiv pb-5">
      <div className="position-relative w-100 my-auto">
        <div className="position-relative mx-auto" style={{ width: "fit-content" }}>
          <h1 className="centralh1 fst-italic px-md-5 px-1 py-5">Marte Montipo'</h1>
          <span className="h1kanji fs-1">火星</span>
        </div>

        <div className="px-4">
          <div className="row">
            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <div>
                <div className="row py-0">
                  <div className="col-6 col-md-12 mb-md-4">
                    <div className="bordered-box">
                      <TwemojiSVG>
                        <h2 className='projects-box__title d-flex align-items-center gap-2'>Links <span aria-hidden>🔗</span></h2>
                      </TwemojiSVG>
                      <span>{[
                        { href: "https://github.com/ichicoro", icon: <FaGithub />, text: "GitHub" },
                        { href: "https://twitter.com/_ichicoro", icon: <FaTwitter />, text: "Twitter" },
                        { href: "https://t.me/Ichicoro", icon: <FaTelegram />, text: "Telegram" },
                        { href: "mailto:me@marte.dev", icon: <FaEnvelope />, text: "Email" }
                      ].map(link => <div>
                        <a target="_blank" className="d-inline-flex align-items-center gap-1 mb-1" href={link.href}>{link.icon}{link.text}</a>
                      </div>)}</span>
                    </div>
                  </div>

                  <div className="col-6 col-md-12 d-flex justify-content-end">
                    <div className="bordered-box w-100">
                      <TwemojiSVG>
                        <h2 className='projects-box__title d-flex align-items-center gap-2'>Friends <span aria-hidden>🌸</span></h2>
                      </TwemojiSVG>
                      <span>
                  {[
                    { url: "https://steffo.eu", name: "Steffo" },
                    { url: "https://gimbaro.dev", name: "Gimbaro" },
                    { url: "https://fermitech.info", name: "Balu" }
                  ].map(friend => <div>
                    <a target="_blank" className="d-inline-flex align-items-center gap-1 mb-1" href={friend.url}><FaUser />{friend.name}</a>
                  </div>)}
                </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="bordered-box mb-4">
                <TwemojiSVG><h2 className='projects-box__title d-flex align-items-center gap-2'>About me <span aria-hidden>✨</span></h2></TwemojiSVG>
                <span className="my-0">
                  Hello! I'm Marte, a {_calculateAge(new Date(1999,10,20)) || 23} years old developer from Reggio Emilia, Italy. I'm currently employed at <Link href="https://soluzionifutura.it">Soluzioni Futura</Link> as a full-stack web developer. <br /><br />

                  On my spare time, I love creating Unity and Godot games, porting <Link href="https://github.com/FWGS/xash3d-fwgs">Xash3D</Link> (a Half-Life engine rewritten from scratch) to platforms like iOS and the Wii and working on other weird projects :)<br /><br />

                  I'm also an avid CS:GO and Team Fortress 2 player.
                </span>
              </div>

              <div className="bordered-box">
                <TwemojiSVG><h2 className='projects-box__title d-flex align-items-center gap-2'>My projects <span aria-hidden>🛠️</span></h2></TwemojiSVG>
                <span className="my-0">
                  <h3><span>Personal</span></h3>
                  {[
                    {
                      title: "PrivacyLayer",
                      links: [{ link: "https://github.com/Ichicoro/privacylayer", text: "GitHub", icon: <FaGithub /> }],
                      contents: <>
                        PrivacyLayer is an app for Android 4.4+ devices that lets users <b>encrypt</b> and <b>decrypt</b> text using a <i>customizable key</i>.
                      </>
                    },
                    {
                      title: "Chicor",
                      links: [{ link: "https://github.com/Ichicoro/Chicor", text: "GitHub", icon: <FaGithub /> }],
                      contents: <>
                        A flexible, <i>plugin-based</i>, open source Telegram bot for groups written in <b>Python</b>.
                      </>
                    },
                    {
                      title: "godot-tetris",
                      links: [{ link: "https://github.com/Ichicoro/godot-tetris", text: "GitHub", icon: <FaGithub /> }],
                      contents: <>
                        A Tetris remake in the <a href="https://godotengine.org">Godot game engine</a>. It is available both as a <a href="https://github.com/Ichicoro/godot-tetris/releases">native binary</a> or as an <a href="https://marte.dev/tetris">HTML5 page</a>.
                      </>
                    }
                  ].map((project, i, arr) => <div className={i !== arr.length - 1 ? "pb-3" : ""}>
                    <h4 className="mb-3"><span>{project.title}</span></h4>
                    <p className="my-0">{project.contents}</p>
                    <p className="mt-2 mb-0 d-flex gap-3">{project.links.map(link => <span>
                      <a className="d-inline-flex align-items-center gap-1" href={link.link}>{link.icon}{link.text}</a>
                    </span>)}</p>
                  </div>)}

                  <h3><span>Soluzioni Futura</span></h3>
                  {[
                    {
                      title: "LoveTheSign",
                      links: [{
                        text: "Visit website",
                        link: "https://lovethesign.it",
                        icon: <FaLink />
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
                          text: "App Store",
                          icon: <FaApple />
                        },
                        {
                          link: "https://play.google.com/store/apps/details?id=com.pulcranet.holyart",
                          text: "Google Play",
                          icon: <FaAndroid />
                        }
                      ],
                      contents: <>
                        The official mobile app for <Link href="https://holyart.it">Holyart.it</Link>, written in TypeScript and leveraging <Link href="https://expo.io">Expo</Link>.
                      </>
                    }
                  ].map((project, i, arr) => <div className={i !== arr.length - 1 ? "pb-3" : ""}>
                    <h4 className="mb-3"><span>{project.title}</span></h4>
                    <p className="my-0">{project.contents}</p>
                    <p className="mt-2 mb-0 d-flex gap-3">{project.links.map(link => <span>
                      <a className="d-inline-flex align-items-center gap-1" href={link.link}>{link.icon}{link.text}</a>
                    </span>)}</p>
                  </div>)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Index
