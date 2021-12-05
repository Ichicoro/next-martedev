import React, { FunctionComponent, ReactNode } from "react"
import ProjectBox, { ProjectBoxProps } from "./ProjectBox"
import { Col, Row } from "react-bootstrap"

type BoxData = Omit<ProjectBoxProps, "children"> & { contents: ReactNode }
type ProjectRowProps = {
  title?: string
  subtitle?: ReactNode
  data: BoxData[]
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const ProjectRow: FunctionComponent<ProjectRowProps> = ({
  title, subtitle, data, col = 4
}: ProjectRowProps) => {
  return <>
    { title && <h3 className="title-separator">{title}</h3> }
    { subtitle && <>
      {subtitle}
      <br /><br />
    </> }
    <span className='projects-grid-span'>
      <Row>
        {data.map((box: BoxData, idx: number, arr: BoxData[]) => {
          return <Col md={col} className={idx !== arr.length - 1 ? "projects-box--marginBottom" : ""}>
            <ProjectBox
              title={box.title}
              key={`project-box-${idx}`}
              links={box.links}
            >
              {box.contents}
            </ProjectBox>
          </Col>
        })}
      </Row>
    </span>
  </>
}

export default ProjectRow
