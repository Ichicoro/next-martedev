import React, { FunctionComponent, ReactNode } from "react"
import ProjectBox, { ProjectBoxProps } from "./ProjectBox"

type BoxData = Omit<ProjectBoxProps, "children"> & { contents: ReactNode }
type ProjectRowProps = {
  title?: string
  subtitle?: ReactNode
  data: BoxData[]
}

const ProjectRow: FunctionComponent<ProjectRowProps> = ({
  title, subtitle, data
}: ProjectRowProps) => {
  return <>
    { title && <h3 className="title-separator">{title}</h3> }
    { subtitle && <>
      {subtitle}
      <br /><br />
    </> }
    <span id='projects-grid-span'>
      {data.map((box: BoxData, idx: number, arr: BoxData[]) => {
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
