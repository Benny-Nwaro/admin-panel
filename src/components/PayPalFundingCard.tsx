import React from 'react';

const PayPalFundingCard: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#f9faff',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>PayPal</h3>
      <p style={{ marginBottom: '20px', color: '#6b7280' }}>
        To fund your wallet, please ensure that you transfer the funds to the
        following Educify PayPal account:
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#e6f0ff',
        }}
      >
        <span style={{ fontWeight: 600 }}>Educify</span>
        <button
          onClick={() => copyToClipboard('Educify')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#1d4ed8',
            fontWeight: 600,
          }}
        >
          Copy
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#e6f0ff',
        }}
      >
        <span style={{ fontWeight: 600 }}>payments@educify.com</span>
        <button
          onClick={() => copyToClipboard('payments@educify.com')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#1d4ed8',
            fontWeight: 600,
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PayPalFundingCard;
