import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiChakraui, SiJest, SiReactrouter, SiTestinglibrary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

const skillsCardsInfo = [
    {
        technologies: [
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: RiNextjsFill },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Jest', icon: SiJest },
            { name: 'React Router', icon: SiReactrouter },
            { name: 'Chakra UI', icon: SiChakraui },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'React Testing Library', icon: SiTestinglibrary }
        ]
    }
]

export { skillsCardsInfo };
