import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Beri - Ứng Dụng Tài Chính Cá Nhân Miễn Phí</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Thông tin về chúng tôi'
              label='Thông tin'
              path='/aboutus'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Hướng dẫn sử dụng'
              label='Hướng dẫn'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Tạo Một Nơi Để Quản Lý Tài Chính Cho Bạn Và Người Thân'
              label='Bắt đầu ngay'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Các kênh truyền thông'
              label='Liên hệ'
              path='https://www.youtube.com/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Github'
              label='Github'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
