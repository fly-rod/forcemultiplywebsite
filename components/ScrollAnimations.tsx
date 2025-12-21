'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Reset all animations on navigation - remove visible classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );

    animatedElements.forEach((el) => {
      el.classList.remove('visible');
    });

    // Force a reflow to ensure the initial state is applied
    void document.body.offsetHeight;

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate classes (use the same query)
    animatedElements.forEach((el) => observer.observe(el));

    // Reset parallax elements on navigation
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.transform = 'translate3d(0, 0, 0)';
    });

    // Parallax effect on scroll (subtle)
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll('.parallax');
          const scrolled = window.pageYOffset;

          parallaxElements.forEach((el) => {
            const element = el as HTMLElement;
            const speed = parseFloat(element.dataset.speed || '0.5');
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
