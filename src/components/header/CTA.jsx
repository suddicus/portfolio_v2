import React from 'react'
import CV from '.././../assets/senku-resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA //this line indicates that this comopnent can be imported and used everywhere in our application.