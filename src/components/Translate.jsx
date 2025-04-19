// src/components/Translate.jsx
import { useState } from 'react';
import A from '../assets/Sort_Alfa.svg'

const Translate = ({ textToTranslate, fromLanguage, toLanguage, onTranslation, dato }) => {
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
	const options = {
		method: 'POST',
		headers: {
			'x-rapidapi-key': '314833e91bmsh781cc4fc3b205cep11b599jsnaae3d3525f3e',
			'x-rapidapi-host': 'translateai.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
      body: JSON.stringify({
        input_text: textToTranslate, // Texto a traducir
        origin_language: fromLanguage, // Idioma de origen
        target_language: toLanguage, // Idioma de destino
        words_not_to_translate: ""
      }),
    };

    setLoading(true);

    try {
      const response = await fetch('https://translateai.p.rapidapi.com/google/translate/text', options);
   	  const result = await response.json();
   	  setLoading(false)
   	  onTranslation(result)

   	} catch (error) {
   		setLoading(false)

   	}

  };

  return (
    <div>
      <button className="TranslateBtn" onClick={translateText} disabled={loading}>
      	<span className="TranslateSpan">
      		<img src={A} alt=""/>

      		{loading ? 'Translating...' : 'Translate'}
      	</span>
      </button>
    </div>
  );
};

export default Translate;
