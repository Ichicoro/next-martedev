import Link from "next/link"
import React, { FunctionComponent } from "react"

type LinkData = {
  text: string
  link: string
  internal?: boolean
}
type HeaderLinksProps = {
  links: LinkData[]
}

const HeaderLinks: FunctionComponent<HeaderLinksProps> = ({
  links
}: HeaderLinksProps) => {
  return <h3 className="h3h3">
    {links.map((link: LinkData, idx: number, arr: LinkData[]) => {
      return link.internal !== true ? <>
        <a className="links" href={link.link}>{link.text}</a>{idx !== arr.length - 1 && <span className="ticks"> - </span>}
      </> : <>
        <Link passHref href={link.link}><a className="links">{link.text}</a></Link>{idx !== arr.length - 1 && <span className="ticks"> - </span>}
      </>
    })}
  </h3>
}

export default HeaderLinks
