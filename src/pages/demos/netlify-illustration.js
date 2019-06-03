import React from 'react'
import Demo from '../../components/demo'
import netlifyIllu from '../../assets/demos/netlify-illustration.svg'

const NetlifyIllustration = () => {
  return (
    <Demo>
      <div className="flex justify-center items-center w-1/2">
        <div className="w-2/5">
          <h3 className="text-teal-600 text-lg font-bold">
            A single, simplified workflow
          </h3>
          <p className="font-normal leading-normal text-gray-800">
            Get all the tools you need to deploy and manage your site. Replace
            your hosting infrastructure, continuous integration, and deployment
            pipeline with a single workflow. Run your site on a purpose-built,
            multi-cloud infrastructure that’s designed for speed, automated to
            scale, and intrinsically secure.
          </p>
        </div>
        <img
          style={{
            transform: 'perspective(800px) rotateY(-20deg)',
            transformOrigin: 'right center',
          }}
          src={netlifyIllu}
        />
      </div>
    </Demo>
  )
}

export default NetlifyIllustration
