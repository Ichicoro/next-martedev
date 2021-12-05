import React from "react"
import { NextPage } from "next"
import Head from 'next/head'
import HeaderLinks from "../../components/HeaderLinks"
import ProjectBox from "../../components/ProjectBox"

type ArticlePageType = {
  slug: string
}

const ArticlePage: NextPage<ArticlePageType> = ({ slug }) => {
  return <>
    <Head>
      <title>Marte Montipo' - Blog</title>
      <meta name="theme-color" content="#1f1619" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className="centraldiv">
      <span id="spanboxparent">
        <span id="spanbox">
          <h1 className="centralh1">Marte Montipo'</h1>

          <ProjectBox title="About me" /*link={<>
            <a href="https://github.com/ichicoro">github</a>
            &nbsp;|&nbsp;
            <a href="https://twitter.com/_ichicoro">twitter</a>
            &nbsp;|&nbsp;
            <a href="https://t.me/Ichicoro">telegram</a>
            &nbsp;|&nbsp;
            <a href="mailto:me@marte.dev">email</a>
          </>}*/>
            test<br /><br />test<br /><br />test
          </ProjectBox>
        </span>
      </span>
    </div>
  </>
}

export default ArticlePage
