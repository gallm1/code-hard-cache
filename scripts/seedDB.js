const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codehardcache");

const termsSeed = [
    { 
        term: 'CS',
        represents: 'Computer Science',
        meaning: 'The study and discipline of how computers and software work',
        date: new Date(Date.now()),
        tips: 'https://csweb.rice.edu/',
        user: 'gallm1'
    },
    { 
        term: 'MIS',
        represents: 'Management Information Systems',
        meaning: 'The study of IT and how it relates to business',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Management_information_system',
        user: 'gallm1'
    },
    { 
        term: 'MIT',
        represents: 'Massachusetts Institute of Technology',
        meaning: 'A well-known technology university in the United States',
        date: new Date(Date.now()),
        tips: 'https://www.mit.edu/',
        user: 'gallm1'
    },
    { 
        term: 'MSDN',
        represents: 'Microsoft Developer Network',
        meaning: 'A website by Microsoft that provides resources for developers',
        date: new Date(Date.now()),
        tips: 'https://docs.microsoft.com/en-us/',
        user: 'gallm1'
    },
    { 
        term: 'SSO',
        represents: 'Single Sign On',
        meaning: 'The ability to sign on to a website in one location and access all of its services',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Single_sign-on',
        user: 'gallm1'
    },
    { 
        term: '1NF',
        represents: 'First Normal Form',
        meaning: 'The first stage of creating a normalised database',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/First_normal_form#:~:text=First%20normal%20form%20(1NF)%20is,single%20value%20from%20that%20domain.',
        user: 'gallm1'
    },
    { 
        term: '2NF',
        represents: 'Second Normal Form',
        meaning: 'The second stage of creating a normalised database',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Second_normal_form',
        user: 'gallm1'
    },
    { 
        term: '3NF',
        represents: 'Third Normal Form',
        meaning: 'The final stage of creating a normalised database',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Third_normal_form#:~:text=Third%20normal%20form%20(3NF)%20is,in%201971%20by%20Edgar%20F.',
        user: 'gallm1'
    },
    { 
        term: 'AJAX',
        represents: 'Asynchronous JavaScript and XML',
        meaning: 'A group of web development techniques to let you create asynchronous applications',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Ajax_(programming)',
        user: 'gallm1'
    },
    { 
        term: 'API',
        represents: 'Application Programming Interface',
        meaning: 'An external interface from an application that other applications can access',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/API',
        user: 'gallm1'
    },
    { 
        term: 'ASP',
        represents: 'Active Server Pages',
        meaning: 'A server-side scripting language by Microsoft',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Active_Server_Pages',
        user: 'gallm1'
    },
    { 
        term: 'COBOL',
        represents: 'Common Business-Oriented Langauge',
        meaning: 'An old programming language',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/COBOL#:~:text=COBOL%20(%2F%CB%88ko%CA%8Ab,2002%2C%20object%2Doriented%20language.',
        user: 'gallm1'
    },
    { 
        term: 'COM',
        represents: 'Component Object Model',
        meaning: 'Interface for software components',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Component_Object_Model#:~:text=Component%20Object%20Model%20(COM)%20is,large%20range%20of%20programming%20languages.',
        user: 'gallm1'
    },
    { 
        term: 'CSS',
        represents: 'Cascading Style Sheets',
        meaning: 'A language used to organise and design how a web site looks',
        date: new Date(Date.now()),
        tips: 'https://www.w3schools.com/css/',
        user: 'gallm1'
    },
    { 
        term: 'DAO',
        represents: 'Data Access Object',
        meaning: 'An object that provides access to a database',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Data_access_object#:~:text=In%20computer%20software%2C%20a%20data,exposing%20details%20of%20the%20database.',
        user: 'gallm1'
    },
    { 
        term: 'DDL',
        represents: 'Data Definition Language',
        meaning: 'A set of SQL terms used to create and alter objects',
        date: new Date(Date.now()),
        tips: 'https://techterms.com/definition/ddl#:~:text=Stands%20for%20%22Data%20Definition%20Language,SQL%2C%20the%20Structured%20Query%20Language.',
        user: 'gallm1'
    },
    { 
        term: 'DML',
        represents: 'Data Manipulation Language',
        meaning: 'A set of SQL terms used to view data related to objects',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Data_manipulation_language#:~:text=A%20data%20manipulation%20language%20(DML,the%20operators%20in%20the%20language.',
        user: 'gallm1'
    },
    { 
        term: 'DOM',
        represents: 'Document Object Model',
        meaning: 'A cross-platform and language-independent convention for interacting with documents',
        date: new Date(Date.now()),
        tips: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
        user: 'gallm1'
    },
    { 
        term: 'EOF',
        represents: 'End of File',
        meaning: 'Indicates the end of a file',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/End-of-file#:~:text=In%20computing%2C%20end%2Dof%2D,called%20a%20file%20or%20stream.',
        user: 'gallm1'
    },
    { 
        term: 'EOL',
        represents: 'End of Line',
        meaning: 'Indicates the end of a line in a file',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/EOL',
        user: 'gallm1'
    },
    { 
        term: 'ERD',
        represents: 'Entity Relationship Diagram',
        meaning: 'A diagram created to explain how database tables or entities are related. To create one, use one of these tools.',
        date: new Date(Date.now()),
        tips: 'https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/#:~:text=Entity%20Relationship%20Diagram%2C%20also%20known,inter%2Drelationships%20among%20these%20entities.',
        user: 'gallm1'
    },
    { 
        term: 'ERM',
        represents: 'Entity Relationship Model',
        meaning: 'A diagram created to explain how entities in a program are related',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model',
        user: 'gallm1'
    },
    { 
        term: 'ETL',
        represents: 'Extract, Transform, Load',
        meaning: 'The process of getting data from one database and loading it into a data warehouse',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Extract,_transform,_load#:~:text=In%20computing%2C%20extract%2C%20transform%2C,than%20the%20source(s).',
        user: 'gallm1'
    },
    { 
        term: 'FCL',
        represents: 'Framework Class Library',
        meaning: 'Standard library for Microsoft’s .NET framework that includes a collection of classes',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Framework_Class_Library',
        user: 'gallm1'
    },
    { 
        term: 'FIFO',
        represents: 'First In First Out',
        meaning: 'A queuing method that says the first item in is the first item out',
        date: new Date(Date.now()),
        tips: 'https://www.geeksforgeeks.org/fifo-vs-lifo-approach-in-programming/#:~:text=FIFO%20is%20an%20abbreviation%20for,newest%20element%20is%20processed%20last.',
        user: 'gallm1'
    },
    { 
        term: 'FSO',
        represents: 'File System Object',
        meaning: 'An object that provides access to a file system',
        date: new Date(Date.now()),
        tips: 'https://www.w3schools.com/asp/asp_ref_filesystem.asp',
        user: 'gallm1'
    },
    { 
        term: 'GUID',
        represents: 'Global Unique Identifier',
        meaning: 'A value in a database record used to uniquely identify that record in the database',
        date: new Date(Date.now()),
        tips: 'http://guid.one/guid',
        user: 'gallm1'
    },
    { 
        term: 'IDE',
        represents: 'Integrated Development Environment',
        meaning: 'Software that allows developers to write code',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Integrated_development_environment#:~:text=An%20integrated%20development%20environment%20(IDE,automation%20tools%20and%20a%20debugger.',
        user: 'gallm1'
    },
    { 
        term: 'J2EE',
        represents: 'Java 2 Enterprise Edition',
        meaning: 'A version of Java that is made for enterprise applications',
        date: new Date(Date.now()),
        tips: 'https://objectcomputing.com/resources/publications/sett/january-2000java-2-enterprise-edition-j2ee',
        user: 'gallm1'
    },
    { 
        term: 'J2ME',
        represents: 'Java 2 Micro Edition',
        meaning: 'A version of Java that is made for mobile applications',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Java_Platform,_Micro_Edition',
        user: 'gallm1'
    },
    { 
        term: 'J2SE',
        represents: 'Java 2 Standard Edition',
        meaning: 'The standard version of Java',
        date: new Date(Date.now()),
        tips: 'https://www.oracle.com/java/technologies/j2se-142.html',
        user: 'gallm1'
    },
    { 
        term: 'JDBC',
        represents: 'Java Database Connectivity',
        meaning: 'A method of connecting from an application to a database',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Java_Database_Connectivity#:~:text=Java%20Database%20Connectivity%20(JDBC)%20is,Edition%20platform%2C%20from%20Oracle%20Corporation.',
        user: 'gallm1'
    },
    { 
        term: 'JS',
        represents: 'JavaScript',
        meaning: 'A client-side scripting language used to develop Web applications',
        date: new Date(Date.now()),
        tips: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        user: 'gallm1'
    },
    { 
        term: 'JSON',
        represents: 'JavaScript Object Notation',
        meaning: 'A lightweight data interchange format',
        date: new Date(Date.now()),
        tips: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
        user: 'gallm1'
    },
    { 
        term: 'LOC',
        represents: 'Lines of Code',
        meaning: 'The number of lines of code in a program. A way to measure the size of a program',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Source_lines_of_code',
        user: 'gallm1'
    },
    { 
        term: 'MAPI',
        represents: 'Messaging Application Programming Interface',
        meaning: 'A messaging architecture and API for Windows',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/MAPI',
        user: 'gallm1'
    },
    { 
        term: 'MDA',
        represents: 'Model-Driven Architecture',
        meaning: 'An approach to designing software that structures it around models',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Model-driven_architecture#:~:text=Model%2Ddriven%20architecture%20(MDA),which%20are%20expressed%20as%20models.',
        user: 'gallm1'
    },
    { 
        term: 'MFC',
        represents: 'Microsoft Foundation Classes',
        meaning: 'A library of classes that maps the Windows API into C++ classes',
        date: new Date(Date.now()),
        tips: 'https://docs.microsoft.com/en-us/cpp/mfc/mfc-application-architecture-classes?view=msvc-160',
        user: 'gallm1'
    },
    { 
        term: 'MVC',
        represents: 'Model View Controller',
        meaning: 'A software design that includes three levels of modules',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
        user: 'gallm1'
    },
    { 
        term: 'OLAP',
        represents: 'Online Analytical Processing',
        meaning: 'A database used by business intelligence or data warehouses',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Online_analytical_processing',
        user: 'gallm1'
    },
    { 
        term: 'OLE',
        represents: 'Object Linking and Embedding',
        meaning: 'A technology that allowsembedding and linking to documents and other objects',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Object_Linking_and_Embedding',
        user: 'gallm1'
    },
    { 
        term: 'OOP',
        represents: 'Object Oriented Programming',
        meaning: 'Writing code and designing programs as a collection of smaller objects that interact with each other',
        date: new Date(Date.now()),
        tips: 'https://www.educative.io/blog/object-oriented-programming',
        user: 'gallm1'
    },
    { 
        term: 'ORM',
        represents: 'Object Relational Mapping',
        meaning: 'A technique for converting data between systems in object oriented programming languages',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping#:~:text=Object%E2%80%93relational%20mapping%20(ORM%2C,from%20within%20the%20programming%20language.',
        user: 'gallm1'
    },
    { 
        term: 'PHP',
        represents: 'Personal Home Page/PHP Hypertext Preprocessor',
        meaning: 'A popular language used to develop web sites',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/PHP',
        user: 'gallm1'
    },
    { 
        term: 'REGEX',
        represents: 'Regular Expression',
        meaning: 'A set of rules that are used to process strings',
        date: new Date(Date.now()),
        tips: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
        user: 'gallm1'
    },
    { 
        term: 'REST',
        represents: 'Representational State Transfer',
        meaning: 'An architectural style that allows loading data from web pages',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Representational_state_transfer#:~:text=Representational%20state%20transfer%20(REST)%20is,these%20guidelines%20is%20called%20RESTful.',
        user: 'gallm1'
    },
    { 
        term: 'SOLID',
        represents: 'Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion',
        meaning: 'A principle of Object Oriented Programming. Something to learn if you want to improve your programming skills.',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/SOLID',
        user: 'gallm1'
    },
    { 
        term: 'SQL',
        represents: 'Structured Query Language',
        meaning: 'A language used to access databases, such as Oracle and Microsoft SQL Server',
        date: new Date(Date.now()),
        tips: 'https://www.dataversity.net/structured-query-language-sql/#:~:text=Structured%20Query%20Language%20or%20SQL,or%20attributes%2C%20categorized%20into%20columns%2C',
        user: 'gallm1'
    },
    { 
        term: 'SQLXML',
        represents: 'SQL Server XML',
        meaning: 'A version of XML used by SQL Server',
        date: new Date(Date.now()),
        tips: 'https://docs.microsoft.com/en-us/sql/relational-databases/xml/xml-data-sql-server?view=sql-server-ver15',
        user: 'gallm1'
    },
    { 
        term: 'VB',
        represents: 'Visual Basic',
        meaning: 'A Microsoft language used to write applications',
        date: new Date(Date.now()),
        tips: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/',
        user: 'gallm1'
    },
    { 
        term: 'VBA',
        represents: 'Visual Basic for Applications',
        meaning: 'A version of Visual Basic included in Microsoft Office programs',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/Visual_Basic_for_Applications',
        user: 'gallm1'
    },
    { 
        term: 'VS',
        represents: 'Visual Studio',
        meaning: 'An IDE or program developed by Microsoft that is used to write software',
        date: new Date(Date.now()),
        tips: 'https://code.visualstudio.com/',
        user: 'gallm1'
    },
    { 
        term: 'SOAP',
        represents: 'Simple Object Access Protocol',
        meaning: 'A messaging protocol that allows programs to communicate using HTTP',
        date: new Date(Date.now()),
        tips: 'https://docs.oracle.com/cd/A97335_02/integrate.102/a90297/overview.htm',
        user: 'gallm1'
    },
    { 
        term: 'XHTML',
        represents: 'Extensible Hypertext Markup Language',
        meaning: 'An extension of HTML',
        date: new Date(Date.now()),
        tips: 'https://www.w3schools.com/html/html_xhtml.asp',
        user: 'gallm1'
    },
    { 
        term: 'XML',
        represents: 'Extensible Markup Language',
        meaning: 'A language used to store data for transfer between systems',
        date: new Date(Date.now()),
        tips: 'https://www.w3.org/XML/',
        user: 'gallm1'
    },
    { 
        term: 'YAGNI',
        represents: 'You Ain’t Gonna Need It',
        meaning: 'A software development principle that says you should only develop for features that you know',
        date: new Date(Date.now()),
        tips: 'https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it',
        user: 'gallm1'
    },
        
];

db.Terms
  .remove({})
  .then(() => db.Terms.collection.insertMany(termsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
    