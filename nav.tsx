import React from 'react'

interface NavProps {
	links: string[]
}

export const Nav:React.FC<NavProps> = ({ links }) => {

  return (
    <div>
      {
        links.map((link, index) => (
          <div key={index}>
            {
              link
            }
          </div>
        ))
      }
    </div>
  )
}
