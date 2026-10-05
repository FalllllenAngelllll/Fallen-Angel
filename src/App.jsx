import React, { useState } from "react";
import {
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  BarChart3,
  FileText,
  Wallet,
  Plus,
  ChevronLeft
} from "lucide-react";

const symbols = [
  { name: "فولاد", price: "4,285", change: "+2.31%", up: true },
  { name: "شستا", price: "1,245", change: "+1.84%", up: true },
  { name: "خودرو", price: "3,120", change: "-1.25%", up: false },
  { name: "وبملت", price: "6,480", change: "+3.12%", up: true },
  { name: "فزر", price: "8,920", change: "-2.08%", up: false }
];

function App() {
  const [watchlist] = useState(["فولاد", "وبملت", "فزر"]);
  const [search, setSearch] = useState("");

  return (
    <div className="app">

      <header className="topbar">
        <div>
          <div className="logo">FALLLEN ANGELLL</div>
          <div className="subtitle">بازار سرمایه ایران</div>
        </div>

        <div className="market-status">
          <span className="dot"></span>
          بازار
        </div>
      </header>

      <main>

        <div className="search-box">
          <Search size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی نماد..."
          />
        </div>

        <section className="market-card">
          <div className="section-title">
            <span>وضعیت بازار</span>
            <ChevronLeft size={18} />
          </div>

          <div className="market-grid">
            <div>
              <small>شاخص کل</small>
              <strong>2,845,120</strong>
              <b className="green">+1.24%</b>
            </div>

            <div>
              <small>ارزش معاملات</small>
              <strong>12.8 همت</strong>
              <b className="green">+8.4%</b>
            </div>
          </div>
        </section>

        <section>
          <div className="section-title">
            <span>قوی‌ترین‌های امروز</span>
            <TrendingUp size={19} className="green" />
          </div>

          <div className="horizontal-list">
            {symbols.filter(s => s.up).map(symbol => (
              <div className="symbol-card" key={symbol.name}>
                <b>{symbol.name}</b>
                <span>{symbol.price}</span>
                <em className="green">{symbol.change}</em>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-title">
            <span>بیشترین افت</span>
            <TrendingDown size={19} className="red" />
          </div>

          <div className="horizontal-list">
            {symbols.filter(s => !s.up).map(symbol => (
              <div className="symbol-card" key={symbol.name}>
                <b>{symbol.name}</b>
                <span>{symbol.price}</span>
                <em className="red">{symbol.change}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-title">
            <span>نقاط ورود منتخب</span>
            <BarChart3 size={19} />
          </div>

          <div className="analysis-row">
            <div>
              <b>وبملت</b>
              <small>RSI مناسب • MACD مثبت</small>
            </div>
            <strong className="green">82/100</strong>
          </div>

          <div className="analysis-row">
            <div>
              <b>فولاد</b>
              <small>حمایت معتبر • روند صعودی</small>
            </div>
            <strong className="green">78/100</strong>
          </div>
        </section>

        <section className="panel">
          <div className="section-title">
            <span>دیده‌بان من</span>
            <Star size={19} />
          </div>

          {watchlist.map(name => {
            const symbol = symbols.find(s => s.name === name);

            return (
              <div className="watch-row" key={name}>
                <div>
                  <b>{name}</b>
                  <small>TSETMC</small>
                </div>

                <span>{symbol?.price || "---"}</span>

                <strong className={symbol?.up ? "green" : "red"}>
                  {symbol?.change || "---"}
                </strong>
              </div>
            );
          })}

          <button className="add-button">
            <Plus size={17} />
            افزودن نماد
          </button>
        </section>

        <section className="menu-grid">

          <div className="menu-item">
            <Wallet />
            <span>پرتفوی</span>
          </div>

          <div className="menu-item">
            <BarChart3 />
            <span>تحلیل تکنیکال</span>
          </div>

          <div className="menu-item">
            <FileText />
            <span>کدال</span>
          </div>

          <div className="menu-item">
            <Star />
            <span>دیده‌بان‌ها</span>
          </div>

        </section>

      </main>

      <footer>
        Falllen Angelll • نسخه اولیه 0.1.0
      </footer>

    </div>
  );
}

export default App;
