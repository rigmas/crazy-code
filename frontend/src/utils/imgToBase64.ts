export function imgToBase64(image: HTMLImageElement) {
  const c = document.getElementById('myCanvas')! as HTMLCanvasElement
  const ctx = c.getContext('2d')!
  ctx.drawImage(image, 10, 10)
  return c.toDataURL('image/png')
}
