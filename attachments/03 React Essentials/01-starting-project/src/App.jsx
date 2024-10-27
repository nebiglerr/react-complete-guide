import reactImg from '../src/assets/react-core-concepts.png';
import componentsImg from '../src/assets/components.png';
import {CORE_CONCEPTS} from '../src/data.js'




const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function CoreConcept({image,title,description}) {
  return (
    <li>
      <img src={image} alt='' />
      <h3> {title}</h3>
      <p>{description}</p>
    </li>

  );
}
function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}


function App() {

  const coreConceptItems = [];
  for (let i = 0; i < CORE_CONCEPTS.length; i++) {
    coreConceptItems.push(<CoreConcept {...CORE_CONCEPTS[i]} />)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {coreConceptItems}
          </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
