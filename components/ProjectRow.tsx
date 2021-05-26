import React, { FunctionComponent, ReactNode } from "react"
import ProjectBox, { ProjectBoxProps } from "./ProjectBox"

type BoxData = Omit<ProjectBoxProps, "children"> & { contents: ReactNode }
type ProjectRowProps = {
  title?: string
  subtitle?: ReactNode
  links: BoxData[]
}

const ProjectRow: FunctionComponent<ProjectRowProps> = ({
  title, subtitle, links
}: ProjectRowProps) => {
  return <>
    { title && <h3 className="title-separator">{title}</h3> }
    { subtitle && <>
      {subtitle}
      <br /><br />
    </> }
    <span id='projects-grid-span'>
      {links.map((box: BoxData, idx: number, arr: BoxData[]) => {
        return <ProjectBox
          title={box.title}
          key={`project-box-${idx}`}
          link={box.link}
          internalLink={box.internalLink}
          linkText={box.linkText}
        >
          {box.contents}
        </ProjectBox>
      })}
    </span>
  </>
}

export default ProjectRow
