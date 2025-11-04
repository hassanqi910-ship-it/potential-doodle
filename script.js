const c = document.querySelector('#c')
const ctx = c.getContext('2d')

const dpr = Math.min(2, window.devicePixelRatio)

c.style.imageRendering = 'pixelated'
c.style.width = '100vw'
c.style.height = '100vh'

let prevTime = 0

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1); 

const grid = (v, a) => {
  return Math.floor(v / a) * a
}

const padding = (v, p) => {
  return p + v - (p * 2)
}

const points = []
const createPoint = () => {
  const x = grid(Math.random() * c.width, 100)
  const y = grid(Math.random() * c.height, 100)
  const direction = grid(Math.random() * Math.PI * 2, Math.PI / 4)
  
  return {
    x, y, px: x, py: y, direction, r: {}
  }
}

for (let i = 0; i < 50; i++) {
  points.push(createPoint(i / 50))
}

const palette = [
    '#003049',
    '#d62828',
    '#f77f00',
    '#fcbf49',
    '#eae2b7',
  ]

const setup = () => {
  c.width = window.innerWidth * dpr
  c.height = window.innerHeight * dpr
}

const animate = (time) => {
  requestAnimationFrame(animate)
  const delta = time - prevTime
  const cx = c.width / 2;
  const cy = c.height / 2;
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.01)'
  
  const amount = 0.001;
  
  ctx.beginPath()
  ctx.arc(cx, cy, 600 + Math.sin(time / 1000) * 300, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.translate(cx, cy)
  ctx.rotate(amount)
  ctx.translate(-cx, -cy)
  ctx.scale(1 - amount, 1 - amount)
  ctx.translate(cx * amount, cy * amount)
  ctx.drawImage(ctx.canvas, 0, 0)
  // ctx.fillRect(400, 400, c.width - 800, c.height - 800)
  
  ctx.resetTransform();
  
  
  points.forEach((point, index) => {
    
    ctx.lineCap = 'round'
    
    ctx.strokeStyle = '#00000055';
    ctx.lineWidth = 40 + index % 20;
    ctx.beginPath()
    
    ctx.moveTo(cx + point.px, cy + point.py)
    ctx.lineTo(cx + point.x, cy + point.y)
    
    ctx.stroke()
    
    ctx.strokeStyle = palette[index % palette.length];
    ctx.lineWidth = 10 + index % 20;
    ctx.beginPath()
    
    ctx.moveTo(cx + point.px, cy + point.py)
    ctx.lineTo(cx + point.x, cy + point.y)
    
    ctx.stroke()
    
    const speed = Math.max(10, Math.min(100, index / 5)) * delta / 20;
    const ripple = (Math.sin((time + index * 100) / 100))
    const rotation = Math.sin(-(time / 1000))
    
    point.direction += (ripple + rotation) / 35
    point.px = point.x
    point.py = point.y
    point.x += Math.cos((point.direction)) * speed
    point.y += Math.sin((point.direction)) * speed
    
    if (point.x > cx || point.x < -cx) {
      point.x = 0
      point.px = 0
    }
    if (point.y > cy || point.y < -cy) {
      point.y = 0
      point.py = 0
    }
  })
  
  prevTime = time 
}

window.addEventListener('resize', () => {
  setup()
})

setup()

requestAnimationFrame(animate);