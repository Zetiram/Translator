import {useState} from 'react';
import {getVoice} from './voices.js'
import square from '../assets/square.svg'

function SpeechBtn({speechText, soundIcon, lang}) {
	const [isSpeaking, setIsSpeaking] = useState(false);

	const changeStateA = () => {
		setIsSpeaking(false)
	}

	const changeState = () => {
		setIsSpeaking(true)
	}

	const stop = () => {
		responsiveVoice.cancel()
		setIsSpeaking(false)
	}

	let params = {
		onstart: changeState,
		onend: changeStateA
	}


	const speak = (speechText, lang) => {
	let voice = getVoice(lang)
	responsiveVoice.speak(speechText, voice, params)
}
	return(
		<>
			

			{isSpeaking ?

			<button value="Stop" onClick={() => stop()}>
			<img src={square} alt=""/>
			</button> : <button value="Play" onClick={() => speak(speechText, lang)}>
				<img src={soundIcon} alt=""/>
			</button> }
		</>
	)
}
export default SpeechBtn;