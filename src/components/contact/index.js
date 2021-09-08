import React, { useState, useEffect } from 'react';

// EMailJS:
// https://www.emailjs.com/
// maxwilsonpereira@gmail.com (Vonogolon)
// npm install emailjs-com --save
// https://www.npmjs.com/package/emailjs-com
import emailjs from 'emailjs-com';

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
// import AnchorLink from "react-anchor-link-smooth-scroll";

import classes from './style.module.scss';
import Button from '../UI/button';
// npm i @material-ui/core
import CircularProgress from '@material-ui/core/CircularProgress';

// npm i react-icons
// https://react-icons.github.io/react-icons/
import { MdEmail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';

export default function Contato(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [messageToUser, setMessageToUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    const timer = setTimeout(() => {
      if (isMounted) {
        setMessageToUser(null);
      }
    }, 60000); // 1 minute is better!
    // }, 6000);
    return () => {
      isMounted = false; // use effect cleanup to set flag false, if unmounted
      clearTimeout(timer);
    };
  }, [messageToUser]);

  function sendEmailHandler(e) {
    e.preventDefault();
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test(email)) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Please fill in all fields correctly
          {/* Favor preencher todos os campos corretamente. */}
        </div>
      );
      return;
    } else if (name.length < 3) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 3 characters for name
          {/* Mínimo 3 caracteres para nome. */}
        </div>
      );
      return;
    } else if (telephone.length > 1 && telephone.length < 6) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 6 characters for phone
          {/* Mínimo 6 caracteres para telefone. */}
        </div>
      );
      return;
    } else if (message.length < 10) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 10 characters for message
          {/* Mínimo 10 caracteres para mensagem. */}
        </div>
      );
      return;
    } else {
      // SENDING MESSAGE:
      setIsLoading(true);
      // npm install emailjs-com --save
      const templateParams = {
        from_name: name,
        from_email: email,
        from_telefone: telephone,
        to_name: 'maxwilsonpereira@gmail.com',
        message: message,
      };
      emailjs
        .send(
          // SERVICE ID:
          'gmail',
          // TEMPLATE ID (get at emailjs.com / Email Templates):
          'max_template_2',
          // PARAMS:
          templateParams,
          // USER ID (get at emailjs.com / Account/API KEYS):
          'user_UD6GHnWA9A9R2eXaKuLwf'
        )
        .then(
          // FROM: https://www.emailjs.com/docs/sdk/send/
          function (response) {
            setIsLoading(false);
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Message sent successfully!
                {/* Mensagem enviada com sucesso! */}
                <br />I will contact you soon!
                {/* Em breve entrarei em contato. */}
              </div>
            );
            // console.log('SUCCESS!', response.status, response.text);
            setName('');
            setEmail('');
            setTelephone('');
            setMessage('');
          },
          function (err) {
            setIsLoading(false);
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Service currently unavailable
                {/* Serviço indisponível no momento. */}
                <br />
                Please contact us by email or phone
                {/* Favor entrar em contato por e-mail ou telefone. */}
              </div>
            );
          }
        );
    }
  }
  function enterKeyPressedHandler(event) {
    // event.preventDefault();
    var code = event.keyCode || event.which;
    if (code === 13) {
      // alert("ENTER KEY PRESSED!");
      sendEmailHandler(event);
    }
  }

  return (
    // <div className={classes[props.closeFormClass]}>
    <div
      className={[classes.containerContact, classes[props.closeFormClass]].join(
        ' '
      )}
    >
      <div className={classes.contactGrid}>
        <div>
          <div className={classes.marginTop} />
          <h1>{props.title}</h1>
          {/* <h2>{props.description}</h2> */}
          <h3>
            <MdEmail
              className={classes.EmailLog}
              size={32}
              color={props.IconColor}
            />
            maxwilsonpereira@gmail.com
          </h3>
          <br />
          <h3>
            <MdCall
              className={classes.EmailLog}
              size={32}
              color={props.IconColor}
            />
            +43 6767357606
          </h3>
          <br />
          {/* <span className={classes.desktopOnly}> */}
          {messageToUser}
          {/* </span> */}
        </div>
        <div id="anchorPoint">
          <input
            onChange={(e) => setName(e.target.value)}
            onKeyPress={enterKeyPressedHandler}
            type="text"
            required
            placeholder="Name"
            name={name}
            value={name}
          />
          {/* <br /> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={enterKeyPressedHandler}
            type="email"
            required
            placeholder="E-mail"
            name={email}
            value={email}
          />
          {/* <br /> */}
          <input
            onChange={(e) => setTelephone(e.target.value)}
            onKeyPress={enterKeyPressedHandler}
            type="number"
            placeholder="Telephone (optional)"
            name={telephone}
            value={telephone}
          />
          {/* <br /> */}
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            required
            placeholder="Message"
            name={message}
            value={message}
          />
          <div className={classes.SubmitBtn}>
            {isLoading ? (
              <div className={classes.progressCircle}>
                <CircularProgress color="primary" />
              </div>
            ) : (
              <Button btnColor={props.btnColor} function={sendEmailHandler}>
                SEND
              </Button>
            )}
          </div>
          {/* <span className={classes.mobileOnly}>
          <br />
          {messageToUser}
        </span> */}
        </div>
        <br />
      </div>
    </div>
    // </div>
  );
}
