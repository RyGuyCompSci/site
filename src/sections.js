
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
        title: 'Bio',
        id: 'bio',
        text: 'I am a Software Developer based in Lexington, Kentucky. I graduated from Taylor University in December 2019 with a Bachelor\'s of Science in Computer Science. I stared programming when I was a sophomore in high school. My initial curiosity first came from wanting to know how games were made. I quickly learned that problem-solving using code was a very natural for me to think, and I\'ve been doing it ever since.<br><br>' +
            'The bulk of my experience is in full-stack web development, but I have learned about many facets of computer science. I have knowledge about Language Structures, Algorithm Design, Operating Systems, Artificial Intelligence, and Computer Architecture. I love learning more about these areas. My must-have book for people in CS is Arpaci-Dusseau\'s <i>Operating Systems: Three Easy Pieces</i>.<br><br>' +
            'When I\'m not coding I enjoy hanging out with friends, going for walks (especially in the woods), reading, sketching, or watching Netflix. I recently became a fan of anime television shows and am currently working my way through <i>Attack on Titan</i>. I\'m a big fan of <i>The Minimalists</i> and several YouTube channels devoted to alternative lifestyles, especially <i>Living the Van Life</i> and <i>Living Big in a Tiny House</i>.'
    },
    {
        title: 'Experience',
        id: 'experience',
        text: ''
    },
    {
        type: 'experience',
        company: 'Bizstream Inc.',
        location: 'Allendale, MI',
        position: 'Full-Stack Web Developer',
        duration: 'May 2019 - Present',
        text: '<br/>I joined Bizstream as an intern in summer of 2019. As a developer I was responsible for bug-fixing, designing, maintaining, and implementing new features for a product web platform for juvenile case management. After a short time working I was brought on as an employee and continued working remotely into my last semester of college.<br><br>' +
            'I love Bizstream\'s culture and atmosphere. Here I have definitely worked the hardest of any of my positions, but I\'ve also played the hardest. Bizstream knows how to do web development.<br><br>' +
            'Technologies used: <br>' +
            '- AngularJS<br>' +
            '- Bower<br>' +
            '- Google Maps API<br>' +
            '- C#<br>' +
            '- Classic ASP<br>' +
            '- Entity Framework<br>' +
            '- Microsoft SQL Server<br>' +
            '- SQL Server Management Studio<br>' +
            '- Visual Studio<br><br>' +
        '"A person with great core values, a great developer" - Mark Schmidt, President<br><br><br>'
    },
    {
        type: 'experience',
        company: 'Taylor University',
        location: 'Upland, IN',
        position: 'Teaching Assistant / Data Quality Intern',
        duration: 'August 2017 - December 2019',
        text: '<br>At Taylor University I was hired as a teaching assistant for the object-oriented programming and web design courses. For these courses I instructed labs and assisted students with their lab and homework assignments. My responsibilities also included grading and developing tools to measure student\'s skills.<br><br>' +
            'For my senior year I worked part-time with the admissions department using Salesforce to manage and update applications, observe new student trends, and networked with other student workers to come up with a strategy for retaining students with undecided majors.<br><br>' +
            'Technologies used: <br>' +
            '- C++<br>' +
            '- HTML/CSS<br>' +
            '- Git<br>' +
            '- Vim<br>' +
            '- Salesforce<br>' +
            '- Einstein Analytics<br><br>' +
        '"I think the world of Ryan and would instantly hire him if I had a company" - Dr. Stefan Brandle, Taylor Univeristy Computer Science Department Chair<br><br><br>'
    },
    {
        type: 'experience',
        company: 'SpartanNash',
        location: 'Byron Center, MI',
        position: 'Software Development Intern - Retail Applications',
        duration: 'May 2017 - August 2017',
        text: '<br>At SpartanNash I interned in the retail applciations division of their IT department. I documented new features for an in-store charge accounts system and began designing and integrating the new software for independent system users.<br><br>' +
            'In addition to retail technology, I networked with other SpartanNash interns to analyze the current company careers website and develop a working prototype of a new version.<br><br>' +
            'Technologies used: <br>' +
            '- C#<br>' +
            '- HTML/CSS<br>' +
            '- WordPress.org<br>' +
            '- Visual Studio<br><br>' +
        '"Ryan is a great employee and it\'s a pleasure working with him" - Mike Holcomb, Director of Information Technology Services'
    },
    {
        type: 'experience',
        company: 'Family Fare',
        location: 'Hudsonville, MI',
        position: 'Front-End Manager / Cashier',
        duration: 'October 2014 - August 2018',
        text: '<br>My first job in high school, I started as a cashier and after 6 months on the job requested a promotion to manager. In this role I was responsible for managing customer complaints and care, opening and closing the store, communicating with other departments, handling scheduling issues, managing employee disputes, and new employee training. I was the person-in-charge whenever emergency situations arose (power outages, appliance failure, medical issues). <br><br>'
    },
    {
        type: 'experience',
        company: 'Saint Joseph Mercy Health',
        location: 'Ann Arbor, MI',
        position: 'Information Technology Specialist - Intern',
        duration: 'Summer 2013 / 2014',
        text: '<br>As part of a high-school curriculum I participated in two two-week internships with St. Joseph Mercy Health System in their IT department. I installed workstations, imaged computers, and resolved IT support tickets.<br><br>True story: My first ticket on the job was to investigate a slow computer for one of our office professionals. Upon checking the status of the machine, my mentor and I found that the computer had been on non-stop for over two months. The solution: <a href="https://www.youtube.com/watch?v=t2F1rFmyQmY" target="_blank">turning it off and back on again.</a><br><br>'
    },
    {
        title: 'Projects',
        id: 'projects',
        text: 'During my career I\'ve gotten to work on some pretty cool projects with awesome people. Some of them have even taken me around the world.<br/><br/>'
    },
    {
        type: 'experience',
        company: 'MagnITO Sat Project',
        position: 'Inexpensinve Satellites Create Opportunity',
        duration: 'September 2017 - April 2019',
        text: 'During the fall of 2017 I helped write code for a satellite project. A year and a half later I got to see it launch. The code I wrote was a "phantom loop" to pass electrons back and forth between satellites, which we hoped would be a proof - of - concept for sustainable energy during orbit. Read more in our paper <a href="https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1024&context=aseeil-insectionconference" target="_blank">here</a> and check out <a href="https://www.youtube.com/watch?v=ooDtBVNb6Wg" target="_blank">my footage</a> of the launch.' +
            '<br/><br/>'

    },
    // {
    //     type: 'image',
    //     src: Rocket,
    //     alt: 'Satellite launch NG-11'
    // },
    {
        type: 'image',
        src: Satellite,
        alt: 'Satellite launch NG-11',
        caption: 'Me at the NG-11 launch a mile from where the rocket took off. Truly a once-in-a-lifetime experience.'
    },
    {
        type: 'experience',
        company: 'Corpus-Christi',
        position: 'Open-Source Church Management Software',
        duration: 'January 2019',
        text: 'In January 2019 I travelled with 38 other students and Computer Science faculty from Taylor University to Cuenca, Ecuador where we built a full-stack website to manage ARCO Church\'s members, events, and ministry courses. I worked on implementing API endpoints in the Python/Flask framework and developed the design of a diploma system for the Courses module. After three high-octane weeks of programming among power outages and many, <i>many</i> merge conflicts we got a functional demo for the church. Check out the code (and all 2,600 commits) on the <a href="https://github.com/corpus-christi/corpus-christi" target="_blank">Github repo</a><br><br>'
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
    // {
    //     title: 'Skills / Tools',
    //     id: 'skills',
    //     text: ''
    // },
    // {
    //     type: 'skills',
	// 	title: '',
    //     data: [
    //         { item: 'JavaScript', proficiency: 5 },
    //         { item: 'C++', proficiency: 5 },
    //         { item: 'Java', proficiency: 5 },
    //         { item: 'C', proficiency: 5 },
    //         { item: 'Python', proficiency: 4 },
    //         { item: 'HTML/CSS', proficiency: 4 },
    //         { item: 'SQL', proficiency: 4 },
    //         { item: 'C#', proficiency: 3 },
    //         { item: 'LaTeX', proficiency: 3 },
    //         { item: 'GO', proficiency: 2 },
    //         { item: 'Prolog', proficiency: 2 },
    //         { item: 'Smalltalk', proficiency: 2 },
    //         { item: 'Haskell', proficiency: 2 },
	// 		{ item: 'Ruby', proficiency: 2 }
    //     ]
    // }
];
