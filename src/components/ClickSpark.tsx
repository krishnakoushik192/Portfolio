import { useEffect, useRef } from 'react';

type Spark = {
  x: number;
  y: number;
  startedAt: number;
};

const SPARK_COLOR = '#67e8f9';
const SPARK_COUNT = 8;
const SPARK_RADIUS = 26;
const SPARK_SIZE = 10;
const DURATION = 420;

function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    let sparks: Spark[] = [];
    let animationFrame = 0;
    let pixelRatio = 1;

    const resizeCanvas = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparks = sparks.filter(({ startedAt }) => now - startedAt < DURATION);

      sparks.forEach(({ x, y, startedAt }) => {
        const progress = Math.min((now - startedAt) / DURATION, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const distance = easedProgress * SPARK_RADIUS;
        const lineLength = SPARK_SIZE * (1 - progress);

        context.save();
        context.strokeStyle = SPARK_COLOR;
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.globalAlpha = 1 - progress;
        context.shadowColor = SPARK_COLOR;
        context.shadowBlur = 6;

        for (let index = 0; index < SPARK_COUNT; index += 1) {
          const angle = (index * Math.PI * 2) / SPARK_COUNT;
          const startX = x + Math.cos(angle) * distance;
          const startY = y + Math.sin(angle) * distance;

          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(
            startX + Math.cos(angle) * lineLength,
            startY + Math.sin(angle) * lineLength,
          );
          context.stroke();
        }

        context.restore();
      });

      if (sparks.length > 0) {
        animationFrame = requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const handleClick = (event: MouseEvent) => {
      sparks.push({ x: event.clientX, y: event.clientY, startedAt: performance.now() });

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    />
  );
}

export default ClickSpark;
