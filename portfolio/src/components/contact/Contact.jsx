import React from "react";

const Contact = () => {
  // eslint-disable-next-line no-undef
  //   const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="contact-bg"> </div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="c-info__item">
              <span>
                <i class="fas fa-phone-square-alt"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-desc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              numquam impedit facere alias repellendus enim fuga aliquam,
              aperiam id sequi?
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                name="message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
