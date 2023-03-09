import './App.css';
import './App-mobile.css'
import Header from './Components/Header';
import Work from './Components/Work';
import Footer from './Components/Footer';

function App() {


  const works = [
    {
      "id": "1",
      "img": "img/door.png",
      "link": "sites/OpenDoor/index.html",
      "mainText": "Open door",
      "subText": "Open a hundred correct doors and get a prize"
    },
    {
      "id": "2",
      "img": "img/Calc.png",
      "link": "sites/Calc/index.html",
      "mainText": "Calculator",
      "subText": "A simple calculator for simple calculations"
    },
    {
      "id": "3",
      "img": "img/GGland.png",
      "link": "sites/GG landGoogle/index.html",
      "mainText": "Simlpe landing",
      "subText": "A simple one-page ad for promotional purposes"
    },
    {
      "id": "4",
      "img": "img/GGpromo.png",
      "link": "sites/GG banner/index.html",
      "mainText": "Banner",
      "subText": "Advertising banner for placement on the news website in html format"
    },
    {
      "id": "5",
      "img": "img/GGCS.png",
      "link": "sites/GG CS MAJOR/index.html",
      "mainText": "Site CS:MAJOR",
      "subText": "Animated landing page with promotion rules"
    },
    {
      "id": "6",
      "img": "img/3D site.png",
      "link": "sites/3D site/index.html",
      "mainText": "3D Site",
      "subText": "A beautiful and unusual site with a modified geometry of space"
    },
    {
      "id": "7",
      "img": "img/todo.png",
      "link": "sites/ToDo list/index.html",
      "mainText": "To Do list",
      "subText": "Standard todo sheet for React JS training"
    },
    {
      "id": "8",
      "img": "img/dedsecret.png",
      "link": "sites/Ded secret/index.html",
      "mainText": "Secret Santa",
      "subText": "Site to play secret santa with your friends"
    },
    {
      "id": "9",
      "img": "img/Guitar.png",
      "link": "sites/guitarShop/index.html",
      "mainText": "Guitar shop",
      "subText": "A site with a catalog of guitars for training React JS"
    }
  ]

  return (
    <div className="App">
      <section className='mainscreen'>
        <div className="container">
          <Header />
          <div className="mainscreen-body">
            <h1>Hi, I’m Maksim, <div> Frontend developer </div></h1>
            <p>
              junior frontend developer hungry for creative, useful and modern web applications, eager to work in a positive-minded team.
              My stack is: </p>
            <span>
              <ul>
                <li>- HTML5</li>
                <li>- CSS3</li>
                <li>- SCSS</li>
                <li>- SEO</li>
              </ul>
              <ul>
                <li> - JS (es6)</li>
                <li>- React</li>
                <li>- Git</li>
                <li>- SQL</li>
              </ul>
            </span>
            <div className='main-button'><span></span><a href="#myWork">See my works</a></div>
          </div>
          <div className="social">
            <a href="" className="linkedin"><img src="img/linkedin.svg" alt="" /></a>
            <a href="" className="vk"><img src="img/vk.svg" alt="" /></a>
            <a href="" className='github'><img src="img/github-square.svg" alt="" /></a>
            <span></span>
          </div>
        </div>
      </section>

      <section className='myWork'>
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
