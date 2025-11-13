// Example custom logo component
// Plain JavaScript (no JSX) - works directly in the browser

import React from 'https://esm.sh/react@18';

// LogoVariant enum values from logo-square.tsx:
// Square = 0, Wide = 1, Narrow = 2
const LogoVariant = {
  Square: 0,
  Wide: 1,
  Narrow: 2
};

export default function CustomLogo({ variant, className }) {
  // variant is a numeric enum: 0 (Square), 1 (Wide), or 2 (Narrow)
  // For Square variant, show full "ACME" in a square
  // For Wide variant, show full "ACME" in a wide rectangle
  // For Narrow variant, show just "A" in a narrow rectangle
  
  console.log('[CustomLogo] Received variant:', variant, 'Type:', typeof variant);
  
  const isSquare = variant === LogoVariant.Square;
  const isWide = variant === LogoVariant.Wide;
  const isNarrow = variant === LogoVariant.Narrow;
  
  // Calculate aspect ratio based on variant
  // Square: 1:1, Wide: 3:1, Narrow: 1:1 (but smaller)
  const aspectRatio = isSquare ? '1 / 1' : 
                      isWide ? '3 / 1' : 
                      '1 / 1';
  
  // For narrow variant, show just "A"
  // For square and wide variants, show "ACME" with "AI LAB" underneath
  if (isNarrow) {
    return React.createElement('div', {
      className: className,
      style: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        aspectRatio: aspectRatio,
        backgroundColor: '#4a90e2',  // Lighter professional blue
        color: 'white',
        fontWeight: 'bold',
        fontSize: '2em',
        borderRadius: '8px',
        filter: 'none',  // Disable any drop shadow effects
        boxShadow: 'none'  // Disable box shadow
      }
    }, 'A');
  }
  
  // Square and wide variants with "ACME" and "AI LAB"
  // Calculate the width needed to match "ACME" text
  // "ACME" is 4 characters, and we need AI LAB to span the same visual width
  const acmeFontSize = isSquare ? '2.5em' : '1.5em';
  const ailabFontSize = isSquare ? '1.4em' : '0.9em';
  
  return React.createElement('div', {
    className: className,
    style: { 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100%',
      aspectRatio: aspectRatio,
      backgroundColor: '#4a90e2',  // Lighter professional blue
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '8px',
      filter: 'none',  // Disable any drop shadow effects
      boxShadow: 'none',  // Disable box shadow
      padding: '0.5em'
    }
  }, 
    React.createElement('div', {
      key: 'wrapper',
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch'
      }
    }, [
      React.createElement('div', {
        key: 'acme',
        style: {
          fontSize: acmeFontSize,
          lineHeight: '1',
          marginBottom: '0.05em',
          textAlign: 'center'
        }
      }, 'ACME'),
      React.createElement('div', {
        key: 'ailab',
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: ailabFontSize,
          fontWeight: 'bold',
          fontFamily: 'monospace',
          lineHeight: '1'
        }
      }, 'AI LAB'.split('').map((letter, index) => 
        React.createElement('span', { key: index }, letter)
      ))
    ])
  );
}
