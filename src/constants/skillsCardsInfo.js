import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiChakraui, SiJest, SiTestinglibrary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

const skillsCardsInfo = [
    {
        title: 'Core Web Technologies',
        technologies: [
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'JavaScript', icon: SiJavascript }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        technologies: [
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: RiNextjsFill },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
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
