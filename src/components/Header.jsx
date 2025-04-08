// src/components/Header.jsx

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">스포챌린지</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">홈</a></li>
          <li><a href="/live" className="hover:underline">실시간 경기</a></li>
          <li><a href="/betting" className="hover:underline">베팅</a></li>
        </ul>
      </nav>
    </header>
  );
}