import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import MetaTags from '../MetaTags';

// Mock für window.matchMedia
const mockMatchMedia = (matches = false) => {
  return jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-color-scheme: dark)' ? matches : false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe('MetaTags', () => {
  const renderWithHelmet = (component) => {
    return render(
      <HelmetProvider>
        {component}
      </HelmetProvider>
    );
  };

  beforeEach(() => {
    // Reset des matchMedia Mocks vor jedem Test
    window.matchMedia = mockMatchMedia();
  });

  it('renders default meta tags correctly', () => {
    renderWithHelmet(<MetaTags />);
    
    expect(document.title).toBe('Portfolio - Webentwickler');
    expect(screen.getByRole('meta', { name: 'description' })).toHaveAttribute(
      'content',
      'Mein persönliches Portfolio als Webentwickler mit Projekten und Erfahrungen'
    );
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
    expect(screen.getByRole('meta', { name: 'description' })).toHaveAttribute(
      'content',
      customDescription
    );
  });

  it('handles dark mode changes', () => {
    // Setze Dark Mode Mock
    window.matchMedia = mockMatchMedia(true);

    renderWithHelmet(<MetaTags />);
    
    // Überprüfe, ob das theme-color Meta-Tag korrekt gesetzt ist
    expect(screen.getByRole('meta', { name: 'theme-color' })).toHaveAttribute(
      'content',
      '#1a1a1a'
    );
  });

  it('updates viewport meta tag on resize', () => {
    const { rerender } = renderWithHelmet(<MetaTags />);
    
    // Simuliere mobile Viewport
    Object.defineProperty(window, 'innerWidth', { value: 320 });
    window.dispatchEvent(new Event('resize'));
    
    rerender(<MetaTags />);
    
    // Überprüfe, ob das viewport Meta-Tag korrekt aktualisiert wurde
    expect(screen.getByRole('meta', { name: 'viewport' })).toHaveAttribute(
      'content',
      expect.stringContaining('maximum-scale=1')
    );
  });

  it('handles offline mode', () => {
    const { rerender } = renderWithHelmet(<MetaTags />);
    
    // Simuliere Offline-Modus
    Object.defineProperty(navigator, 'onLine', { value: false });
    window.dispatchEvent(new Event('offline'));
    
    rerender(<MetaTags />);
    
    // Überprüfe, ob das offline-mode Meta-Tag vorhanden ist
    expect(screen.getByRole('meta', { name: 'offline-mode' })).toBeInTheDocument();
  });
}); 