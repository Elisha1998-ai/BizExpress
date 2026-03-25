import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Lenis from 'lenis';

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")!).render(<App />);
