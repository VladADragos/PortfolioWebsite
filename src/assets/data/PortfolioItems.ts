import Routes from '../../Routes';
import routiner from '../images/routiner.png';
import catbook from '../images/catbook.png';
import { DiJsBadge, DiMongodb, DiMysql, DiNodejsSmall, DiPhp, DiReact } from 'react-icons/di';


const PortfolioItems = [
    {
        name: 'Routiner',
        demo: Routes.projects.routiner.demo,
        github: Routes.projects.routiner.source,
        demoCredentials: {
            username: "demo",
            password: "123456"
        },
        image: routiner,
        description: "Productivity / Schedule app. User authentication system, password encryption using bcrypt and temporary credentials storage using JWT & localstorage React is used for the front and sass is used for the styling Express is used for the rest backend api Error management system",
        using: [
            {
            icon: DiReact,
            name: "React"
        },
        {
            icon: DiNodejsSmall,
            name: "Express"
        },
        {
            icon: DiMongodb,
            name: "MongoDB"
        },
    ]
    },
    {
        name: 'Catbook',
        demo: Routes.projects.catbook.demo,
        github: Routes.projects.catbook.source,
        demoCredentials: {
            username: "test",
            password: "1234"
        },
        image: catbook,
        description: "Social media app for cats. User creation,edit & delete.Login & logout.Password encryption.Validation on all the things",
        using: [
            {
            icon: DiPhp,
            name: "PHP"
        },
        {
            icon: DiMysql,
            name: "MySQL"
        },
        {
            icon: DiJsBadge,
            name: "Javascript"
        },
    ]
    }
];

export default PortfolioItems;
export type PortfolioItemType = typeof PortfolioItems[number];