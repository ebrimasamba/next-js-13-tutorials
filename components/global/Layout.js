"use client";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import TopHeader from "./header/TopHeader";

const Layout = ({ children, footer }) => {
  return (
    <div className="flex flex-col min-h-screen text-zinc-800">
      <TopHeader />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
