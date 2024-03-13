import chromeLogo from './assets/images/logo-chrome.svg';
import firefoxLogo from './assets/images/logo-firefox.svg';
import operaLogo from './assets/images/logo-opera.svg';

const browsers = [
    {
        imgSrc: chromeLogo,
        alt: 'Chrome Logo',
        header: 'Add to Chrome',
        version: 'Minimum version 62',
    },
    
    {
        imgSrc: firefoxLogo,
        alt: 'Firefox Logo',
        header: 'Add to Firefox',
        version: 'Minimum version 55',
    },
    
    {
        imgSrc: operaLogo,
        alt: 'Opera-mini Logo',
        header: 'Add to Opera',
        version: 'Minimum version 46',
    }
]

export default browsers;