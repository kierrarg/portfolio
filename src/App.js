import Image from './components/Home/Image';
import Image1 from './components/Home/Image1';
import TextBox  from './components/Home/TextBox';
import Nav from './components/Nav';
import MyWork from './components/Art/MyWork';
import Portrait from './components/Art/Style/Portrait'
import Bugs from './components/Art/Style/Bugs';
import Alien from './components/Art/Style/Alien'
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
  }

  getData('/api');
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/MyWork" element={<WorkPage/>}/>
          <Route path="/Portraits" element={<PortraitPage />} />
          <Route path="/Bugs" element={<BugPage />} />
          <Route path="/Alien" element={<AlienPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
}

function FrontPage() {
  return (
    <>
    <Image/>
    <Nav/>
    <TextBox/>
    <Image1/>
    </>
  );
}

function WorkPage() {
  return (
    <>
    <MyWork/>
    <Nav/>
    </>
  );
}

  function ContactPage() {
    return (
      <>
      <Contact />
      <Nav />
      </>
    );
  }

  function BugPage () {
    return (
      <>
      <Bugs />
      <Nav />
      </>
    )
  }

  function PortraitPage () {
    return (
      <>
      <Portrait />
      <Nav />
      </>
    )
  }

  function AlienPage () {
    return (
      <>
      <Alien />
      <Nav />
      </>
    )
  }


export default App;
