import React from 'react';

const Card = ({title, description, stack, imgFile, titleColor, link}) => {
  return (
    <a href={link}>
      <div style={{ color: '#3c4245', width: '100%', padding: 15, marginBottom: 25, borderRadius: 10, borderBottom: "3px solid rgb(212, 212, 212)" }}>
        <h3 style={{ color: titleColor, padding: 5, borderColor: 'black', borderWidth: 20 }}>{title}</h3>
        <p>
          {description}
        </p>
        <p><b style={{ color: '#1089ff' }}>{stack}</b></p>
        <span>
          <img src={imgFile} alt="" style={{ width: '95%', borderRadius: 10 }} />
        </span>
      </div>
    </a>
  )
}

export default Card;