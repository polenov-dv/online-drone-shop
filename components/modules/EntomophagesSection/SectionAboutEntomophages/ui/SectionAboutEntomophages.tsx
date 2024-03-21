'use client'

import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SliderAboutUs } from '@/components/elements/SliderAboutUs'

import soyImg from '@/public/icon/soy.svg'
import beetImg from '@/public/icon/beet.svg'
import rapeImg from '@/public/icon/rape.svg'
import sunflowerImg from '@/public/icon/sunflower.svg'
import cornImg from '@/public/icon/corn.svg'
import fruitsImg from '@/public/icon/fruits.svg'

const AboutEntomophages = styled.section`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
`

const AboutBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center right;

  @media (width <= 400px) {
    position: static;
    min-height: 272px;
  }
`

const Slider = styled.div`
  position: absolute;
  z-index: 2;
  right: 685px;
  bottom: 115px;
  transform: rotate(25deg);

  @media (width <= 768px) {
    right: 268px;
    bottom: 45px;
    transform: rotate(35deg);
  }

  @media (width <= 400px) {
    top: 152px;
    right: 364px;
    transform: rotate(35deg);
  }

  @media (width <= 320px) {
    top: 146px;
    right: 260px;
    transform: rotate(35deg);
  }
`

const Content = styled.div`
  position: relative;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 663px;
  margin-left: 70px;

  @media (width <= 768px) {
    width: 320px;
    margin-left: 30px;
  }

  @media (width <= 400px) {
    width: 300px;
    margin-left: 0;
  }
`

const InfoTitle = styled.p`
  font-size: 72px;
  padding-top: 110px;
  padding-bottom: 40px;

  @media (width <= 768px) {
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 30px;
  }

  @media (width <= 400px) {
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 28px;
  }
`

const InfoText = styled.p`
  padding-bottom: 70px;
  font-size: 24px;
  line-height: 40px;

  @media (width <= 768px) {
    padding-bottom: 15px;
    font-size: 18px;
    line-height: 31px;
  }
`

const CompositionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (width <= 768px) {
    flex-direction: row;
  }
`

const Composition = styled.ul`
  display: flex;
  gap: 30px;
  padding-bottom: 35px;

  @media (width <= 768px) {
    flex-direction: column;
    gap: 5px;
    padding-bottom: 10px;
  }
`

const CompositionItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;

  @media (width <= 768px) {
    width: 180px;
  }

  @media (width <= 400px) {
    width: 150px;
  }
`

const CompositionItemText = styled.p`
  padding-left: 12px;
  font-size: 18px;

  @media (width <= 768px) {
    padding-left: 8px;
  }

  @media (width <= 400px) {
    font-size: 16px;
    line-height: 27px;
  }
`

const StyledImage = styled(Image)`
  @media (width <= 768px) {
    transform: scale(0.75);
  }
`

const BigText = styled.span`
  font-size: 24px;

  @media (width <= 768px) {
    font-size: 18px;
  }
`

export const SectionAboutEntomophages = () => {
  const [bgImg, setBgImg] = useState('')

  return (
    <AboutEntomophages>
      <AboutBg style={{ backgroundImage: `url(${bgImg})` }}>
        <Slider>
          <SliderAboutUs activeImg={1} setBgImg={setBgImg} />
        </Slider>{' '}
      </AboutBg>

      <Content className={`container`}>
        <Info>
          <InfoTitle>Высокоэффективные Энтомофаги</InfoTitle>

          <InfoText>
            Внесение энтофагов при помощи БПЛА увеличивает <br /> эффективность
            защиты растений до 90%
          </InfoText>

          <CompositionWrapper>
            <Composition>
              <CompositionItem>
                <StyledImage src={soyImg} alt='' />
                <CompositionItemText>
                  до <BigText>90%</BigText> сои
                </CompositionItemText>
              </CompositionItem>
              <CompositionItem>
                <StyledImage src={beetImg} alt='' />
                <CompositionItemText>
                  до <BigText>85%</BigText> <br /> сахарной свеклы
                </CompositionItemText>
              </CompositionItem>
              <CompositionItem>
                <StyledImage src={rapeImg} alt='' />
                <CompositionItemText>
                  до <BigText>70%</BigText> рапса
                </CompositionItemText>
              </CompositionItem>
            </Composition>

            <Composition>
              <CompositionItem>
                <StyledImage src={sunflowerImg} alt='' />
                <CompositionItemText>
                  до <BigText>85%</BigText> подсолнуха
                </CompositionItemText>
              </CompositionItem>
              <CompositionItem>
                <StyledImage src={cornImg} alt='' />
                <CompositionItemText>
                  до <BigText>80%</BigText> кукурузы
                </CompositionItemText>
              </CompositionItem>
              <CompositionItem>
                <StyledImage src={fruitsImg} alt='' />
                <CompositionItemText>
                  до <BigText>90%</BigText> овощных <br /> и плодовых культур
                </CompositionItemText>
              </CompositionItem>
            </Composition>
          </CompositionWrapper>
        </Info>
      </Content>
    </AboutEntomophages>
  )
}
