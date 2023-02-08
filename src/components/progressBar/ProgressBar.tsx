import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBarComponent({value}: any) {
  return (
    <div>
        <ProgressBar 
            height="8px"
            width="100%"
            borderRadius="10px"
            bgColor="#FFCC00"
            transitionDuration= '2s'
            animateOnRender= {true}
            completed={value} 
            baseBgColor='#fff'
            labelColor='#000'
            labelSize='0rem'
        />
      
    </div>
  )
}

export default ProgressBarComponent
