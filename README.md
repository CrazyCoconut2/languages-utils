# Languages Utils

A TypeScript utility package providing language-related enums and types for consistent language handling across applications.

## Installation

```bash
npm install languages-utils
# or
yarn add languages-utils
```

## Usage

```typescript
import { 
  LANGUAGES_CODES,
  LANGUAGES_NAMES,
  NETFLIX_LANGUAGE_MAPPING,
  CONTEXT_REVERSO_LANGUAGE_MAPPING,
  GOOGLE_TRANSLATE_LANGUAGE_MAPPING,
  SpeechRecognitionLanguages,
  SPEECH_RECOGNITION_LANGUAGE_MAPPING,
  ASSEMBLY_LANGUAGE_MAPPING
} from 'languages-utils';

// Example usage
const languageCode: LANGUAGE_CODE = 'en';
const languageName = LANGUAGES_NAMES[languageCode]; // 'English'
const netflixCode = NETFLIX_LANGUAGE_MAPPING[languageCode]; // 'en'
```

## Available Exports

- `LANGUAGES_CODES`: Basic language codes enum
- `LANGUAGES_NAMES`: Human-readable language names
- `NETFLIX_LANGUAGE_MAPPING`: Netflix-specific language codes
- `CONTEXT_REVERSO_LANGUAGE_MAPPING`: Context Reverso language codes
- `GOOGLE_TRANSLATE_LANGUAGE_MAPPING`: Google Translate language codes
- `SpeechRecognitionLanguages`: Comprehensive speech recognition language codes
- `SPEECH_RECOGNITION_LANGUAGE_MAPPING`: Simplified speech recognition mapping
- `ASSEMBLY_LANGUAGE_MAPPING`: Assembly AI language codes

## License

MIT
