# Text Translator with Speech Synthesis

A project inspired by DevChallenges.io, developed as practice for a larger future project. It's a simple translator that converts text to speech in the target language.

## Key Features
- Text translation using Google Translator API
- Speech synthesis using ResponsiveVoice
- Quick language swap button (toggle)
- Preference for female voices in speech output
- Audio playback cancellation function
- Text copy button

## Technologies Used
- APIs: Google Translator, ResponsiveVoice
- Frontend: HTML, JavaScript, React, CSS with SASS

## Challenges and Solutions

### Main Challenge: Toggle Implementation
Language swapping presented difficulties with:
- Text and input value switching
- Active/inactive class management for buttons and select elements

Temporary solution implemented, with improvements planned.

### API Selection
- Initially tested Lingvanex (recommended by MiduDev)
- Ultimately chose Google Translator API for its greater stability compared to Lingvanex
- Automated language/voice matching using Deep Seek AI

## Planned Improvements
- Fix active/inactive class system in the toggle component
