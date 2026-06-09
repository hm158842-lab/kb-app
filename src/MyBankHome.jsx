import React, { useState } from "react";
import {
  Bell, Search, Menu, ChevronRight, ChevronLeft, X, MoreVertical, Copy,
  Star, ShoppingBag, PieChart, Wallet, Gift, CreditCard, Plus,
} from "lucide-react";

const KB_YELLOW = "#FFCC00";
const KB_DARK = "#26282B";
const KB_GRAY = "#8B95A1";

const won = (n) => n.toLocaleString("ko-KR");

export default function MyBankHome() {
  const [hidden, setHidden] = useState(false);
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState("자산");
  const [view, setView] = useState("home"); // "home" | "all"

  // 전체 계좌 목록
  const allAccounts = [
    { name: "KB Wise통장-보통예금", number: "614501-04-194268", balance: 1_106_077, group: "입출금" },
    { name: "청약저축", number: "614501-30-552014", balance: 10_000_000, group: "청약" },
    { name: "KB정기예금", number: "614501-88-112233", balance: 50_000_000, group: "예금" },
    { name: "KB내집마련 적금", number: "614501-21-009988", balance: 8_400_000, group: "적금" },
  ];
  const allTotal = allAccounts.reduce((s, a) => s + a.balance, 0);

  // 가짜 데이터 — 실제 계좌 아님
  const accounts = [
    {
      type: "보통예금",
      name: "KB Wise통장-보통예금",
      number: "614501-04-194268",
      balance: 1_106_077,
      contacts: ["이만희", "아이에스패브릭(IS", "김민"],
    },
    {
      type: "정기예금",
      name: "KB Star 정기예금",
      number: "614501-88-112233",
      balance: 50_000_000,
      contacts: ["이만희", "백혜정", "오르라수학"],
    },
    {
      type: "적금",
      name: "KB내집마련 적금",
      number: "614501-21-009988",
      balance: 8_400_000,
      contacts: ["이만희", "백혜정"],
    },
  ];

  const acc = accounts[page];
  const total = accounts.length;

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-200/60 py-6 px-3"
         style={{ fontFamily: "'Apple SD Gothic Neo','Malgun Gothic',sans-serif" }}>
      <div className="w-full max-w-[400px] rounded-[28px] overflow-hidden shadow-xl flex flex-col relative" style={{ backgroundColor: "#F4F6F8" }}>

        {/* 전체 계좌 화면 (오버레이) */}
        {view === "all" && (
          <div className="absolute inset-0 z-30 flex flex-col" style={{ backgroundColor: "#F4F6F8" }}>
            <header className="flex items-center gap-3 px-5 pt-5 pb-4">
              <button onClick={() => setView("home")} className="active:opacity-60">
                <ChevronLeft size={26} style={{ color: KB_DARK }} />
              </button>
              <span className="text-[19px] font-bold" style={{ color: KB_DARK }}>내 계좌</span>
            </header>

            <div className="px-5 pb-4">
              <p className="text-[14px]" style={{ color: KB_GRAY }}>총 잔액</p>
              <p className="text-[28px] font-extrabold tracking-tight" style={{ color: KB_DARK }}>{won(allTotal)}원</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-3">
              {allAccounts.map((a, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#5B4636" }}>
                        <Star size={15} fill={KB_YELLOW} stroke={KB_YELLOW} />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold leading-tight" style={{ color: KB_DARK }}>{a.name}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[12px]" style={{ color: KB_GRAY }}>{a.number}</span>
                          <Copy size={12} className="text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-gray-300" />
                  </div>
                  <p className="text-[23px] font-extrabold mt-3 tracking-tight" style={{ color: KB_DARK }}>{won(a.balance)}원</p>
                  <div className="grid grid-cols-2 gap-2.5 mt-3">
                    <button className="rounded-xl py-2.5 text-[14px] font-bold active:opacity-80"
                            style={{ backgroundColor: KB_YELLOW, color: KB_DARK }}>이체</button>
                    <button className="rounded-xl py-2.5 text-[14px] font-bold active:opacity-80"
                            style={{ backgroundColor: "#EDF0F3", color: KB_DARK }}>거래내역</button>
                  </div>
                </div>
              ))}

              <button className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center justify-center gap-1.5 active:bg-gray-50">
                <Plus size={18} style={{ color: KB_DARK }} />
                <span className="text-[15px] font-bold" style={{ color: KB_DARK }}>계좌 추가하기</span>
              </button>

              <p className="text-center text-[11px] pt-1" style={{ color: KB_GRAY }}>
                ※ 실제 은행과 무관한 데모 화면이에요
              </p>
            </div>
          </div>
        )}

        {/* 헤더 */}
        <header className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1 border border-gray-300 rounded-full pl-1 pr-2.5 py-1">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">B</span>
              </div>
              <span className="text-[13px] font-semibold" style={{ color: KB_DARK }}>베스트</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[19px] font-bold" style={{ color: KB_DARK }}>이만희님</span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4" style={{ color: KB_DARK }}>
            <Bell size={22} /><Search size={22} /><Menu size={24} />
          </div>
        </header>

        <main className="px-4 pb-24 space-y-3">
          {/* 프로모 카드 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm relative">
            <X size={18} className="absolute top-4 right-4 text-gray-400" />
            <p className="text-[19px] font-bold" style={{ color: KB_DARK }}>투자에 관심이 있으신가요?</p>
            <p className="text-[15px] mt-2 leading-snug" style={{ color: "#4E5560" }}>
              오늘의 시황 1분 안에<br/>확인해 보세요
            </p>
            <div className="flex items-center gap-1 mt-4 text-[15px] font-medium" style={{ color: KB_DARK }}>
              1분 브리핑 알림 신청 <ChevronRight size={16} />
            </div>
          </section>

          {/* 배너 */}
          <section className="rounded-2xl px-5 py-4 flex items-center justify-between" style={{ backgroundColor: "#EAEEF2" }}>
            <div>
              <p className="text-[18px] font-bold" style={{ color: KB_DARK }}>스타뱅킹 LTE 10GB</p>
              <p className="text-[15px] mt-1" style={{ color: "#4E5560" }}>7개월 공짜 + AI 비서 무료!</p>
            </div>
            <div className="w-16 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">🤖</div>
          </section>

          {/* 내 계좌 전체보기 */}
          <button onClick={() => setView("all")} className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between active:bg-gray-50">
            <span className="text-[17px] font-bold" style={{ color: KB_DARK }}>내 계좌 전체보기</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* 계좌 카드 (캐러셀) */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#5B4636" }}>
                  <Star size={15} fill={KB_YELLOW} stroke={KB_YELLOW} />
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-tight" style={{ color: KB_DARK }}>{acc.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[13px]" style={{ color: KB_GRAY }}>{acc.number}</span>
                    <Copy size={13} className="text-gray-300" />
                  </div>
                </div>
              </div>
              <MoreVertical size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <p className="text-[27px] font-extrabold tracking-tight" style={{ color: KB_DARK }}>
                {hidden ? "•••••••" : won(acc.balance)}{!hidden && "원"}
              </p>
              <button onClick={() => setHidden((v) => !v)}
                className="text-[12px] border border-gray-300 rounded-full px-2.5 py-0.5" style={{ color: KB_GRAY }}>
                {hidden ? "보기" : "숨김"}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-4">
              <button className="rounded-xl py-3 text-[15px] font-bold active:opacity-80"
                      style={{ backgroundColor: KB_YELLOW, color: KB_DARK }}>계좌이체</button>
              <button className="rounded-xl py-3 text-[15px] font-bold active:opacity-80"
                      style={{ backgroundColor: "#EDF0F3", color: KB_DARK }}>연락처 이체</button>
            </div>

            <div className="flex items-center gap-4 mt-4 overflow-hidden">
              {acc.contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-1.5 shrink-0">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                       style={{ backgroundColor: ["#3B5BDB", "#37B24D", "#F76707"][i % 3] }}>
                    {c[0]}
                  </div>
                  <span className="text-[14px] truncate max-w-[90px]" style={{ color: KB_DARK }}>{c}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 페이저 */}
          <div className="flex items-center justify-center gap-4 py-1">
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
                    className="disabled:opacity-30"><ChevronLeft size={20} className="text-gray-400" /></button>
            <span className="text-[15px] font-medium" style={{ color: KB_DARK }}>{page + 1}/{total}</span>
            <button onClick={() => setPage((p) => Math.min(total - 1, p + 1))} disabled={page === total - 1}
                    className="disabled:opacity-30"><ChevronRight size={20} className="text-gray-400" /></button>
          </div>

          {/* 연결 대기 자산 */}
          <button className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between active:bg-gray-50">
            <span className="text-[16px] font-medium" style={{ color: "#4E5560" }}>연결을 기다리는 자산이 있어요</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <p className="text-center text-[11px] pt-1" style={{ color: KB_GRAY }}>
            ※ 실제 은행과 무관한 데모 화면이에요
          </p>
        </main>

        {/* 하단 탭바 */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 grid grid-cols-5 py-2.5 px-1">
          {[
            { id: "상품", icon: ShoppingBag },
            { id: "자산", icon: PieChart },
            { id: "지갑", icon: Wallet },
            { id: "혜택", icon: Gift },
            { id: "카드", icon: CreditCard },
          ].map(({ id, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)} className="flex flex-col items-center gap-1 active:opacity-60">
              <Icon size={22} style={{ color: tab === id ? KB_DARK : "#B6BCC4" }} />
              <span className="text-[11px] font-medium" style={{ color: tab === id ? KB_DARK : "#B6BCC4" }}>{id}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
