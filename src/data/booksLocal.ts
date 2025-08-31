import IntroToJavaCover10 from '../assets/book-covers/978-0-13-376131-3.jpg';
import IntroToJavaCover11 from '../assets/book-covers/978-1-292-22187-8.jpg';
import IntroToJavaCover12 from '../assets/book-covers/978-0-13-652023-8.jpg';
import ComputerScienceCover from '../assets/book-covers/978-0-134-87546-0.jpg';
import ComputerScienceCoverGlobal from '../assets/book-covers/978-1-292-26342-7.jpg';
import VisualCSharp from '../assets/book-covers/978-0-13-808756-2.jpg';
import DatabaseSystems from '../assets/book-covers/978-0-13-397077-7.jpg';
import BasicsOfWebDesign6 from '../assets/book-covers/978-0-13-731330-3.jpg';
import BasicsOfWebDesign4 from '../assets/book-covers/978-0-13-444433-8.jpg';
import MaruchsMySQL2 from '../assets/book-covers/978-1-890774-82-0.jpg';
import MaruchsMySQL4 from '../assets/book-covers/978-1-943873-10-4.jpg';
import SQLforMySQL from '../assets/book-covers/978-0-13-149735-1.jpg';
import JakartaEEAppDev from '../assets/book-covers/978-1-83508-526-4.jpg';
import CoreJSF from '../assets/book-covers/978-0-13-701289-3.jpg';
import PrimeFaceCookbook from '../assets/book-covers/978-1-78439-342-7.jpg';
import ExpressionLanguageSpec from '../assets/book-covers/EL3.0.PFD.RC1.jpg';
import CPlusPlus8 from '../assets/book-covers/978-0-13-376939-5.jpg';
import CPlusPlus9 from '../assets/book-covers/978-1-292-22233-2.jpg';
import CPlusPlus10 from '../assets/book-covers/978-0-137-45062-6.jpg';
import AndroidProgramming from '../assets/book-covers/978-0134706092.jpg';
import JakartaEESpec11 from '../assets/book-covers/jakarta-platform-spec-11.0.jpg';

export interface Book {
    id: string;
    title: string;
    subtitle?: string;
    edition?: string;
    author: string;
    description: string;
    image: string;
    downloadLink?: string;
    buyLink?: string;
    semester: string[];
    course: string[];
}

export const books: Book[] = [
    {
        id: '978-0-13-376131-3',
        title: 'Introduction to Java Programming',
        subtitle: 'Comprehensive Version',
        edition: 'Tenth Edition',
        author: 'Y. Daniel Liang',
        description: 'Introduction to Java Programming seamlessly integrates programming, data structures and' +
            ' algorithms into one text. It takes a fundamentals-first approach, helping you build a strong foundation' +
            ' of basic programming concepts and techniques before moving on to object-oriented programming and' +
            ' advanced Java programming.',
        image: IntroToJavaCover10,
        downloadLink: '/books/978-0-13-376131-3.pdf',
        semester: ["1st Semester", "2nd Semester", "3rd Semester"],
        course: ["Programming Fundamentals", "Advanced Programming Language I", "Data Structures and Algorithms"],
    },
    {
        id: '978-1-292-22187-8',
        title: 'Introduction to Java Programming and Data Structures',
        subtitle: 'Comprehensive Version',
        edition: 'Eleventh Edition, Global Edition',
        author: 'Y. Daniel Liang',
        description: 'Introduction to Java Programming seamlessly integrates programming, data structures and' +
            ' algorithms into one text. It takes a fundamentals-first approach, helping you build a strong foundation' +
            ' of basic programming concepts and techniques before moving on to object-oriented programming and' +
            ' advanced Java programming.',
        image: IntroToJavaCover11,
        downloadLink: '/books/978-1-292-22187-8.pdf',
        semester: ["1st Semester", "2nd Semester", "3rd Semester"],
        course: ["Programming Fundamentals", "Advanced Programming Language I", "Data Structures and Algorithms"],
    },
    {
        id: '978-0-13-652023-8',
        title: 'Introduction to Java Programming and Data Structures',
        subtitle: 'Comprehensive Version',
        edition: 'Twelfth Edition',
        author: 'Y. Daniel Liang',
        description: 'Introduction to Java Programming seamlessly integrates programming, data structures and' +
            ' algorithms into one text. It takes a fundamentals-first approach, helping you build a strong foundation' +
            ' of basic programming concepts and techniques before moving on to object-oriented programming and' +
            ' advanced Java programming.',
        image: IntroToJavaCover12,
        downloadLink: '/books/978-0-13-652023-8.pdf',
        semester: ["1st Semester", "2nd Semester", "3rd Semester"],
        course: ["Programming Fundamentals", "Advanced Programming Language I", "Data Structures and Algorithms"],
    },
    {
        id: '978-0-134-87546-0',
        title: 'Computer Science',
        subtitle: 'An Overview',
        edition: '13th Edition',
        author: 'J. Glenn Brookshear and Dennis Brylow',
        description: 'Computer Science surveys the breadth of computer science, with the depth needed to explore' +
            ' concepts. The text is written for students of computer science as well as students from other' +
            ' disciplines. Its broad coverage and clear exposition are accessible to students from all backgrounds,' +
            ' encouraging a practical and realistic understanding of the subject.',
        image: ComputerScienceCover,
        buyLink: 'https://www.pearson.com/en-us/subject-catalog/p/computer-science-an-overview/P200000003351/9780137503216',
        semester: ["1st Semester"],
        course: ["Information Technology Infrastructure"],
    },
    {
        id: '978-1-292-26342-7',
        title: 'Computer Science',
        subtitle: 'An Overview',
        edition: '13th Edition, Global Edition',
        author: 'J. Glenn Brookshear and Dennis Brylow',
        description: 'Computer Science surveys the breadth of computer science, with the depth needed to explore' +
            ' concepts. The text is written for students of computer science as well as students from other' +
            ' disciplines. Its broad coverage and clear exposition are accessible to students from all backgrounds,' +
            ' encouraging a practical and realistic understanding of the subject.',
        image: ComputerScienceCoverGlobal,
        downloadLink: '/books/978-1-292-26342-7.pdf',
        semester: ["1st Semester"],
        course: ["Information Technology Infrastructure"],
    },
    {
        id: '978-0-13-808756-2',
        title: 'Starting Out With Visual C#',
        edition: 'Sixth Edition',
        author: 'Tony Gaddis',
        description: 'Starting Out with Visual C# is an ideal introduction to Visual C# for anyone, even if you do' +
            ' not have programming experience. Author Tony Gaddis uses step-by-step instructions that are supported' +
            ' by familiar graphics to encourage and motivate you as you learn to create GUI-based, event-driven,' +
            ' Visual C# applications. The hands-on tutorials feature clear, down-to-earth explanations and provide' +
            ' detailed walk-throughs that are easy to follow.',
        image: VisualCSharp,
        buyLink: 'https://www.pearson.com/en-us/subject-catalog/p/starting-out-with-visual-c/P200000010677/9780138094652?creative=765972069814&keyword=&matchtype=&network=g&device=c&gclsrc=aw.ds&gad_source=1&gad_campaignid=22839090472&gbraid=0AAAAADnfL3sP-6f9bmRE8LLBZ5Jbjp0UR&gclid=EAIaIQobChMIhJ-OvtShjwMVGSzUAR07NDjlEAQYASABEgIHcvD_BwE',
        semester: ["1st Semester"],
        course: ["C# Programming"],
    },
    {
        id: '978-0-13-731330-3',
        title: 'Basics of Web Design',
        subtitle: 'HTML5 & CSS',
        edition: 'Sixth Edition',
        author: 'Terry Ann Felke-Morris',
        description: 'Basics of Web Design is your complete beginner\'s guide to web design and web development. The' +
            ' text provides a balance of hard skills and soft skills and a focus on accessibility and ethics. It' +
            ' covers HTML 5 and CSS along with web design and publishing to the web.',
        image: BasicsOfWebDesign6,
        buyLink: 'https://www.pearson.com/en-us/subject-catalog/p/basics-of-web-design-html5--css/P200000003284/9780137313303?srsltid=AfmBOorcP4WM2Rd4xgjEIKI1wGq0FIdk9uBeyMSQ8j39rL_Hyag8PyY0',
        semester: ["2nd Semester"],
        course: ["Web Applications Development I"],
    },
    {
        id: '978-0-13-444433-8',
        title: 'Basics of Web Design',
        subtitle: 'HTML5 & CSS',
        edition: 'Forth Edition',
        author: 'Terry Ann Felke-Morris',
        description: 'Basics of Web Design is your complete beginner\'s guide to web design and web development. The' +
            ' text provides a balance of hard skills and soft skills and a focus on accessibility and ethics. It' +
            ' covers HTML 5 and CSS along with web design and publishing to the web.',
        image: BasicsOfWebDesign4,
        downloadLink: '/books/978-0-13-444433-8.pdf',
        semester: ["2nd Semester"],
        course: ["Web Applications Development I"],
    },
    {
        id: '978-0-13-397077-7',
        title: 'Fundamentals of Database Systems',
        edition: '7th Edition',
        author: 'Ramaz Elmasri, Shamkant B. Navathe',
        description: 'Fundamentals of Database Systems introduces the fundamental concepts necessary for designing,' +
            ' using and implementing database systems and database applications. Emphasis is placed on the' +
            ' fundamentals of database modeling and design, the languages and models provided by the database' +
            ' management systems, and database system implementation techniques.',
        image: DatabaseSystems,
        downloadLink: '/books/978-0-13-397077-7.pdf',
        semester: ["2nd Semester"],
        course: ["SQL Database Programming"],
    },
    {
        id: '978-1-890774-82-0',
        title: 'Murach\'s MySQL',
        edition: '2nd Edition',
        author: 'Joel Murach',
        description: 'This how-to guide to MySQL is perfect for beginning programmers or experienced developers. It' +
            ' shows how to code all the essential SQL statements for working with a MySQL database. It shows how to' +
            ' design a database, including how to use MySQL Workbench to create an EER model. It shows how to take' +
            ' advantage of relatively new MySQL features such as foreign keys, transactions, stored procedures,' +
            ' stored functions, and triggers.',
        image: MaruchsMySQL2,
        downloadLink: '/books/978-1-890774-82-0.pdf',
        semester: ["3rd Semester"],
        course: ["Advanced SQL Programming"],
    },
    {
        id: '978-1-943873-10-4',
        title: 'Murach\'s MySQL',
        edition: '4th Edition',
        author: 'Joel Murach',
        description: 'The fourth edition of our best-selling MySQL book works better than ever for teaching SQL and' +
            ' database design. We’ve carefully checked and updated every example to provide you the best possible' +
            ' learning experience. Whether you’re a complete beginner or a SQL expert, you’ll appreciate the' +
            ' easy-to-understand explanations, clear examples, and step-by-step instructions for efficiently using' +
            ' SQL to work with relational databases.',
        image: MaruchsMySQL4,
        buyLink: 'https://www.murach.com/shop/murach-s-mysql-4th-edition-detail',
        semester: ["3rd Semester"],
        course: ["Advanced SQL Programming"],
    },
    {
        id: '9978-0-13-149735-1',
        title: 'SQL for MySQL Developers',
        subtitle: 'A Comprehensive Tutorial and Reference',
        author: 'Rick F. van der Lans',
        description: 'MySQL version 5 offers a SQL dialect with immense power. In SQL for MySQL Developers, Rick F.' +
            ' van der Lans helps you master this version ofSQL and take advantage of its full potential. Using case' +
            ' study examplesand hands-on exercises, van der Lans illuminates every key concept,technique, and' +
            ' statement–including advanced features that make it easier to create even the most complex statements' +
            ' and programs.',
        image: SQLforMySQL,
        downloadLink: '/books/978-0-13-149735-1.pdf',
        semester: ["3rd Semester"],
        course: ["Advanced SQL Programming"],
    },
    {
        id: '978-1-83508-526-4',
        title: 'Jakarta EE Application Development',
        author: 'David R. Heffelfinger',
        description: 'This book includes coverage for the latest version of the most popular Jakarta EE' +
            ' specifications, including coverage of Jakarta Faces, Jakarta Persistence, Jakarta Enterprise' +
            ' JavaBeans, Contexts and Dependency Injection (CDI), the Jakarta JSON Processing, Jakarta JSON Binding,' +
            ' Jakarta WebSocket, Jakarta Messaging, Jakarta Enterprise Web Services, Jakarta REST, as well as' +
            ' coverage for securing Jakarta EE applications via Jakarta EE Security.',
        image: JakartaEEAppDev,
        downloadLink: '/books/978-1-83508-526-4.pdf',
        semester: ["3rd Semester", "4th Semester"],
        course: ["Web Applications Development II", "Web App Development III"],
    },
    {
        id: '978-0-13-701289-3',
        title: 'Core JavaServer Faces',
        edition: 'Third Edition',
        author: 'David Geary, Cay S. Hortsmann',
        description: 'JavaServer Faces (JSF) is the standard Java EE technology for building web user interfaces. It' +
            ' provides a powerful framework for developing server-side applications, allowing you to cleanly' +
            ' separate visual presentation and application logic. JSF 2.0 is a major upgrade, which not only adds' +
            ' many useful features but also greatly simplifies the programming model by using annotations and' +
            ' “convention over configuration” for common tasks.',
        image: CoreJSF,
        downloadLink: '/books/978-0-13-701289-3.pdf',
        semester: ["3rd Semester"],
        course: ["Web Applications Development II"],
    },
    {
        id: '978-1-78439-342-7',
        title: 'PrimeFaces Cookbook',
        edition: 'Second Edition',
        author: 'Mert Çalışkan, Oleg Varaksin',
        description: 'Over 100 practical recipes to learn PrimeFaces 5.x – the most popular JSF component library on' +
            ' the planet',
        image: PrimeFaceCookbook,
        downloadLink: '/books/978-1-78439-342-7.pdf',
        semester: ["3rd Semester"],
        course: ["Web Applications Development II"],
    },
    {
        id: 'EL3.0.PFD.RC1',
        title: 'Expression Language Specification',
        edition: 'Version 3.0 Public Review Release',
        author: 'Kin-man Chung, editor',
        description: 'This is the Expression Language specification version 3.0, developed the JSR-341 (EL3.0)' +
            ' expert groups under the Java Community Process. See http://www.jcp.org.',
        image: ExpressionLanguageSpec,
        downloadLink: '/books/EL3.0.PFD.RC1.pdf',
        semester: ["3rd Semester", "4th Semester"],
        course: ["Web Applications Development II", "Web App Development III"],
    },
    {
        id: '978-0-13-376939-5',
        title: 'Starting Out With C++',
        subtitle: 'From Control Structures Through Objects',
        edition: 'Eighth Edition',
        author: 'Tony Gaddis',
        description: 'Starting Out with C++ uses author Tony Gaddis\'s clear, step-by-step approach to present' +
            ' essential programming concepts and the fundamentals of the C++ language. Control structures,' +
            ' functions, arrays and pointers are covered before objects and classes. You will learn how, why and' +
            ' when to implement the features and constructs of C++. Every chapter includes clear and easy-to-read' +
            ' code listings, practical real-world examples and an abundance of exercises.',
        image: CPlusPlus8,
        downloadLink: '/books/978-0-13-376939-5.pdf',
        semester: ["4th Semester"],
        course: ["C++ Programming"],
    },
    {
        id: '978-1-292-22233-2',
        title: 'Starting Out With C++',
        subtitle: 'From Control Structures Through Objects',
        edition: 'Ninth Edition, Global Edition',
        author: 'Tony Gaddis',
        description: 'Starting Out with C++ uses author Tony Gaddis\'s clear, step-by-step approach to present' +
            ' essential programming concepts and the fundamentals of the C++ language. Control structures,' +
            ' functions, arrays and pointers are covered before objects and classes. You will learn how, why and' +
            ' when to implement the features and constructs of C++. Every chapter includes clear and easy-to-read' +
            ' code listings, practical real-world examples and an abundance of exercises.',
        image: CPlusPlus9,
        downloadLink: '/books/978-1-292-22233-2.pdf',
        semester: ["4th Semester"],
        course: ["C++ Programming"],
    },
    {
        id: '978-0-137-45062-6',
        title: 'Starting Out With C++',
        subtitle: 'From Control Structures Through Objects',
        edition: 'Tenth Edition',
        author: 'Tony Gaddis',
        description: 'Starting Out with C++ uses author Tony Gaddis\'s clear, step-by-step approach to present' +
            ' essential programming concepts and the fundamentals of the C++ language. Control structures,' +
            ' functions, arrays and pointers are covered before objects and classes. You will learn how, why and' +
            ' when to implement the features and constructs of C++. Every chapter includes clear and easy-to-read' +
            ' code listings, practical real-world examples and an abundance of exercises.',
        image: CPlusPlus10,
        buyLink: 'https://www.pearson.com/en-us/subject-catalog/p/starting-out-with-c-from-control-structures-to-objects/P200000003320/9780137450626?srsltid=AfmBOooN36pPtFiuvythb19w7NhQceJg5W-ue8jyN1-0EL3PMCNi4OSe',
        semester: ["4th Semester"],
        course: ["C++ Programming"],
    },
    {
        id: '978-0134706092',
        title: 'Android Programming',
        subtitle: 'The Big Nerd Ranch Guide',
        edition: '3rd Edition',
        author: 'Bill Phillips, Chris Steward, Kristin Marsicano',
        description: 'Android Programming: The Big Nerd Ranch Guide is an introductory Android book for programmers' +
            ' with Java experience. Based on Big Nerd Ranch’s popular Android bootcamps, this guide will lead you' +
            ' through the wilderness using hands-on example apps combined with clear explanations of key concepts' +
            ' and APIs. This book focuses on practical techniques for developing apps compatible with Android 4.4' +
            ' (KitKat) through Android 7.0 (Nougat) and beyond.',
        image: AndroidProgramming,
        downloadLink: '/books/978-0134706092.pdf',
        semester: ["4th Semester"],
        course: ["Mobile Computing for Android"],
    },
    {
        id: 'jakarta-platform-spec-11.0',
        title: 'Jakarta EE Platform',
        edition: 'Version: 11.0',
        author: 'Jakarta EE Platform Team, https://jakartaee.github.io/platform/',
        description: 'The Jakarta EE Platform defines a standard platform for hosting Jakarta EE applications.',
        image: JakartaEESpec11,
        downloadLink: '/books/jakarta-platform-spec-11.0.pdf',
        semester: ["3rd Semester", "4th Semester"],
        course: ["Web Applications Development II", "Web App Development III"],
    }
];