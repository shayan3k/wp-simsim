import React from "react";

export default function ContactUsForm() {
  return (
    <form className="container py-3">
      <h3 className="mb-4 font-0">تماس با ما</h3>
      <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
        <input
          className="form-control font2"
          id="name"
          name="name"
          placeholder="نام"
          type="text"
        />
      </div>
      <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
        <input
          className="form-control font2"
          id="name"
          name="name"
          placeholder="ایمیل"
          type="text"
        />
      </div>
      <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
        <input
          className="form-control font2"
          id="password"
          name="password"
          placeholder="شماره تماس"
          type="password"
        />
      </div>
      <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
        <textarea
          className="form-control font2"
          rows="7"
          id="password2"
          name="password2"
          placeholder="موضوع"
          type="password"
        />
      </div>
      <button className="btn btn-primary btn-lg my-3 font1" type="submit">
        ارسال
      </button>
    </form>
  );
}
