import Head from 'next/head'
import Image from 'next/image'
import HeaderLinks from '../components/HeaderLinks'
import ProjectBox from '../components/ProjectBox'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <div className="centraldiv">
    <span id="spanboxparent">
      <span id="spanbox">
        <h1 className="centralh1">Marte Montipo'</h1>

        <HeaderLinks links={[
          { text: "github", link: "https://github.com/ichicoro" },
          { text: "twitter", link: "https://twitter.com/_ichicoro" },
          { text: "telegram", link: "https://t.me/Ichicoro" },
          { text: "email", link: "mailto:me@marte.dev" }
        ]} />

        <span id='projects-grid-span'>
          <ProjectBox title="About me">
            I'm a <span id="my-age">21</span> years old developer from Reggio Emilia, Italy. I'm currently employed at <a href="https://soluzionifutura.it">Soluzioni Futura</a> as a full-stack web developer. <br /><br />

            On my spare time, I love creating Unity and Godot games, porting <a href="https://github.com/FWGS/xash3d-fwgs">Xash3D</a> (a Half-Life engine rewritten from scratch) to platforms like iOS and the Wii and working on other weird projects :)<br /><br />

            I'm also an avid CS:GO player. You can find my Steam profile <a href="https://steamcommunity.com/id/ichicoro">here</a>.
          </ProjectBox>
        </span>


        {/* personal projects */}
        <br />
        <h3 className="title-separator">personal projects</h3>
        <span id='projects-grid-span'>
          <ProjectBox title="PrivacyLayer" link="https://github.com/Ichicoro/privacylayer">
            PrivacyLayer is an app for Android 4.4+ devices that lets users <b>encrypt</b> and <b>decrypt</b> text using a <i>customizable key</i>.
          </ProjectBox>

          <ProjectBox title="Chicor" link="https://github.com/Ichicoro/Chicor">
            A flexible, <i>plugin-based</i>, open source Telegram bot for groups written in <b>Python</b>.
          </ProjectBox>

          <ProjectBox title="godot-tetris" link="https://github.com/Ichicoro/godot-tetris">
            A Tetris remake in the <a href="https://godotengine.org">Godot game engine</a>. It is available both as a <a href="https://github.com/Ichicoro/godot-tetris/releases">native binary</a> or as an <a href="https://marte.dev/tetris">HTML5 page</a>.
          </ProjectBox>
        </span>


        {/* solfu projects */}
        <br />
        <h3 className="title-separator">things I've worked on @ soluzioni futura</h3>
        <span>
          These are all projects I've worked on at <a href="https://soluzionifutura.it">Soluzioni Futura</a>
        </span>
        <br /><br />
        <span id='projects-grid-span'>
          <ProjectBox title="LoveTheSign" link="https://lovethesign.it" linkText="Visit website...">
            wip
          </ProjectBox>

          <ProjectBox title="HolyArt App" link="https://github.com/Ichicoro/Chicor">
            The official mobile app for <a href="https://holyart.it">Holyart.it</a>, written in TypeScript and leveraging <a href="https://expo.io">Expo</a>.
          </ProjectBox>

          <ProjectBox title="wip" link="#">
            wip
          </ProjectBox>
        </span>
      </span>
    </span>
  </div>
}
