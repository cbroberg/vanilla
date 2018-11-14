const cls = require('./services/lib').cls
const log = require('./services/lib').log

var _ = require('lodash')

cls()

const colorArr = [
    {
        name: 'HEADER',
        value: '#2C3E50'
    },
    {
        name: 'MENUBAR',
        value: '#3B97D3'
    },
    {
        name: 'FOOTER',
        value: '#F7F7F7'
    },
    {
        name: 'WORKSPACE',
        value: '#ECF0F1'
    },
    {
        name: 'MENUBAR_SELECTED',
        value: '#81C1EA'
    },
    {
        name: 'TAB',
        value: '#E3E5E5'
    },
    {
        name: 'TAB_HOVER',
        value: '#81C1EA'
    },
    {
        name: 'TAB_SELECTED',
        value: '#3B97D3'
    },
    {
        name: 'TAB_TEXT',
        value: '#5E5E5E'
    },
    {
        name: 'TAB_TEXT_SELECTED',
        value: '#FFFFFF'
    },
    {
        name: 'SEARCHBAR',
        value: '#34495D'
    },
    {
        name: 'BUTTON_TEXT',
        value: '#FFFFFF'
    },
    {
        name: 'BUTTON_DEFAULT',
        value: '#3B97D3'
    },
    {
        name: 'BUTTON_DEFAULT_HOVER',
        value: '#81C1EA'
    },
    {
        name: 'BUTTON_DEFAULT_FOCUS',
        value: '#81C1EA'
    },
    {
        name: 'BUTTON_ALT',
        value: '#13A085'
    },
    {
        name: 'BUTTON_ALT_HOVER',
        value: '#25B89A'
    },
    {
        name: 'BUTTON_ALT_FOCUS',
        value: '#25B89A'
    },
    {
        name: 'ICON_ACTIVE_COLOR',
        value: '#FFFFFF'
    },
    {
        name: 'ICON_DEFAULT_COLOR',
        value: '#34495D'
    },
    {
        name: 'TAB_COLOR_1',
        value: '#81C1EA'
    },
    {
        name: 'TAB_COLOR_2',
        value: '#3B97D3'
    },
    {
        name: 'TAB_COLOR_3',
        value: '#25B89A'
    },
    {
        name: 'TAB_COLOR_4',
        value: '#2AC639'
    },
    {
        name: 'TAB_COLOR_5',
        value: '#F39C12'
    },
    {
        name: 'TAB_COLOR_6',
        value: '#D4CD11'
    },
    {
        name: 'TAB_COLOR_7',
        value: '#E74C3C'
    },
    {
        name: 'TAB_COLOR_8',
        value: '#CE1D1D'
    },
    {
        name: 'TAB_COLOR_9',
        value: '#979898'
    },
    {
        name: 'TAB_COLOR_10',
        value: '#5E5E5E'
    },
    {
        name: 'GAUGE',
        value: '#25B89A'
    },
    {
        name: 'GAUGE_BACKGROUND',
        value: '#D5D5D5'
    },
    {
        name: 'HEART',
        value: '#D42027'
    },
    {
        name: 'CARD_HEADER',
        value: '#2C3E50'
    },
    {
        name: 'CARD_FOOTER',
        value: '#EEEDED'
    },
    {
        name: 'LIST_HEADER',
        value: '#2C3E50'
    },
    {
        name: 'PRIMARY_BLUE',
        value: '#3B97D3'
    },
    {
        name: 'ACCENT_BLUE',
        value: '#2280C3'
    },
    {
        name: 'ASPHALT_LIGHT',
        value: '#34495D'
    },
    {
        name: 'ASPHALT_DARK',
        value: '#2C3E50'
    },
    {
        name: 'EMERALD_LIGHT',
        value: '#25B89A'
    },
    {
        name: 'EMERALD_DARK',
        value: '#13A085'
    },
    {
        name: 'CLOUDY_LIGHT',
        value: '#ECF0F0'
    },
    {
        name: 'CLOUDY_DARK',
        value: '#BDC2C6'
    },
    {
        name: 'DREAMY_BLUE',
        value: '#81C1EA'
    },
    {
        name: 'COMP_BLUE',
        value: '#006CB2'
    },
    {
        name: 'COMP_ORANGE',
        value: '#FF9600'
    },
    {
        name: 'COMP_YELLOW',
        value: '#F8BB31'
    },
    {
        name: 'COMP_ORANGE_2',
        value: '#E98832'
    },
    {
        name: 'REDUX_PURPLE',
        value: '#764EB9'
    },
    {
        name: 'REACTIVEX_PINK',
        value: '#EA228F'
    },
    {
        name: 'REACTIVEX_PURPLE',
        value: '#513085'
    },
    {
        name: 'REACT_CYAN',
        value: '#58C1DC'
    },
    {
        name: 'GRAPHQL_PINK',
        value: '#E33CAA'
    },
    {
        name: 'BLACK',
        value: '#000'
    },
]

function getColor(colorName) {
     var colorFinder = _.find(colorArr, function (color) {
            return color.name === colorName
        })
        return colorFinder.value
}

log(getColor('REACTIVEX_PURPLE'))