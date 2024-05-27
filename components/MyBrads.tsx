import React from 'react'
import Image from 'next/image'

const images = {
    logo: "/images/logo.png",
    logo2: "/images/logo2.png"
}

const MyBrads = () => {
  return (
    <div>
<div>
    <h3>My Brands</h3>
</div>

<div>
<p>
    Description
</p>
</div>

<div>
    <Brand />
</div>

    </div>
  )
}

export default MyBrads



const Brand = () => {
  return (
    <div>
{
    Object.keys(images).map((key, index) => (
        <Image key={index} src={images[key]} width={200} height={200} />
    ))
}
    </div>
  )
}