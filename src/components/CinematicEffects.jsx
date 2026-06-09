import { useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

export function CinematicEffects() {
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

  return (
    <>
      <div className="cinematic-bg" aria-hidden="true">
        <span data-depth="0.18" />
        <span data-depth="0.36" />
        <span data-depth="0.62" />
      </div>
    </>
  );
}
