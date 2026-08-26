const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dashboard-footer">
      <p className="footer-text">© {currentYear} MEDDENT BENEFITS ACCELERATOR V1.0.4</p>
    </footer>
  );
};

export default Footer;
