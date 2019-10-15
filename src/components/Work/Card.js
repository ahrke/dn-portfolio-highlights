import React from 'react';

const Card = ({title, description, stack, imgFile, titleColor, link}) => {
  return (
    <a href={link}>
      <div style={{ backgroundColor: '#dadada', color: '#3c4245', width: '100%', padding: 15, marginBottom: 15, borderRadius: 10 }}>
        <h3 style={{ color: titleColor, padding: 5 }}>{title}</h3>
        <p>
          {description}
        </p>
        <p><b style={{ color: '#1089ff' }}>{stack}</b></p>
        <span>
          <img src={imgFile} alt="" style={{ width: '90%', margin: 20, borderRadius: 10 }} />
        </span>
      </div>
    </a>
  )
}

export default Card;