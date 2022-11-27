import React from "react"
import Twemoji from "react-twemoji"

type TwemojiSVGProps = {
  children: React.ReactElement
}

const TwemojiSVG: React.FunctionComponent<TwemojiSVGProps> = ({
  children
}: TwemojiSVGProps) => {
  return <Twemoji noWrapper options={{
    size: 16,
    folder: 'svg',
    ext: '.svg',
    className: "title-twemoji"
  }}>
    {children}
  </Twemoji>
}

export default TwemojiSVG
