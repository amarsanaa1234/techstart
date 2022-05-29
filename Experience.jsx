import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <experience>
      <div className='tailbar'>
        <p>Монголдоо анхдагч шинэлэг санаа болох хөгжүүлэгчдын нэгдлийг бодит зүйл болгохоор бид эрхэмлэн ажиллаж байна.</p>
      </div>
      <div className='line'>
      </div>
      <div className='tailbar'>
        <h4>Бидний алсын хараа бол бла бла бла
          Our vision is bla bla bla
          Watashitachi no shyorai no yaru koto wa bura bura bura
        </h4>
      </div>
      <div className='rating'>
        <div>
          <div className='paragraph'>
            <p>99+</p>
          </div>
          <div className='name'>
            <p>Users</p></div>
        </div>
        <div>
          <div className='paragraph'>
            <p>99+</p>
          </div>
          <div className='name'>
            <p>Product</p></div>
        </div>
        <div>
          <div className='paragraph'>
            <p>99+</p>
          </div>
          <div className='name'>
            <p>Rating</p></div>
        </div>
      </div>
      <div className="community">
        <div className='title'>
          <h4>Community</h4>
        </div>
        <div className='answer'>
          <p>Бид танд яаж туслаж чадах вэ?</p>
        </div>
        <div className='comments'>
          <p>Бид хөгжүүлэгчдээ бусад ороэд алдахаас илүү улсдаа хөгжүүлэгчдийн комьюнититэй байх ёстой</p>
        </div>
      </div>
    </experience>
  )
}


export default Experience