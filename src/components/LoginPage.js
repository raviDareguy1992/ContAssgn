import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import './AppHeader.css';

import { contactsActions, nameActions } from "./store";
export default function LoginPage() {
  const history = useNavigate();
  const dispConAction = useDispatch();
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passRef = useRef('');
  const [disab, setDisab] = useState(true);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const loginContactHandler = function (event) {
    dispConAction(nameActions.nameaction({ name: nameRef.current.value, email: emailRef.current.value }));
    history('/contacts', { replace: true });
    fetch('https://jsonplaceholder.typicode.com/users').then(d => d.json()).then(dA => {
      dispConAction(contactsActions.contact(dA));

    });
  }
  const nameInputhan = (e) => {
    if (nameRef.current.value !== '' && emailRef.current.value !== '' && passRef.current.value !== ''
      && regex.test(emailRef.current.value)) {
      setDisab(false);
    }
    else {
      setDisab(true);
    }
  }
  const emailInputhan = (e) => {
    if (nameRef.current.value !== '' && emailRef.current.value !== '' && passRef.current.value !== '' &&
      regex.test(emailRef.current.value)) {
      setDisab(false);
    }
    else {
      setDisab(true);
    }
  }
  const passInputhan = (e) => {
    if (nameRef.current.value !== '' && emailRef.current.value !== '' && passRef.current.value !== '' &&
      regex.test(emailRef.current.value)) {
      setDisab(false);
    }
    else {
      setDisab(true);
    }
  }
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Contacts</h3>

                  <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg"
                      placeholder="Name"
                      ref={nameRef} onChange={nameInputhan} />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg"
                      placeholder="Email"
                      ref={emailRef} onChange={emailInputhan} />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg"
                      placeholder="Enter password"
                      ref={passRef} onChange={passInputhan} />
                  </div>
                  <button className="btn btn-primary btn-lg btn-block"
                    onClick={loginContactHandler} disabled={disab}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}