'use client';
// pages/index.tsx
import React, { useState } from 'react';
import { Cipher } from '../model/cipher';

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // 入力をハンドルする
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 暗号化をハンドルする
  const handleEncrypt = () => {
    setResult(Cipher.encrypt(input));
  };

  // 復号化をハンドルする
  const handleDecrypt = () => {
    setResult(Cipher.decrypt(input));
  };

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">暗号化・復号化ツール</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border p-2 rounded w-full text-black"
          placeholder="ここにテキストを入力..."
        />
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <button onClick={handleEncrypt} className="bg-blue-500 text-white px-4 py-2 rounded">
          暗号化
        </button>
        <button onClick={handleDecrypt} className="bg-green-500 text-white px-4 py-2 rounded">
          復号化
        </button>
      </div>
      <div className="p-4 border rounded">
        <p>結果:</p>
        <p className="break-words text-black">{result}</p>
      </div>
    </div>
  );
};

export default Home;
