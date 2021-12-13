import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import Mouth from './Mouth'
import FaceContainer from './FaceContainer'

const Face = ({centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius}) => {
  const width = centerX * 2
  const height = centerY * 2

  return (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />

      <Eyes eyeRadius={eyeRadius} eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} />
      <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius} />
    </FaceContainer>
  )
}

export default Face