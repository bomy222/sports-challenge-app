
import React, { useState } from 'react';
import './App.css';

const matches = [
  { id: 1, teams: '맨시티 vs 리버풀', score: '1 : 1', status: '전반 45+' },
  { id: 2, teams: '토트넘 vs 아스날', score: '2 : 3', status: '후반 68' },
  { id: 3, teams: '바르셀로나 vs 레알마드리드', score: '0 : 0', status: '전반 28' },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [bet, setBet] = useState('');

  return (
    <div className="app-container">
      <header>
        <h1>스포챌린지 - 실시간 스포츠 베팅</h1>
        <p>실시간 경기 데이터 & 빠른 승부 예측</p>
      </header>

      <section className="match-list">
        <h2>실시간 경기 중계</h2>
        {matches.map(match => (
          <div
            key={match.id}
            className={`match ${selected === match.id ? 'active' : ''}`}
            onClick={() => setSelected(match.id)}
          >
            <strong>{match.teams}</strong>
            <div>{match.score}</div>
            <small>{match.status}</small>
          </div>
        ))}
      </section>

      {selected && (
        <section className="bet-section">
          <h3>베팅 입력</h3>
          <input
            type="number"
            placeholder="베팅 금액 입력 (원)"
            value={bet}
            onChange={(e) => setBet(e.target.value)}
          />
          <button disabled={!bet}>베팅하기</button>
        </section>
      )}

      <footer>
        <p>© 2025 스포챌린지. All Rights Reserved.</p>
      </footer>
    </div>
  );
}