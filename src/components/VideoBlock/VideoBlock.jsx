import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import styled, { css } from 'styled-components'
import PlayButton from 'ui/Buttons/PlayButton'
import { aspectRatio } from 'utils/mixins'
import { media, trans } from 'utils/vars'
import Image from 'next/image'
const StyledWrapper = styled.section`
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
  ${media.notebook} {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`

const fadeOut = css`
  transition: ${trans.base} opacity;
  z-index: 2;
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`

const StyledPlay = styled(PlayButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${fadeOut}
`

const ImageWrapper = styled.div`
  & > div {
    ${fadeOut}
  }
`

const StyledVideo = styled(ReactPlayer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`

const AspectBlock = styled.div`
  ${aspectRatio(1920, 800)}

  ${media.ultraWide} {
    ${aspectRatio(1440, 756)}
  }
  ${media.tablet} {
    ${aspectRatio(375, 242)}
  }
`

const VideoBlock = ({ poster, videoUrl, link, className, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <StyledWrapper className={className} {...props}>
      <AspectBlock />
      <StyledVideo
        poster={poster}
        url={link}
        width={'100%'}
        height={'100%'}
        controls
        playing={isPlaying}
        onPlay={(e) => {
          setIsPlaying(true)
        }}
        // onPause={(e) => {
        //   setIsPlaying(false)
        // }}
        onEnded={(e) => {
          setIsPlaying(false)
        }}
      />
      {poster && (
        <ImageWrapper isPlaying={isPlaying && 'playing'}>
          <Image src={poster} layout="fill" objectFit={'cover'} />
        </ImageWrapper>
      )}
      <StyledPlay
        isPlaying={isPlaying && 'playing'}
        onClick={() => {
          setIsPlaying(true)
        }}
      />
    </StyledWrapper>
  )
}

export default VideoBlock
