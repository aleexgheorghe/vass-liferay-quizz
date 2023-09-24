export const quizzData = {
    questions: [
        {
            id: 1,
            question: 'Liferay Developer Studio is primarily based on which of the following IDEs?',
            answers: ['IntelliJ IDEA', 'Eclipse', 'NetBeans', 'BlueJ'],
            correctAnswer: ['Eclipse'],
            explanation: 'Liferay Developer Studio DXP es una versión comercial y productizada de Eclipse que contiene todas las herramientas necesarias para el desarrollo de Liferay. Además, permite la instalación automática del paquete Liferay DXP.'
        },
        {
            id: 2,
            question: 'All the below statements are true about Liferay Developer Studio except:',
            answers: [
                'A commercial, productized version of Eclipse.',
                'Contains all the tools needed for Liferay development.',
                'Allow you to install the Liferay DXP bundle automatically.',
                'Only allow you to install the Liferay CE bundle automatically.'
            ],
            correctAnswer: ['Only allow you to install the Liferay CE bundle automatically.'],
            explanation: 'Liferay Developer Studio DXP es una versión comercial y productizada de Eclipse que contiene todas las herramientas necesarias para el desarrollo de Liferay. Además, permite la instalación automática del paquete Liferay DXP.'
        },
        {
            id: 3,
            question: 'OSGi is a specification and a set of standards for modular Java software development.',
            answers: ['False', 'True'],
            correctAnswer: ['True'],
            explanation: 'OSGi technology is composed of a set of specifications, a reference implementation for each specification, and a set of compliance tests for each specification that together define a dynamic module system for Java.'
        },
        {
            id: 4,
            question: 'Every bundle has a unique identifier that has two headers (Bundle-SymbolicName and Bundle-version).',
            answers: ['False', 'True'],
            correctAnswer: ['True'],
            explanation: 'Every bundle in OSGi has a unique identifier that is defined by two headers: Bundle-SymbolicName and Bundle-version.'
        },
        {
            id: 5,
            question: 'What is true about bundle version ranges?',
            answers: [
                'The import directive cab defines a version range.',
                'Square brackets ‘[’ and ‘]’ indicate exclusiveness.',
                '[1.1, 2.0) includes version 1.1 up to 2.0, but excludes 2.0.',
                'Square brackets ‘[’ and ‘]’ indicate inclusiveness'
            ],
            correctAnswer: [
                'The import directive cab defines a version range.',
                'Square brackets ‘[’ and ‘]’ indicate exclusiveness.',
                '[1.1, 2.0) includes version 1.1 up to 2.0, but excludes 2.0.',
                'Square brackets ‘[’ and ‘]’ indicate inclusiveness'
            ],
            explanation: 'Bundle version ranges are specified using import directives, square brackets indicate inclusiveness, and parentheses indicate exclusiveness.'
        },
        {
            id: 6,
            question: 'If the bundle is in an installed state, what does this mean?',
            answers: [
                'The bundle is missing some dependencies.',
                'The bundle is working fine.',
                'The bundle will be removed in the next reboot.',
                'We can start the bundle using the start command.'
            ],
            correctAnswer: ['The bundle is missing some dependencies.'],
            explanation: 'In the installed state, OSGi is looking for any dependencies that need to be resolved.'
        },
        {
            id: 7,
            question: 'What are the characteristics of a service registry?',
            answers: [
                'Provides a mechanism to publish services to the OSGi container.',
                'Provides a mechanism to look up and bind published services dynamically.',
                'Provides loose coupling by hiding the implementation details from the client.',
                'Allows multiple available services implementation to coexist.',
                'Consuming clients may have policies and filters for binding specific implementations.'
            ],
            correctAnswer: [
                'Provides a mechanism to publish services to the OSGi container.',
                'Provides a mechanism to look up and bind published services dynamically.',
                'Provides loose coupling by hiding the implementation details from the client.',
                'Allows multiple available services implementation to coexist.',
                'Consuming clients may have policies and filters for binding specific implementations.'
            ],
            explanation: 'The service registry in OSGi provides various characteristics, including the ability to publish, look up, and bind services dynamically.'
        },
        {
            id: 8,
            question: 'Declarative service is a framework that allows you to use @Component annotation and register services.',
            answers: ['True', 'False'],
            correctAnswer: ['True'],
            explanation: 'Declarative Services (DS) is a service that handles OSGi dependency injection and allows you to publish, find, and bind services based on XML metadata and annotations.'
        },
        {
            id: 9,
            question: 'Export-Package – Import-Package is a method of sharing packages between bundles.',
            answers: ['True', 'False'],
            correctAnswer: ['True'],
            explanation: 'Export-Package and Import-Package are methods of sharing Java packages between bundles in OSGi.'
        },
        {
            id: 10,
            question: 'All Liferay applications are OSGi applications that run in the OSGi container.',
            answers: ['True', 'False'],
            correctAnswer: ['True'],
            explanation: 'Liferay leverages the OSGi framework, and all Liferay applications are OSGi applications that run within the OSGi container.'
        },
        {
            id: 11,
            question: 'What is Liferay workspace?',
            answers: [
                'A generated, wrapper environment for Liferay projects.',
                'Provides tools and a folder structure for projects.',
                'Can be created only from Liferay IDE.',
                'Can be used separately from the IDE.',
                'Not mandatory for Liferay development.'
            ],
            correctAnswer: [
                'A generated, wrapper environment for Liferay projects.',
                'Provides tools and a folder structure for projects.',
                'Can be used separately from the IDE.',
                'Not mandatory for Liferay development.'
            ],
            explanation: 'A Liferay workspace is a wrapper environment for Liferay projects that provides tools, folder structure, and can be used separately from the IDE. It is not mandatory for Liferay development.'
        },
        {
            id: 12,
            question: 'Blade CLI creates a module that can work only inside a workspace.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
            explanation: 'Blade CLI allows you to create projects based on templates, and while it can work inside a Liferay workspace, it can also be used independently.'
        },
        {
            id: 13,
            question: 'Which command do you need to execute to close the connection to the Gogo Shell without shutting the OSGi container down?',
            answers: ['shutdown', 'exit', 'quit', 'disconnect'],
            correctAnswer: ['disconnect'],
        },
        {
            id: 14,
            question: 'Portlet is:',
            answers: [
                'A web component/application producing an HTML fragment of a page.',
                'An application that runs in the portlet runtime environment called portlet container.',
                'In Liferay, an application has a user interface.',
                'Governed by the JSR-168, JSR-286, or JSR-362 portlet specification.'
            ],
            correctAnswer: [
                'A web component/application producing an HTML fragment of a page.',
                'An application that runs in the portlet runtime environment called portlet container.',
                'In Liferay, an application has a user interface.',
                'Governed by the JSR-168, JSR-286, or JSR-362 portlet specification.'
            ],
            explanation: 'A portlet is a web component/application that produces an HTML fragment of a page. It runs in the portlet runtime environment and is governed by portlet specifications such as JSR-168, JSR-286, or JSR-362.'
        },
        {
            id: 15,
            question: 'What are the two descriptor files used in building a Java standard portlet?',
            answers: ['web.xml', 'portal.xml', 'portlet.xml', 'service.xml'],
            correctAnswer: ['web.xml', 'portlet.xml'],
        },
        {
            id: 16,
            question: 'The MVC Render phase is always followed by the Action phase.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
        },
        {
            id: 17,
            question: 'You can use the MVC Render command to get a list of assets to show in the user interface.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 18,
            question: 'The MVC Action Commands used for:',
            answers: ['Upload documents.', 'Used for Ajax request.', 'Add, edit or delete an item.', 'Continuous loading of content feeds.'],
            correctAnswer: ['Upload documents.', 'Add, edit or delete an item.'],
        },
        {
            id: 19,
            question: 'We can set portlet window state in JSP as well as portlet class.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
            explanation: 'Yes, you can define the window state of the portlet in both the JSP file and the portlet class.'
        },
        {
            id: 20,
            question: 'Public render parameter is a method of sharing parameters between different portlets and is available in all lifecycle phases that can be defined in portlet.xml.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 21,
            question: 'What are possible ways for portlets to share parameters with each other?',
            answers: ['Events', 'Portlet sessions', 'Public render parameters', 'Client-Side IPC', 'All of the above'],
            correctAnswer: ['All of the above'],
        },
        {
            id: 22,
            question: 'You can create a portlet without using XML configuration, and portlet configuration is done in the portlet’s component properties.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 23,
            question: 'All Liferay core services are built using Service Builder.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
            explanation: 'Service Builder is an object-relational mapping tool that generates model, persistence, and service layers for Liferay core services from a single XML file.'
        },
        {
            id: 24,
            question: 'The object that aggregates necessary information for features used throughout Liferay DXP’s portlets and services is called?',
            answers: ['Service Context', 'Portlet Context', 'Request Parameters', 'Permissions Aggregator', 'Service Builder'],
            correctAnswer: ['Service Context'],
        },
        {
            id: 25,
            question: 'Service Builder generates a portlet-model-hints.xml file that contains Hibernate SQL column mapping for entities and provides a way to customize field types, size, and validation.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
            explanation: 'The portlet-model-hints.xml file generated by Service Builder allows customization of field types, sizes, and validation for entities.'
        },
        {
            id: 26,
            question: 'Both local and remote services have the same performance.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
            explanation: 'Remote services may have lower performance than local services due to additional overhead, especially when implementing permission checks.'
        },
        {
            id: 27,
            question: 'Which of the following is a valid way to invoke a Liferay web service?',
            answers: [
                'From a non-browser client, using basic authentication.',
                'From a browser, log into Liferay and supplying a valid p_auth authentication token.',
                'Via JavaScript using Liferay.service(...).',
                'Using Liferay JSON web service API page (/api/jsonws).',
                'All of the above'
            ],
            correctAnswer: ['All of the above'],
            explanation: 'Various methods, including those listed, can be used to invoke a Liferay web service.'
        },
        {
            id: 28,
            question: 'Which of the following are module templates that Liferay DXP provides for building the presentation layer? (Choose all correct answers)',
            answers: [
                'mvc portlet',
                'freemarker-portlet',
                'npm-mvc-portlet',
                'spring-mvc-portlet',
                'lar-mvc-portlet'
            ],
            correctAnswer: ['mvc portlet', 'freemarker-portlet', 'spring-mvc-portlet'],
        },
        {
            id: 29,
            question: 'The Liferay JavaScript object contains helpful tools like:',
            answers: [
                'Liferay.Browser.',
                'Liferay.ThemeDisplay.',
                'Liferay.Service.',
                'Liferay.Setupwizared',
                'Liferay.Language.'
            ],
            correctAnswer: ['Liferay.Browser.', 'Liferay.ThemeDisplay.', 'Liferay.Service.', 'Liferay.Language.'],
        },
        {
            id: 30,
            question: 'The key to display term mapping is done in which of the following files?',
            answers: ['Language.properties', 'Language.format', 'Terms.properties', 'Terms.format'],
            correctAnswer: ['Language.properties'],
        },
        {
            id: 31,
            question: 'Which of the following is not a core concept of access control in Liferay DXP?',
            answers: ['Roles', 'Resources', 'Actions', 'Assets'],
            correctAnswer: ['Actions'],
        },
        {
            id: 32,
            question: 'Liferay is built on many-core technologies except:',
            answers: ['Hypersonic', 'OSGI', 'Spring', 'ElasticSearch', 'Java EE'],
            correctAnswer: ['Hypersonic'],
            explanation: 'Liferay is built on various core technologies including OSGI, Spring, ElasticSearch, and Java EE, but not Hypersonic.'
        },
        {
            id: 33,
            question: 'The Java API for XML Web Services (JAX-WS) and for building RESTful services (JAX-RS) is incorporated as the preferred tooling to create web services.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 34,
            question: 'What is the Portlet filter?',
            answers: [
                'Allows you to override entire JSPs.',
                'Allows you to inject content in the JSPs.',
                'Used for overriding the portal core JSPs.',
                'Is an API-based method of overriding the application JSPs.'
            ],
            correctAnswer: ['Is an API-based method of overriding the application JSPs.'],
            explanation: 'A Portlet filter is an API-based method of overriding the application JSPs.'
        },
        {
            id: 35,
            question: 'What is not supported in the custom field?',
            answers: ['Text Area', 'Dropdown list of integers value', 'Image', 'Dropdown list of double value'],
            correctAnswer: ['Image'],
            explanation: 'Liferay custom fields support various types, including Text Area, Dropdown, Checkbox, etc., but not Image.'
        },
        {
            id: 36,
            question: 'What are Liferay Assets and resources that let you add new fields to their edit forms?',
            answers: ['Blogs Entry', 'Calendar Events', 'Form', 'Document', 'Document Folder'],
            correctAnswer: ['Blogs Entry', 'Calendar Events', 'Document', 'Document Folder'],
        },
        {
            id: 37,
            question: 'Which of the following is not a central concept in integrating with Asset Framework?',
            answers: ['Assets', 'Asset Renderer Helpers', 'Asset Renderers', 'Asset Renderer Factories'],
            correctAnswer: ['Asset Renderer Helpers'],
        },
        {
            id: 38,
            question: 'Which of the following are the available reference policies?',
            answers: ['MANDATORY', 'DYNAMIC', 'MULTIPLE', 'STATIC'],
            correctAnswer: ['DYNAMIC', 'STATIC'],
        },
        {
            id: 39,
            question: 'MVC Resource Commands can be used for:',
            answers: ['Autocompletion', 'Fetch an item in the user interface with an AJAX call', 'Do a Captcha check', 'Update list without page refresh'],
            correctAnswer: ['Autocompletion', 'Fetch an item in the user interface with an AJAX call', 'Do a Captcha check', 'Update list without page refresh'],
        },
        {
            id: 40,
            question: 'Which of the following is not a configuration scope?',
            answers: ['System', 'Site', 'Portlet Instance', 'Portal'],
            correctAnswer: ['Portal'],
        },
        {
            id: 41,
            question: 'Service action Events are processed only before (not after) the request is processed.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
        },
        {
            id: 42,
            question: 'What is true about Model Listeners?',
            answers: [
                'Listen to persistence events on models and their associations.',
                'OSGi component that implements the ModelListener interface.',
                'Usually, extend ActiveModelListener class.',
                'Available for both core services and custom, service builder-generated services.'
            ],
            correctAnswer: ['Listen to persistence events on models and their associations.', 'Available for both core services and custom, service builder-generated services.'],
        },
        {
            id: 43,
            question: 'Model listeners are called before a database transaction is complete and that the order in which the listeners are invoked cannot be set.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 44,
            question: 'What is true about listeners registration?',
            answers: [
                'Listeners can register to the destination to receive messages in one of four methods.',
                'Publish the listener to the OSGi registry as a Declarative Services component that specifies a destination. The message Bus automatically wires the listener to the destination.',
                'Listeners can register to destination to receive messages in one of three methods',
                'Obtain a reference to Message Bus and use it directly to register the listener to a destination.',
                'Obtain a reference to a destination and use it directly to register the listener with that destination.'
            ],
            correctAnswer: [
                'Publish the listener to the OSGi registry as a Declarative Services component that specifies a destination. The message Bus automatically wires the listener to the destination.',
                'Listeners can register to destination to receive messages in one of three methods',
                'Obtain a reference to Message Bus and use it directly to register the listener to a destination.',
                'Obtain a reference to a destination and use it directly to register the listener with that destination.'
            ],
        },
        {
            id: 45,
            question: 'In Asynchronous, the sender sends the message to Message Bus, and the message blocks the processing for the rest of the sender’s request.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
        },
        {
            id: 46,
            question: 'It’s recommended to use Elastic search in large data sets only.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['FALSE'],
        },
        {
            id: 47,
            question: 'What is indexing?',
            answers: [
                'The process of transforming a portal asset to a search engine index document, which is the storage model type for search engines.',
                'Can be configured for each field individually in the mapping definition.',
                'A field-level process of transforming input data to search engine data.',
                'Run both the index time and search time.'
            ],
            correctAnswer: ['The process of transforming a portal asset to a search engine index document, which is the storage model type for search engines.'],
        },
        {
            id: 48,
            question: 'Searching is sending a search query and obtaining results, also called hits, from the search engine.',
            answers: ['TRUE', 'FALSE'],
            correctAnswer: ['TRUE'],
        },
        {
            id: 49,
            question: 'What can you do using Hits processors?',
            answers: [
                'Modify index documents before they’re sent to the search engine.',
                'Modify queries before they are executed.',
                'Modify result summaries when they’re returned to end-users.',
                'None of the above.'
            ],
            correctAnswer: ['None of the above.'],
        },
        {
            id: 50,
            question: 'The hits processors allow you to perform actions on the hits returned.',
            answers: ['True', 'False'],
            correctAnswer: ['True'],
        }


    ]
}
