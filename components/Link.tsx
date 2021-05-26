import React, { FunctionComponent, ReactNode } from "react"
import NextLink from "next/link"

type LinkProps = {
  href: string
  children: ReactNode
  internal?: boolean
  className?: string
}

const Link: FunctionComponent<LinkProps> = ({
  href, children, internal = false, className
}: LinkProps) => {
  return internal !== true
    ? <a className={className} href={href}>{children}</a>
    : <NextLink passHref href={href}><a className={className}>{children}</a></NextLink>
}

export default Link
