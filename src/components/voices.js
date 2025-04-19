export function getVoice(languageCode) {
  switch (languageCode) {
    case 'ar': return 'Arabic Female';
    case 'bn': return 'Bangla India Female';
    case 'zh-Hans': return 'Chinese Female';
    case 'zh-Hant': return 'Chinese Taiwan Female';
    case 'cs': return 'Czech Female';
    case 'da': return 'Danish Female';
    case 'nl': return 'Dutch Female';
    case 'en': return 'US English Female';
    case 'fi': return 'Finnish Female';
    case 'fr': return 'French Female';
    case 'de': return 'Deutsch Female';
    case 'el': return 'Greek Female';
    case 'hi': return 'Hindi Female';
    case 'hu': return 'Hungarian Female';
    case 'is': return 'Icelandic Female';
    case 'id': return 'Indonesian Female';
    case 'it': return 'Italian Female';
    case 'ja': return 'Japanese Female';
    case 'ko': return 'Korean Female';
    case 'no': return 'Norwegian Female';
    case 'pl': return 'Polish Female';
    case 'pt': return 'Portuguese Female';
    case 'ro': return 'Romanian Female';
    case 'ru': return 'Russian Female';
    case 'sk': return 'Slovak Female';
    case 'es': return 'Spanish Latin American Female';
    case 'sv': return 'Swedish Female';
    case 'ta': return 'Tamil Female';
    case 'th': return 'Thai Female';
    case 'tr': return 'Turkish Female';
    case 'uk': return 'Ukrainian Female';
    case 'vi': return 'Vietnamese Female';
    case 'af': return 'Afrikaans Male';
    case 'sq': return 'Albanian Male';
    case 'hy': return 'Armenian Male';
    case 'bs': return 'Bosnian Male';
    case 'ca': return 'Catalan Male';
    case 'hr': return 'Croatian Male';
    case 'et': return 'Estonian Male';
    case 'lv': return 'Latvian Male';
    case 'mk': return 'Macedonian Male';
    
    case 'ne': return 'Nepali';
    case 'si': return 'Sinhala';
    
    default: return 'US English Female';
  }
}