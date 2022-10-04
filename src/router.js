import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from "./pages/startpage/start";
import Numberbaseball from "./pages/gamepage/number-baseball/number-baseball";
import Responsetest from "./pages/gamepage/response-test/response-test";
import Rockscissorspaper from "./pages/gamepage/rock-scissors-paper/rock-scissors-paper";
import Tictactoe from "./pages/gamepage/tic-tac-toe/tic-tac-toe";
import Wordrelay from "./pages/gamepage/word-relay/word-relay";

// <BrowserRouter></BrowserRouter> - nav, 페이지 같은 모든 것들을 이것으로 감싸야 한다
// Routes - 여러 개의 Route를 감싸고 핸들링해주는 컴포넌트이다
// Route - path와 그에 맞추어 보여줄 컴포넌트를 설정할 수 있다
// <Route path='url' element={<컴포넌트이름 />}/>

// a태그를 브라우저가 refresh되면서 페이지 이동이 되는데 Link는 refresh되지 않고 페이지 간 이동이 가능

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/"
        >영진랜드</NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/numberbaseball"
        >숫자야구</NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/responsetest"
        >반응속도 테스트</NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/rockscissorspaper"
        >가위바위보</NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/tictactoe"
        >틱택토</NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/wordrelay"
        >끝말잇기</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/numberbaseball" element={<Numberbaseball />} />
        <Route path="/responsetest" element={<Responsetest />} />
        <Route path="/rockscissorspaper" element={<Rockscissorspaper />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/wordrelay" element={<Wordrelay />} />
      </Routes>
    </BrowserRouter>
  );
}
