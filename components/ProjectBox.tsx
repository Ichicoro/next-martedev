 import React, { CSSProperties, FunctionComponent, ReactNode } from "react"
import Link from 'next/link'
import { LinkData } from "../types/LinkData"

export type ProjectBoxProps = {
  title: string
  children: ReactNode
  links?: LinkData[]
}

const ProjectBox: FunctionComponent<ProjectBoxProps> = ({
  title,
  children,
  links
}: ProjectBoxProps) => {
  return <span className='projects-box'>
    <h2 className='projects-box__title'>{title}</h2>
    <p className='projects-box__text'>
      {children}
    </p>
    {links && links?.length > 0 && <div className="readmore-a">
      {links?.map((link, idx, arr) => <>
        {link.internal
          ? <Link key={`${link.link}+${idx}`} href={link.link}>{link.text}</Link>
          : <a key={`${link.link}+${idx}`} href={link.link}>{link.text}</a>
        }
        {idx !== arr.length - 1 && <>&nbsp;|&nbsp;</>}
      </>)}
    </div> }
    {/* { typeof link === "string" && <>
      <div className='readmore-a'>{
        internalLink
          ? <Link href={link}>{linkText}</Link>
          : <a href={link}>{linkText}</a>
      }</div>
    </> }
    { typeof link === "object" && <div className="readmore-a">
      {link}
    </div> } */}
  </span>
}

export default ProjectBox