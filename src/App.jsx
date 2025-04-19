// src/App.js
import { useState } from 'react';
import Languages from './components/Languages.jsx';
import ActionBtn from './components/ActionBtn.jsx';
import Translate from './components/Translate.jsx'; // Importamos el componente de la API
import copy from './assets/Copy.svg';
import sound from './assets/sound_max_fill.svg';
import sortIcon from './assets/Horizontal_top_left_main.svg';
import './styles/styles.css';
import SpeechBtn from './components/SpeechBtn.jsx'
import logoIo from './assets/logo.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard';


function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('');
  const [toLanguage, setToLanguage] = useState('');
  const [sortResult, setSortResult] = useState('')

  const [srcActive, setSrcActive] = useState(null);
  const [toActive, setToActive] = useState(null);
  const [fromSelectActive, setFromSelectActive] = useState(false);
  const [toSelectActive, setToSelectActive] = useState(false)
  const [sort, setSort] = useState(true)

  const handleTranslation = (translation) => {
    setTranslatedText(translation.translation);
    setSortResult(translation)
  };

  const handleTextChange = (e) => {
      setText(e.target.value);
  };

  const handleSourceActive = (name) => {
    setSrcActive((current) => (current === name ? null : name));
    setFromSelectActive(false); // Reset select active state
  };

  const toLanguageActive = (name) => {
    setToActive((current) => (current === name ? null : name));
  };

  const handleSelectChange = (e) => {
    const selectedLanguage = e.target.value;
    setFromLanguage(selectedLanguage);
    setFromSelectActive(true);
    setSrcActive(null); // Reset button active state
  };

  const handleToSelectChange = (e) => { // This function is to the To Language Select from the second Section
    const toSelectedLanguage = e.target.value;
    setToLanguage(toSelectedLanguage);
    setToActive(false)
    setToSelectActive(true)
  }

  const sortText = () => {
    if (sort == true) {
       textArea.value = translatedText;
       setToLanguage(sortResult.origin_language)
       setFromLanguage(sortResult.target_language)

       handleSourceActive(toLanguage)
      setTranslatedText(text)
    } else {
      setFromLanguage(sortResult.origin_language)
      setToLanguage(sortResult.target_language)
      setTranslatedText(textArea.value)
      handleSourceActive(toLanguage)

      textArea.value = text
    }
    setSort(!sort)
  } /*Para cambiar el texto entre text areas*/

  return (
    <main>
      <div className="logoContainer">
        <img src={logoIo} alt=""/>
      </div>
      
      <div className="SectionsContainer">
        <section className="userText__Section">
          <div className="sectionContainer">
            <div className="LanguageBtn__Container">
              <button
                className={`LanguageBtn__Container--Btn ${srcActive === 'en' ? 'active' : ''}`}
                id="en"
                onClick={() => {setFromLanguage('en'); handleSourceActive('en')}}
                tabIndex="2"
              >
                English
              </button>

              <button
                className={`LanguageBtn__Container--Btn ${srcActive === 'es' ? 'active' : ''}`}
                id="es"
                onClick={() => {setFromLanguage('es'); handleSourceActive('es')}}
                tabIndex="3"
              >
                Spanish
              </button>

              <select
                className={`SelectLanguage__Container ${fromSelectActive ? 'active' : ''}`}
                id="languages"
                tabIndex="4"
                value={fromLanguage}
                onChange={handleSelectChange}
                onClick={(e) => handleSelectChange(e)}
              >
                <Languages />
              </select>
            </div>

            <div className="Line"></div>

            {sort ? <form tabIndex="5">
              <textarea 
                id="textArea"
                maxLength="500"
                placeholder="Introduce your text :)"
                onChange={handleTextChange}
                required
              ></textarea>
            </form> : <form tabIndex="5">
              <textarea 
                id="textArea"
                maxLength="500"
                placeholder="Introduce your text :)"
                onChange={handleTextChange}
                defaultValue={sortResult}
                required
              ></textarea> </form>}

            <div className="ActionBtn__Container">

              <div className="ActionBtn__CopyContainer">
                <CopyToClipboard text={translatedText} onCopy={() => {alert("Copied!")}}>
                    <ActionBtn img={copy} index={7} />
                </CopyToClipboard>
              </div>

              <div className="ActionBtn__CountContainer" >
                { text.length === 500 ? 

                  <p className="ActionBtn__CountContainer--p full">{text.length}/500</p> :
                  <p className="ActionBtn__CountContainer--p">{text.length}/500</p>

                }

                <Translate
                  textToTranslate={text}
                  fromLanguage={fromLanguage}
                  toLanguage={toLanguage}
                  onTranslation={handleTranslation}

                />

              </div>

            </div>

          </div>

        </section>

        <section className="resultText__Section">
          <div className="sectionContainer">
            <div className="LanguageBtn__Container resultBtnContainer">
                <button
                  onClick={() => {setToSelectActive(false) ; setToLanguage('en')}}
                  className={`p ${toLanguage === 'en' ? 'active' : ''}`}
                >
                  English
                </button>
                <button
                  onClick={() => {setToSelectActive(false) ; setToLanguage('es')}}
                  className={`p ${toLanguage === 'es' ? 'active' : ''}`}
                >
                  Spanish
                </button>
                <select
                  onChange={handleToSelectChange}
                  className={`SelectLanguage__Container p ${toSelectActive ? 'active' : ''}`}
                  onClick={(e) => handleToSelectChange(e)}
                >
                  <Languages />
                </select>
                  <div className="switchBtn">
                    <ActionBtn onClick={() => sortText()} img={sortIcon} index={8} />
                  </div>
              </div>

            </div>

            <div className="Line"></div>

          <textarea value={translatedText} disabled></textarea>

          <div className="ActionBtn__Container">

              <div className="ActionBtn__CopyContainer">
                <SpeechBtn soundIcon={sound} speechText={translatedText} lang={toLanguage}/>
                <CopyToClipboard text={translatedText} onCopy={() => {alert("Copied!")}}>
                    <ActionBtn img={copy} index={10} />
                </CopyToClipboard>
              </div>
          </div>
        </section>
      </div>

      <footer>
        <p>Developed by <a href="https://www.linkedin.com/in/Ramses-frontdev">Ramses Castañeda</a></p>
      </footer>
    </main>
  );
}

export default App;