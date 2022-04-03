
 import React from 'react';
 import './Common-Resource/css/bootstrap.css'
import './Common-Resource/css/styles.css'
import Header from './Common-Resource/Header/Header';
import Alert from './Common-Resource/Main/Alert';
import FirstSec from './Common-Resource/Main/FirstSec';
import SecondSec from './Common-Resource/Main/SecondSec';
import ThirdSec from './Common-Resource/Main/ThirdSec';
import FourthSec from './Common-Resource/Main/FourthSec';
import FifthSec from './Common-Resource/Main/FifthSec';
import SixthSec from './Common-Resource/Main/SixthSec';
import Footer from './Common-Resource/Footer/Footer';
import YoutubeVideos from './Common-Resource/Main/Youtube/YoutubeVideos';

function App(){
  return (
  <div>
    <Header/>
    <Alert/>
    <FirstSec/>
    <SecondSec/>
    <ThirdSec/>
    <FourthSec/>
    <FifthSec/>
    <SixthSec/>
    <YoutubeVideos/>
    <Footer/>
  </div>
  );
}
export default App;


