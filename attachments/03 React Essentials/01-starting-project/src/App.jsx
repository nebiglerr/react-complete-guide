import { useState } from 'react'
import { CORE_CONCEPTS } from '../src/data.js'
import { EXAMPLES } from '../src/data.js'
import Header from './Components/Header/Header.jsx'
import CoreConcept from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx'



function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((conceptItem) => (<TabButton key={conceptItem.title} isSelected={selectedTopic === conceptItem.title.toLowerCase()} onSelect={() => handleSelect(conceptItem.title.toLowerCase())}>{conceptItem.title}</TabButton>))}
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
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
