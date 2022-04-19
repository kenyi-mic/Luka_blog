import React from 'react'

function footer() {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-4 lg:grid-cols-4 max-w-6xl mx-auto">
       {/* first*/}
       <div  className="flex flex-1 flex-col">
         <img src="/logo.png" alt="logo" />
         <p>Let's connect the world with our fashionated Ideas.</p>

       </div>
      {/* second*/}
      <div className="flex flex-1 flex-col">
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
      </div >
       {/* third*/}
       <div className="flex flex-1 flex-col">
         <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
        
        </div>
       
        {/* fourth*/}
        <div  className="flex flex-1 flex-col">
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
        </div>
        
      </div>
    </div>
  )
}

export default footer