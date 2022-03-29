const Footer = () => {
  return (
    <footer>
      <a href="https://www.youtube.com" aria-label="youtube">
        <i className="fab fa-youtube"></i>
        {/* <i className="fab fa-youtube"></i> */}
      </a>
      &nbsp; |
      <a href="https://www.instagram.com" aria-label="instagram">
        <i className="fab fa-instagram-square"></i>
      </a>
      &nbsp;|
      <a href="https://www.pinterest.com" aria-label="pinterest">
        <i className="fab fa-pinterest"></i>
      </a>
      <p>&copy; 2021 Patrick Pang, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
