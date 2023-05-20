import PasswordG from "../../assets/passwordGenerator.jpg";
import FitnessApp from "../../assets/fitnessApp.jpg";
import TextEditor from "../../assets/textEditor.jpg";
import MobileApp from "../../assets/mobile-app.jpg";

export const projectsData = [
    {
        id: 1,
        image: FitnessApp,
        title: 'GRYND Fitness',
        url:'https://jon-dev092.github.io/grynd-app/',
        category: 'web',
    },
    {
        id: 2,
        image: PasswordG,
        title: 'PasswordGeneraX',
        url:'https://ch4r1i3.github.io/Password-Generator/',
        category: 'web',
    },
    {
        id: 3,
        image: TextEditor,
        title: 'Text Editor',
        url: 'https://pwa4texteditor.herokuapp.com/',
        category: 'web',
    },
    {
        id: 4,
        image: MobileApp,
        title: 'Coming Soon',
        url: '',
        category: 'mobile-app',
    }
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'mobile-app',
    },
];
