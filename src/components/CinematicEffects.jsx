import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

export function CinematicEffects() {
  const cursorRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.querySelectorAll('.reveal-item').forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const revealTargets = document.querySelectorAll('.reveal-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    revealTargets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const layers = document.querySelectorAll('[data-depth]');
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0.2);
        layer.style.transform = `translate3d(-50%, ${scrollY * depth}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!cursor || reducedMotion || !finePointer) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let frame = 0;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add('is-active');
    };
    const onEnter = () => cursor.classList.add('is-hovering');
    const onLeave = () => cursor.classList.remove('is-hovering');

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', onMove);
    document.querySelectorAll('a, button, input, textarea').forEach((target) => {
      target.addEventListener('pointerenter', onEnter);
      target.addEventListener('pointerleave', onLeave);
    });
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.querySelectorAll('a, button, input, textarea').forEach((target) => {
        target.removeEventListener('pointerenter', onEnter);
        target.removeEventListener('pointerleave', onLeave);
      });
    };
  }, [reducedMotion]);

  return (
    <>
      <div className="cinematic-bg" aria-hidden="true">
        <span data-depth="0.18" />
        <span data-depth="0.36" />
        <span data-depth="0.62" />
      </div>
      <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
}
