import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
import styles from './index.module.css';
import AuthService from './service/auth_service';
import ImageUploaer from './service/image_uploader';


const authService = new AuthService();
const imageUploader = new ImageUploaer();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);