const Footer = () => {
  return (
    <>
      <footer className="w-full border-t border-white/10">
        <div className="container mx-auto px-6 py-6 space-y-1">
          <p className="text-center text-sm tracking-wide opacity-70">
            Eason Chu
            <span className="mx-2 opacity-40">—</span>
            <a
              href="mailto:cy4309@gmail.com"
              className="underline hover:opacity-70"
            >
              cy4309@gmail.com
            </a>
            <span className="mx-2 opacity-40">/</span>
            <span className="opacity-80">+886&nbsp;916&nbsp;530&nbsp;519</span>
          </p>

          <p className="text-center text-xs tracking-wide opacity-50">
            © 2026 CYC Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
