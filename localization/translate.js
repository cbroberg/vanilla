const cls = require('.../services/lib').cls
const log = require('.../services/lib').log
const sleep = require('.../services/lib').sleep
var _ = require('lodash')
const uuidv5 = require('uuid/v5')
const uuidv4 = require('uuid/v4')

cls()

log('Translation')

const uuidNamespace = uuidv4()
var  currentLocale = 'en-us'


const locales = [
    {
        id: 'en-us',
        lang: 'English (US)'
    }, 
    {
        id: 'en-gb',
        lang: 'English (GB)'
    }, 
    {
        id: 'da',
        lang: 'Dansk'
    }, 
    {
        id: 'de',
        lang: 'Deutsch'
    },    
]

var keyTableArr = []

var keyTableObj = {
    id: null,
    locale: Object,
    message: '',
    translate: false,
    isTranslated: false
    // namespace (TypeOf: [Header, Subheader, Button, Label, Body, Toast, Tooltip]), Context (Description of context)
}

var text = Object.create(keyTableObj)
text.id = uuidv5('This is in English, and will be translated to Danish automatically', uuidNamespace)
text.locale = locales[0]
text.message = 'This is in English, and will be translated to Danish automatically'
text.translate = true
text.isTranslated = false

log(text)

sleep(2000)

var text2 = Object.create(keyTableObj)
text2.id = uuidv5('Denne tekst er på dansk', uuidNamespace)
text2.locale = locales[2]
text2.message = 'Denne tekst er på dansk'
text2.translate = true
text2.isTranslated = false

log('')
log(text2)

// Before push we need to ask whether the text.message already are in the array
keyTableArr.push(text)

log('')
log(keyTableArr)

keyTableArr.push(text2)

log('')
log(keyTableArr)
log(keyTableArr[0].message)


function translate(message) {
    // check str and if not in keytable push it to the table
     var messageFound = _.find(keyTableArr, function (key) {
            log(`This is the key: ${key.message}`)
            return key.message === message
        })
    if (messageFound) {
        log('Message is already stored')
    } else {
        log('Hey your message is piped for translation ... ')
    }
    return message
}

log(translate('Lost in Translations'))
log(translate('This is in English, and will be translated to Danish automatically'))
log(translate('Denne tekst er på dansk'))
log(translate('Denne tekst er på dansk ...'))


/*
Pseudo:

Developer:
1: Sets the module messages locale to a specific language
2: Writes messages directly in the code wrapped with the translate function 
which returns the original string after it has been piped to the LocalizerStore (DB or JSON)

Examples:
<div>translate('This is in English and wil be translated')</div> / 

<MyComponent color={getColor('ACCENT_BLUE')} label={`${translate('This is a new string)} and this is not translated`}/>



Translate function:
1: Checks which locale is set by developer
2: Check which locale is set by the user (login or fixed)
3: Check if message exists in the keyTableArr og the LocalizerStore in the 

Props/terms:
Reference Language (referenceLang) 
Namespaces
Change Language
Backend: 

React Wrapper
Translation Provider
Translate (HOC)

*/

