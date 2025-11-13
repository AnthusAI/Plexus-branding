// Example custom logo component
// This is a simple ES module that exports a React component

export default function CustomLogo({ variant, className }) {
  return (
    <div className={className} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#ff6b35',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.5em',
      borderRadius: '8px'
    }}>
      ACME
    </div>
  );
}

