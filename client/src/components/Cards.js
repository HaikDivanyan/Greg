import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these shaders!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Minecraft.jpg'
              text='Made by Jack357'
              label='Minecraft'
              path='/services'
            />
            <CardItem
              src='images/sunset.jpeg'
              text='Made by Hello192'
              label='Minecraft2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/MinecraftShader.jpg'
              text='Made by World_of123'
              label='Minecraft3'
              path='/Browse'
            />
            <CardItem
              src='images/download.jfif'
              text='Made by GevThe52'
              label='Minecraft4'
              path='/products'
            />
            <CardItem
              src='images/shader.jpg'
              text='Made by E4ewd2'
              label='Minecraft5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;