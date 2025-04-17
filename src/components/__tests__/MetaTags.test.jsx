import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import MetaTags from '../MetaTags';

describe('MetaTags', () => {
  const renderWithHelmet = (component) => {
    return render(
      <HelmetProvider>
        {component}
      </HelmetProvider>
    );
  };

  it('renders default meta tags correctly', () => {
    renderWithHelmet(<MetaTags />);
    
    expect(document.title).toBe('Portfolio - Webentwickler');
    expect(document.querySelector('meta[name="description"]').content)
      .toBe('Mein persönliches Portfolio als Webentwickler mit Projekten und Erfahrungen');
  });

  it('updates meta tags with custom props', () => {
    const customTitle = 'Custom Title';
    const customDescription = 'Custom Description';
    
    renderWithHelmet(
      <MetaTags 
        title={customTitle}
        description={customDescription}
      />
    );
    
    expect(document.title).toBe(customTitle);
    expect(document.querySelector('meta[name="description"]').content)
      .toBe(customDescription);
  });

  it('handles dark mode changes', () => {
    const { rerender } = renderWithHelmet(<MetaTags />);
    
    // Simuliere Dark Mode
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    
    rerender(<MetaTags />);
    
    expect(document.querySelector('meta[name="theme-color"]').content)
      .toBe('#1a1a1a');
  });

  it('updates viewport meta tag on resize', () => {
    const { rerender } = renderWithHelmet(<MetaTags />);
    
    // Simuliere mobile Viewport
    Object.defineProperty(window, 'innerWidth', { value: 320 });
    window.dispatchEvent(new Event('resize'));
    
    rerender(<MetaTags />);
    
    expect(document.querySelector('meta[name="viewport"]').content)
      .toContain('maximum-scale=1');
  });

  it('handles offline mode', () => {
    const { rerender } = renderWithHelmet(<MetaTags />);
    
    // Simuliere Offline-Modus
    Object.defineProperty(navigator, 'onLine', { value: false });
    window.dispatchEvent(new Event('offline'));
    
    rerender(<MetaTags />);
    
    expect(document.querySelector('meta[name="offline-mode"]')).toBeInTheDocument();
  });
}); 