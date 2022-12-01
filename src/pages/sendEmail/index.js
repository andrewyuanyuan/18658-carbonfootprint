import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DashboardLayout from '../../common/dashboard';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function SendEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const [base64, setBase64] = useState('');

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    setFileName(file.name);
  };
  const onload = (fileString) => {
    setBase64(fileString);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onload(reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name ', name);
    console.log('email ', email);
    console.log('subject ', subject);
    console.log('message ', message);
    console.log('fileName', fileName);

    axios
      .post('email/sendEmail', {
        username: localStorage.getItem('username'),
        name: name,
        email: email,
        subject: subject,
        message: message,
        base64: base64,
        fileName: fileName,
        referreraddress: localStorage.getItem('emailaddress'),
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <DashboardLayout>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <Typography sx={{ mb: 3 }} variant="h4">
                Send Email to the Referer
              </Typography>
            </div>

            <div className="col-8 form-group mx-auto">
              <dt className="col-sm-3">Name*:</dt>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <dt className="col-sm-3">Contact Email*:</dt>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <dt className="col-sm-3">Subject*:</dt>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Subject"
                name="subject"
                onChange={(event) => setSubject(event.target.value)}
                value={subject}
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <dt className="col-sm-3">Message*:</dt>
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Message"
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                required
              ></textarea>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <dt className="col-sm-3">Resume*:</dt>
              <input type="file" accetp="application/pdf" onChange={onChange} required></input>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-primary" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default SendEmail;
