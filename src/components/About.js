import React from 'react'

export default function About(props) {
  return (
    <>
      <div style={{
        color: props.mode === 'light' ? '#333' : 'white', background: props.mode === 'light' ? '#f9f9f9' : '#042743', maxWidth: '1280px', margin: 'auto', padding: '30px', fontFamily: 'Arial, sans-serif', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'justify'
      }}>
        <h2 style={headerStyle}>Welcome to Text Utils - Your Ultimate Text Manipulation Toolbox!</h2>
        <p style={paragraphStyle}>
          At Text Utils, we are dedicated to providing you with a comprehensive set of tools to manipulate and enhance your text data effortlessly.
          Whether you're a writer, programmer, student, or just someone who deals with text on a daily basis, our collection of powerful text processing utilities will streamline your tasks and save you valuable time.
        </p>
        <h3 style={headerStyle}>Key Features:</h3>
        <ul style={listStyle}>
          <li>Text Formatting: Easily format your text in various styles, including uppercase, lowercase, title case, and more. Say goodbye to tedious manual formatting!</li>
          <li>Word and Character Count: Quickly determine the number of words and characters in your text. It's essential for meeting specific length requirements in essays, articles, or social media posts.</li>
          <li>Language Translation: Translate text between numerous languages with our reliable translation feature. Break down language barriers and connect with a global audience effortlessly.</li>
          <li>Text Summarization: Condense lengthy articles or documents into concise summaries. Ideal for getting the key points without reading through the entire text.</li>
          <li>Keyword Extraction: Extract essential keywords from your text to enhance SEO optimization or analyze content relevance.</li>
          <li>Text Similarity Comparison: Compare the similarity between two pieces of text. Great for plagiarism detection or finding related content.</li>
          <li>Regular Expressions: Utilize the power of regular expressions to perform complex text searches, replacements, and pattern matching.</li>
          <li>Lorem Ipsum Generation: Generate placeholder text for your design projects or website development with our Lorem Ipsum feature.</li>
          <li>Case Conversion: Convert text between different letter cases, such as camelCase, snake_case, PascalCase, and more.</li>
          <li>Remove Duplicates: Effortlessly eliminate duplicate lines or words from your text, ensuring clean and concise output.</li>
          <li>Text Encryption and Decryption: Safeguard sensitive information by encrypting your text, and decrypt it when needed.</li>
          <li>Base64 Encoding and Decoding: Encode binary data into a secure text format or decode it back to its original form.</li>
        </ul>
        <p style={paragraphStyle}>
          Our user-friendly interface and lightning-fast processing ensure that you can perform text manipulations with ease and efficiency.
          We value your privacy, and all your text data is processed securely without any storage on our servers.
        </p>
        <p style={paragraphStyle}>
          Start optimizing your text tasks with Text Utils today and experience the ultimate convenience in text manipulation.
          If you have any questions or suggestions, don't hesitate to contact our dedicated support team.
          Happy text processing!
        </p>
      </div>
    </>
  );
};

// Styles
// const containerStyle = {
//   maxWidth: '1280px',
//   margin: 'auto',
//   padding: '30px',
//   fontFamily: 'Arial, sans-serif',
//   color: '#333',
//   background: '#f9f9f9',
//   borderRadius: '10px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   textAlign: 'justify'
// };

const headerStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#007bff',
};

const paragraphStyle = {
  fontSize: '22px',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const listStyle = {
  fontSize: '22px',
  lineHeight: '1.6',
  marginBottom: '15px',
  paddingLeft: '30px',
};
