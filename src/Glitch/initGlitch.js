import GlitchBoy from './GlitchBoy'

let frame = null

const cancel = () => {
  cancelAnimationFrame(frame)
}

export default (canvas, element) => {
  let frm = 0

  const glitch = new GlitchBoy(canvas, element)

  const tick = () => {
    frm++

    glitch.drawImage(element, 0, 0)


    if(frm % 1000 < 280) {
      glitch.glitchWave((frm * 3) % glitch.height, 10)
    }

    if(
      (frm % 1000 > 430 && frm % 1000 < 500)
      ||
      ((frm % 1000 > 30 && frm % 1000 < 100))
      ||
      ((frm % 1000 > 700 && frm % 1000 < 750))
    ){
      glitch.glitchFillRandom(5, 100 * Math.random())
    }

    if(950 < frm % 1000){
      glitch.glitchSlip(40, 100 * Math.random(), 200 * Math.random())
    }

    frame = requestAnimationFrame(tick)
  }

  frame = requestAnimationFrame(tick)
}

export { cancel }
