import './App.css';
import './App-mobile.css'
import Header from './Components/Header';
import Work from './Components/Work';
import Footer from './Components/Footer';

function App() {


  const works = [
    {
      "id": "1",
      "img": "img/GGCS.png",
      "link": "sites/GG CS MAJOR/index.html",
      "mainText": "Site CS:MAJOR",
      "subText": "Animated landing page with promotion rules (HTML5, CSS)"
    },
    {
      "id": "2",
      "img": "img/3D site.png",
      "link": "sites/3D site/index.html",
      "mainText": "3D Site",
      "subText": "A beautiful and unusual site with a modified geometry of space (HTML5, CSS, JS)"
    },
    {
      "id": "3",
      "img": "img/todo.png",
      "link": "sites/ToDo list/index.html",
      "mainText": "To Do list",
      "subText": "Standard todo sheet for React JS training (HTML5, CSS, ReactJS)"
    },
    {
      "id": "4",
      "img": "img/dedsecret.png",
      "link": "sites/Ded secret/index.html",
      "mainText": "Secret Santa",
      "subText": "Site to play secret santa with your friends (HTML5, CSS, ReactJS)"
    },
    {
      "id": "5",
      "img": "img/Shelter.png",
      "link": "sites/Shelter/index.html",
      "mainText": "Shelter",
      "subText": "Animal shelter websites (HTML5, SCSS, JS, Git)"
    },
  ]

  return (
    <div className="app">
      <section className='mainscreen'>
        <div className="container">
          <Header />
          <div className="mainscreen-body">
            <h1>Hi, I’m Maksim, <div className="mainscreen-body__sub-h1"> Frontend developer </div></h1>
            <p>My stack is:</p>
            <span className="mainscreen-body__stack">
              <ul>
                <li>- HTML5</li>
                <li>- CSS3</li>
                <li>- SCSS</li>
                <li>- SEO</li>
                <li>- WebPack</li>
              </ul>
              <ul>
                <li> - JS (es6)</li>
                <li>- TypeScript</li>
                <li>- React</li>
                <li>- Git</li>
                <li>- ESLint</li>
              </ul>
            </span>
          </div>
          <div className="main-button"><a href="#my-work">See my works</a></div>
          <div className="social">
            <a href="https://www.linkedin.com/in/maksim~petrenko/" className="linkedin"><img src="img/in.png" alt="" /></a>
            <a href="https://vk.com/floky_vhg" className="vk"><img src="img/vk.png" alt="" /></a>
            <a href="https://github.com/ifloky" className='github'><img src="img/github.png" alt="" /></a>
            <span></span>
          </div>
        </div>
        <span className="mainscreen__bottom-fire"></span>
      </section>

      <section id="my-work" className="my-work">
        <div className="container">
          {works.map((item) => (
            <Work
              key={item.id}
              name={item.name}
              img={item.img}
              mainText={item.mainText}
              subText={item.subText}
              link={item.link}
            />
          ))}
        </div>
      </section>

      <h6>To be continued...</h6>

      <Footer />
    </div>
  );
}

export default App;
