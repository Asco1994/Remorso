export default class GlitchBoy {

  constructor(canvas, element) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.element = element

    this.width = element.width || element.naturalWidth
    this.height = element.height || element.naturalHeight
  }

  drawImage(img, x, y) {
    this.canvas.getContext("2d").drawImage(this.element, x, y)
  }

  glitchWave(renderLineHeight, cuttingHeight) {
    const image = this.ctx.getImageData(0, renderLineHeight, this.width, cuttingHeight);
    this.ctx.putImageData(image, 0, renderLineHeight - 10);
  }

  glitchSlip(waveStrength, startHeight, endHeight) {
    if(endHeight < startHeight){
      let temp = endHeight;
      endHeight = startHeight;
      startHeight = temp;
    }
    for(let h = startHeight; h < endHeight; h++){
      if(Math.random() < 0.1)h++;
      let image = this.ctx.getImageData(0, h, this.width, 1);
      this.ctx.putImageData(image, Math.random()*waveStrength-(waveStrength/2), h);
    }
  }

  glitchFillRandom(fillCnt, cuttingMaxHeight) {
    let cw = this.width;
    let ch = this.height;

    for(let i = 0; i< fillCnt; i++){
      let rndX = Math.round(cw * Math.random()) || 1
      let rndY = Math.round(ch * Math.random()) || 1
      let rndW = Math.round(cw * Math.random()) || 1
      let rndH = Math.round(cuttingMaxHeight * Math.random()) || 1

      let image = this.ctx.getImageData(rndX,rndY,rndW, rndH)
      this.ctx.putImageData(image, (rndX* Math.random())%cw, rndY)
    }
  }
}
