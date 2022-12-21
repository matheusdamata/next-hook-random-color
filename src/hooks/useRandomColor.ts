import { useState } from 'react'

export const useRandomColor = () => {
  const [color, setColor] = useState('#')

  const changeColor = () => {
    if (color.length > 1) {
      setColor('#')
    }

    setColor((state) =>
      state.concat(Math.random().toString(16).substring(2, 8)),
    )
    console.log(color)
  }

  return { color, changeColor }
}
