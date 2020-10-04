import React from 'react'

interface Props {
    title: string,
    secondTitle: string,
    link1: string,
    link2: string,
}
const ProjectBox: React.FC<Props> = ({title, secondTitle, link1, link2}) => {
    return (
        <div className="project-box">
            <p>{title}</p>
    <       p>{secondTitle}</p>
            <div className="project-icons">
              <div className="info"><img src="https://www.flaticon.com/svg/static/icons/svg/157/157933.svg" width="80%"/></div>
              <a href={link1} target="_blank"><div className="info"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" width="80%"/></div></a>
              <a href={link2} target="_blank"><div className="info"><img src="https://www.flaticon.com/svg/static/icons/svg/841/841568.svg" width="80%"/></div></a>
            </div>
          </div>
    )
}

export default ProjectBox;
