import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiChakraui, SiJest, SiTestinglibrary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

const skillsCardsInfo = [
    {
        title: 'Core Web Technologies',
        technologies: [
            { name: 'HTML', icon: FaHtml5 },
            { name: 'CSS', icon: FaCss3Alt },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        technologies: [
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: RiNextjsFill },
            { name: 'Chakra UI', icon: SiChakraui }
        ]
    },
    {
        title: 'Testing',
        technologies: [
            { name: 'Jest', icon: SiJest },
            { name: 'React Testing Library', icon: SiTestinglibrary }
        ]
    }
]

export { skillsCardsInfo };
