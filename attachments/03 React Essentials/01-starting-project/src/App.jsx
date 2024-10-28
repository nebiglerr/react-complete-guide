import { useState } from 'react'
import { CORE_CONCEPTS } from '../src/data.js'
import { EXAMPLES } from '../src/data.js'
import Header from './Components/Header/Header.jsx'
import CoreConcept from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx'



function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

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
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p> }
          {selectedTopic && (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>)}

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
