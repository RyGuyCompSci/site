
import RyanBackground from './images/ryan-background.jpg';
import Satellite from './images/satellitebw.JPG';
import Rocket from './images/rocket.JPG';
import Cajas from './images/cajas.JPG';

//define sections and section data
export default [
    {
        type: 'image',
        src: RyanBackground,
        alt: 'A picture of me',
    },
    {
        title: 'About',
        id: 'about',
        text: 'I am a Software Developer based in Lexington, Kentucky. I graduated from Taylor University in December 2019 with a Bachelor\'s of Science in Computer Science.'
    },
    {
        title: 'Experience',
        id: 'experience',
        text: 'I have worked for a number of employers.'
    },
    {
        title: 'Projects',
        id: 'projects',
        text: 'During my career I\'ve gotten to work on some pretty cool projects with awesome people.' +
        '<br/><br/>' +
        'During the fall of 2017 I helped write code for a satellite project that I later got to see launch. The code I wrote was a "phantom loop" to pass electrons back and forth between satellites, which we hoped would be a proof - of - concept for sustainable energy during orbit. Read more in our paper <a href="https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1024&context=aseeil-insectionconference" target="_blank">here</a>.' +
        '<br/><br/>'
        
    },
    {
        type: 'image',
        src: Rocket,
        alt: 'Satellite launch NG-11'
    },
    {
        type: 'image',
        src: Satellite,
        alt: 'Satellite launch NG-11',
        caption: 'Me at the NG-11 launch and a picture I took of the rocket taking off. Truly a once-in-a-lifetime experience.'
    },
    {
        title: '',
        id: '',
        text: 'In January 2019 I travelled with 38 other students and Computer Science faculty from Taylor University to Cuenca, Ecuador where we built a full-stack website to manage the church\'s members, events, and ministry courses. I worked on implementing API endpoints in the Python/Flask framework and developed the design of a diploma system for the Courses module.'
    },
    {
        type: 'image',
        src: Cajas,
        alt: 'Sitting in Cajas National Park',
        caption: 'Taking in the natural beauty of the Andes Mountains in Cajas National Park, Ecuador'
    },
    {
        title: '',
        id: '',
        text: ''
    }
];