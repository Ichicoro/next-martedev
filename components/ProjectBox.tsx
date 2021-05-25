import React, { FunctionComponent, ReactNode } from "react"
import Link from 'next/link'

export type ProjectBoxProps = {
  title: string
  children: ReactNode
  link?: string | ReactNode
  linkText?: string
  internalLink?: string
}

const ProjectBox: FunctionComponent<ProjectBoxProps> = ({
  title,
  children,
  link,
  linkText = "Read more...",
  internalLink
}: ProjectBoxProps) => {
  return <span className='projects-box'>
    <h2 className='projects-box__title'>{title}</h2>
    <p className='projects-box__text'>
      {children}
    </p>
    { typeof link === "string" && <>
      <div className='readmore-a'>{
        internalLink
          ? <Link href={link}>{linkText}</Link>
          : <a href={link}>{linkText}</a>
      }</div>
    </> }
    { typeof link === "object" && <div className="readmore-a">
      {link}
    </div> }
  </span>
}

export default ProjectBox