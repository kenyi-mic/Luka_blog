import React from 'react'

function footer() {
  return (
    <div>
      <div className="flex  grid-col-1 md:grid-cols-4 lg:grid-cols-4">
       {/* first*/}
       <div  className="flex">
         <img src="/logo.png" alt="logo" />
         <p>Let's connect the world with our fashionated Ideas.</p>

       </div>
      {/* second*/}
      <div>
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
      </div>
       {/* third*/}
       <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
        {/* fourth*/}
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
      </div>
    </div>
  )
}

export default footer