
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-[#23232e] py-14" style ={{ position: 'relative', zIndex: 2 }}>
      <div className=" f-container ">
        <Script
          src="https://kit.fontawesome.com/91f6d50e86.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div className="f-icons">
            <a href='https://www.instagram.com/mind.uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <i className="fa-brands fa-instagram fa-2xl btn" style={{ color: "#ffffff" }}></i>
            </a>
            <a href='https://www.linkedin.com/company/mind-uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <i className="fa-brands fa-square-linkedin custom-icon fa-2xl btn"></i>
            </a>
            <a href='mailto:uofc.mind@gmail.com' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <i className="fa-solid fa-envelope fa-2xl btn" style={{ color: "#ffffff" }}></i>
            </a>

        </div>
       
        {/* Copyright */}
        <p className="text-white text-xl f-txt">
          © 2025 MIND UCalgary
        </p>
      </div>
    </footer>
  );
}