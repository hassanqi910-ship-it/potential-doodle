# 🌌 Abstract Canvas Motion

A generative art experiment built with **HTML5 Canvas** and **vanilla JavaScript**, creating a mesmerizing, evolving pattern of colored trails that rotate, ripple, and fade dynamically over time.

![canvas-animation-preview](https://via.placeholder.com/800x400?text=Canvas+Animation+Preview)

---

## 🧠 Overview

This project draws 50 animated points on an HTML canvas.
Each point moves based on sine-wave ripples and rotations, leaving colorful trails behind.
Over time, the entire canvas slowly rotates and scales, creating a hypnotic, evolving motion.

It’s a great example of:

* Canvas transformations (`rotate`, `translate`, `scale`)
* Procedural animation with `requestAnimationFrame`
* Simple generative design using trigonometric functions

---

## 🚀 Features

* 🎨 Dynamic color palette
* 🌀 Continuous motion and fading trails
* 💫 Ripple and rotation effects using `Math.sin`
* 📱 Responsive resizing
* ⚡ Lightweight and dependency-free

---

## 🧩 How It Works

1. **Points:**

   * Each point has an `(x, y)` position, a previous position `(px, py)`, and a direction.
   * They move in circular ripples influenced by time-based sine functions.

2. **Drawing:**

   * Lines are drawn from previous to current positions, creating smooth trails.
   * Dual strokes (shadow + color) add depth and glow.

3. **Canvas Transformations:**

   * The entire canvas is slowly rotated and scaled for an organic motion effect.

---

## 📦 Installation & Usage

1. Clone or download the project:

   ```bash
   git clone https://github.com/yourusername/abstract-canvas-motion.git
   cd abstract-canvas-motion
   ```

2. Open the `index.html` file in your browser — that’s it!
   No build tools or frameworks required.

---

## 🧰 Project Structure

```
abstract-canvas-motion/
├── index.html
├── script.js
└── README.md
```

* `index.html` — Basic HTML structure and canvas element.
* `script.js` — The animation logic (the code you shared).
* `README.md` — Documentation.

---

## 🎨 Color Palette

| Color     | Hex Code  |
| --------- | --------- |
| Deep Blue | `#003049` |
| Red       | `#d62828` |
| Orange    | `#f77f00` |
| Yellow    | `#fcbf49` |
| Cream     | `#eae2b7` |

---

## 🧠 Ideas for Extensions

* Add mouse interaction or touch-based influence.
* Introduce Perlin noise for smoother motion.
* Capture frames to generate art prints.
* Switch palettes automatically over time.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
