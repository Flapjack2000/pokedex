
import { idToImageSRC } from "../helpers"
interface SpriteImageProps {
  id: number
  alt?: string
}

export default function SpriteImage({ id, alt }: SpriteImageProps) {
  return (
    <div>
      <img src={idToImageSRC(id)} alt={alt} />
    </div>
  )
}