import React from 'react'
import './box.css'
import logo from '../../assets/12.png'
import props from '../../assets/props.png'
import hot from '../../assets/how_to.png'


const Box = () => {

  const data = [
    {
      id: '1',
      pic: logo,
      title: 'Таны Эхлэл',
      doc: 'Гараа сайн бол бариа сайн.TechStart таныг манлайлагч хөгжүүлэгчдийн хүрээлэл дунд эхлэлээ тавихыг урьж байна.'
    },
    {
      id: '2',
      pic: logo,
      title: 'Таны Санаа',
      doc: 'Бизнесийн бодит ашиг авчрах гайхалтай шинэлэг санаанууд таньд байгаа юм биш биз? Таны шинэлэг санаа өнгө төрхийн хүртээмжийг дээшлүүлэх гаргалгааг бид таньд санал болгож байна'
    },
    {
      id: '3',
      pic: logo,
      title: 'Таны Боломж',
      doc: 'TechStart хөгжүүлэгчдийн комьюнитид хувийн болон бизнесийн тэсрэлт хийх гайхалтай боломжуудыг эрэлхийлж байна.'
    },
    {
      id: '4',
      pic: logo,
      title: 'Таны Амжилт',
      doc: 'Хүрээлэл дунд бий болсон амжилт нь таныг илүү том амжилтанд хүрэхэд туслана. Энэхүү боломжийг TechStart Монголын хөгжүүлэгчдэд нээлттэй байлгахыг зорьж байна.'
    },
    {
      id: '5',
      pic: logo,
      title: 'Таны Амжилт',
      doc: 'Хүрээлэл дунд бий болсон амжилт нь таныг илүү том амжилтанд хүрэхэд туслана. Энэхүү боломжийг TechStart Монголын хөгжүүлэгчдэд нээлттэй байлгахыг зорьж байна.'
    },
    {
      id: '6',
      pic: logo,
      title: 'Таны Амжилт',
      doc: 'Хүрээлэл дунд бий болсон амжилт нь таныг илүү том амжилтанд хүрэхэд туслана. Энэхүү боломжийг TechStart Монголын хөгжүүлэгчдэд нээлттэй байлгахыг зорьж байна.'
    }
  ]

  return (
    <div>
      <div className='box'>
        {
          data.map((item, idx) => (
            <div key={idx} className='box_in_the_house'>
              <div className='first_box'>
                <div className="logo">
                  <img src={item.pic} alt="" />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="doc">
                  <p>{item.doc}</p>
                </div>
              </div>
            </div>

          ))
        }
      </div>

      <div className=''>

      </div>

    </div>

  )
}


export default Box