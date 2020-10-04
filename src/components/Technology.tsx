import React from 'react'

interface Props {
    title: string
}

const Technology: React.FC<Props> = ({title}) => {

    return (
        <div className="technology-single">
          <div className="circle"></div>
          <p>{title}</p>
      </div>
    )
}

export default Technology;
