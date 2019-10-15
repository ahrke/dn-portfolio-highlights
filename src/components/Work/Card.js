import React from 'react';
import pic02 from '../../assets/images/pic02.jpg'

const Card = ({title, description, stack}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <p><b>{stack}</b></p>
      <span>
        <img src={pic02} alt="" style={{ width: '70%', margin: 20, borderRadius: 10 }} />
      </span>
    </div>
  )
}

export default Card;