import { useState } from 'react'
import { CORE_CONCEPTS } from '../src/data.js'
import Header from './Components/Header/Header.jsx'
import CoreConcept from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx'



function App() {
  const [selectedTopic,setSelectedTopic] = useState('Plase select tab');

  let tabContent = 'Plase select tab.'

  const coreConceptItems = [];
  for (let i = 0; i < CORE_CONCEPTS.length; i++) {
    coreConceptItems.push(<CoreConcept {...CORE_CONCEPTS[i]} />)
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
