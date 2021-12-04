import Link from "../components/Link"
import React, { FunctionComponent } from "react"
import { LinkData } from "../types/LinkData"

type HeaderLinksProps = {
  links: LinkData[]
}

const HeaderLinks: FunctionComponent<HeaderLinksProps> = ({
  links
}: HeaderLinksProps) => {
  return <h3 className="h3h3">
    {links.map((link: LinkData, idx: number, arr: LinkData[]) => {
      return <Link href={link.link} internal={link.internal} className="links">{link.text}</Link>
    })}
  </h3>
}

export default HeaderLinks
