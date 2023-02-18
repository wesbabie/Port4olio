import React from "react";

export default function CTA() {
  return (
    <>
      <div className="cta" id="contact">
        <form action="mailto:wesodu448@gmail.com" method="GET">
          <h1 className="text-4xl">Get In Touch</h1>
          <h3 className="text-2xl">
            Getting to this point shows that you might be interested
          </h3>
          <h5 className="text-xl">I hope to hear from you soon</h5>
          <button className=" border rounded-2xl animate-bounce  focus:outline-none focus:ring focus:ring-violet-300">
            Contact Me
          </button>
          <div className="socials">
            <a href="https://twitter.com/yesx_wesley">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/wesbabie">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://web.facebook.com/wesley.fatunsi">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/yesx_wesley/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/message/JT4B7SQ44MB4L1">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
