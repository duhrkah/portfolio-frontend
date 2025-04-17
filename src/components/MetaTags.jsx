import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ 
  title = 'Portfolio - Webentwickler',
  description = 'Mein persönliches Portfolio als Webentwickler mit Projekten und Erfahrungen',
  keywords = 'Webentwicklung, Portfolio, React, JavaScript, Frontend, Backend',
  image = '/images/og-image.jpg',
  url = window.location.href,
  type = 'website',
  locale = 'de_DE',
  siteName = 'Portfolio',
  twitterHandle = '@username'
}) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // Aktualisiere URL bei Navigation
    setCurrentUrl(window.location.href);
    
    // Prüfe Dark Mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    // Online/Offline Status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Viewport Größe
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamische Meta-Tags basierend auf verschiedenen Zuständen
  const themeColor = isDarkMode ? '#1a1a1a' : '#ffffff';
  const ogImage = isDarkMode ? '/images/og-image-dark.jpg' : '/images/og-image-light.jpg';
  const viewportContent = viewportSize.width < 768 
    ? 'width=device-width, initial-scale=1, maximum-scale=1'
    : 'width=device-width, initial-scale=1, maximum-scale=5';

  return (
    <Helmet>
      {/* Basis Meta-Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Max Mustermann" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content={viewportContent} />
      <meta name="theme-color" content={themeColor} />
      <meta name="language" content="de" />
      <meta name="revisit-after" content="7 days" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content={isDarkMode ? "black" : "white"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon und App Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href={isDarkMode ? "/favicon-dark-32x32.png" : "/favicon-light-32x32.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={isDarkMode ? "/favicon-dark-16x16.png" : "/favicon-light-16x16.png"} />
      <link rel="apple-touch-icon" sizes="180x180" href={isDarkMode ? "/apple-touch-icon-dark.png" : "/apple-touch-icon-light.png"} />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Strukturierte Daten */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Max Mustermann",
          "url": "https://example.com",
          "sameAs": [
            "https://github.com/username",
            "https://linkedin.com/in/username",
            "https://twitter.com/username"
          ],
          "jobTitle": "Webentwickler",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelancer"
          },
          "description": description,
          "image": ogImage,
          "knowsAbout": [
            "Webentwicklung",
            "React",
            "JavaScript",
            "Frontend Development",
            "Backend Development"
          ]
        })}
      </script>

      {/* Breadcrumb-Strukturierte Daten */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Startseite",
            "item": "https://example.com"
          }, {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": currentUrl
          }]
        })}
      </script>

      {/* Dynamische Styles */}
      <style type="text/css">
        {`
          :root {
            --theme-color: ${themeColor};
            --viewport-width: ${viewportSize.width}px;
            --viewport-height: ${viewportSize.height}px;
          }
          body {
            background-color: ${isDarkMode ? '#1a1a1a' : '#ffffff'};
            color: ${isDarkMode ? '#ffffff' : '#1a1a1a'};
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          @media (prefers-reduced-motion: reduce) {
            * {
              transition: none !important;
              animation: none !important;
            }
          }
        `}
      </style>

      {/* Offline-Fallback */}
      {!isOnline && (
        <meta name="offline-mode" content="true" />
      )}
    </Helmet>
  );
};

export default MetaTags; 