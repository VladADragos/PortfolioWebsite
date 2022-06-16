import Routes from '../../Routes';
import routiner from '../images/routiner.png';
import catbook from '../images/catbook.png';


const PortfolioItems = [
    {
        name: 'Routiner',
        demo: Routes.projects.routiner.demo,
        github: Routes.projects.routiner.source,
        image: routiner,
        description: "Productivity / Schedule app. User authentication system, password encryption using bcrypt and temporary credentials storage using JWT & localstorage React is used for the front and sass is used for the styling Express is used for the rest backend api Error management system",
        using: [""]
    },
    {
        name: 'Catbook',
        demo: Routes.projects.catbook.demo,
        github: Routes.projects.catbook.source,
        image: catbook,
        description: "Semy finished(working version 1.0). Social media app for cats. User creation,edit & delete.Login & logout.Password encryption.Validation on all the things",
        using: [""]
    }
];

export default PortfolioItems;
export type PortfolioItemType = typeof PortfolioItems[number];