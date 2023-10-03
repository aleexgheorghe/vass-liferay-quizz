export const quizzData = {
	questions: [
		{
			id: 1,
			question:
				"Reference Cardinality defines whether a reference has to be satisfied for the component to be able to activate.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference:
				"https://liferay.dev/blogs/-/blogs/liferay-osgi-annotations-what-they-are-and-when-to-use-them",
		},

		{
			id: 2,
			question:
				"Which of the following language file names follow proper naming syntax?",
			answers: [
				"Language.en.Us.properties",
				"Language_en.US.properties",
				"Language_en_US.properties",
				"Language_en_US_properties",
			],
			correctAnswer: ["Language_en_US.properties"],
			explanation: null,
			reference: null,
		},
		{
			id: 3,
			question:
				"Overriding is possible even with static and reluctant reference policy.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},
		{
			id: 4,
			question: "Which of the following are the three MVC Commands?",
			answers: [
				"MVC Action Commands.",
				"MVC Render Commands.",
				"MVC Destroy Commands.",
				"MVC Resource Commands.",
			],
			correctAnswer: [
				"MVC Action Commands.",
				"MVC Render Commands.",
				"MVC Resource Commands.",
			],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360029122571-Adding-Logic-to-MVC-Commands",
		},
		{
			id: 5,
			question: "What are the struts basic concepts?",
			answers: [
				"Action Servlet.",
				"Action Controller.",
				"Action From.",
				"View Layer.",
				"All of the above.",
			],
			correctAnswer: ["All of the above."],
			explanation: null,
			reference: null,
		},
		{
			id: 6,
			question:
				"Overriding Struts actions in the context of Liferay means overriding action controller classes.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},
		{
			id: 7,
			question: "How are model resources typically identified and referenced?",
			answers: [
				"By the portlet ID defined in javax.portlet.name",
				"By an abbreviation of the entity’s class name",
				"By the entity’s fully qualified class name",
				"By the portlet ID defined in portlet.xml",
			],
			correctAnswer: ["By the entity’s fully qualified class name"],
			explanation: null,
			reference: null,
		},
		{
			id: 8,
			question:
				"You cannot make event listener that run once for every portal instance that is initialized.",
			answers: ["True", "False"],
			correctAnswer: ["False"],
			explanation: null,
			reference: null,
		},
		{
			id: 9,
			question:
				"Which of the following key properties are used to make event listeners that run once for every portal instance that is initialized?",
			answers: [
				"global.startup.events.",
				"global.shutbown.events.",
				"application.startup.events.",
				"application.shutdown.events.",
			],
			correctAnswer: ["application.startup.events."],
			explanation: null,
			reference: null,
		},
		{
			id: 10,
			question:
				"When rendering the assets, the Asset Publisher portlet first finds an Asset Renderer for the model type and then asks for an Asset Renderer Factory service.",
			answers: ["True", "False"],
			correctAnswer: ["False"],
			explanation: null,
			reference: null,
		},
		{
			id: 11,
			question: "Why does Liferay use Elasticsearch?",
			answers: [
				"RDBMS data structures are not optimal for searching and joins are expensive and cause killers.",
				"Elastic search use queries that make an inverted index that is optimized for speed.",
				"Elasticsearch doesn’t need the external server and running on the same portal server.",
				"It’s recommended to use Elastic search in large data set only.",
			],
			correctAnswer: [
				"RDBMS data structures are not optimal for searching and joins are expensive and cause killers.",
				"Elastic search use queries that make an inverted index that is optimized for speed.",
			],
			explanation: null,
			reference: null,
		},

		{
			id: 12,
			question:
				"Which of the following statements is not True of JAX-WS and JAX-RS?",
			answers: [
				"JAX web services can be deployed and accessed from JAX endpoints.",
				"Liferay supports JAX-WS and JAX-RS via the Apache CXF implementation.",
				"Apps can publish JAX web services to the CXF endpoints",
				"CFX endpoints are context paths for JAX web services.",
			],
			correctAnswer: [
				"JAX web services can be deployed and accessed from JAX endpoints.",
			],
			explanation: null,
			reference: null,
		},

		{
			id: 13,
			question:
				"There are two operation modes available for Elasticsearch: embedded and remote.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 14,
			question: "What are the analysis phases?",
			answers: [
				"Character filtering.",
				"Tokenizing.",
				"Indexing.",
				"Token filtering.",
			],
			correctAnswer: [
				"Character filtering.",
				"Tokenizing.",
				"Token filtering.",
			],
			explanation: null,
			reference: null,
		},

		{
			id: 15,
			question:
				"The doSearch methods in Liferay’s ElasticsearchIndexSearcher returns:",
			answers: [
				"LuceneSearchRequest.",
				"SearchContext.",
				"LuceneSearchResponse.",
				"SearchResponse.",
			],
			correctAnswer: ["SearchResponse."],
			explanation: null,
			reference: null,
		},

		{
			id: 16,
			question:
				"Hit processors can process the results search from the search engine before sending it to the front-end.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 17,
			question:
				"Which of the following statements is not True about Liferay Developer Studio?",
			answers: [
				"It comes bundled with the Blade command-line tools.",
				"It enables developers to use drag and drop deployment for runtimes.",
				"It is included as part of a Liferay DXP subscription",
				"It is a necessary tool for development with Liferay.",
			],
			correctAnswer: ["It is a necessary tool for development with Liferay."],
			explanation: null,
			reference: null,
		},

		{
			id: 18,
			question: "Liferay server bundles are shipped with:",
			answers: [
				"Commercial database JDBC drivers.",
				"Oracle Java 11.",
				"Hypersonic database.",
				"Liferay developer studio.",
			],
			correctAnswer: ["Hypersonic database."],
			explanation:
				"Commercial database JDBC drivers are not shipped with Liferay server bundles.",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360018421111-Setting-Up-and-Configuring-MySQL-Database-With-Liferay-Portal",
		},

		{
			id: 19,
			question: "Multi versions of bundles can co-exist within OSGi container.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 20,
			question:
				"A component is any java class inside a bundle that doesn’t have a life cycle.",
			answers: ["True", "False"],
			correctAnswer: ["False"],
			explanation:
				"Component is: - Any java class inside a bundle declared as a component - An object managed by the component framework of OSGi - Like a bundle, a component has a lifecycle: it can started and stopped.",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360035467532-OSGi-and-Modularity",
		},
		{
			id: 21,
			question:
				"Startup events are called once when either the portal (global prefix) or portal instance (application prefix) starts or shuts down.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"The Liferay 'Startup Events' is a group of keys that could be added in the portal-ext.properties file : global.startup.events --> Run once when the portal initializes global.shutdown.events --> Run one when the portal shuts down application.statup.events --> Run once for every portal instance that is initialized application.shutdown.events --> Run once for every portal instance is shut down This means that you can use this group of Liferay events for either start-up or shut down all portal instances and also you can use run the event for start-up or shut down of each portal instance separately.",
			reference: null,
		},

		{
			id: 22,
			question:
				"Which of the following statements about OSGi are True? (Choose all that apply)",
			answers: [
				"An OSGi component is any Java class inside a bundle that is declared to be a component.",
				"An OSGi component doesn’t have a lifecycle.",
				"A service is an OSGi component registered to the OSGi container's service registry.",
				"Declarative Services (DS) is a service that handles OSGi dependency injection and allows you to publish, find and bind services based on XML metadata and annotations.",
				"An OSGi component cannot be stopped.",
			],
			explanation: "References: OSGI & Modularity Module Lifecycle",
			reference: null,
		},

		{
			id: 23,
			question:
				"Declarative service allows you to declare and consume services via XML metadata and annotation.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 24,
			question:
				"Bndtools is a configuration tool that allows you to: (Choose all that apply)",
			answers: [
				"Reads information from annotation and the bnd file.",
				"Creates service declaration XML files and OSGi bundle manifest headers automatically.",
				"Creates OSGi feature-sharing headers automatically.",
				"Build and deploy bundle into OSGi container.",
			],
			correctAnswer: [
				"Reads information from annotation and the bnd file.",
				"Creates service declaration XML files and OSGi bundle manifest headers automatically.",
				"Creates OSGi feature-sharing headers automatically.",
			],
			explanation:
				"Bndtools is going to do two big things for us, it’s going to help us create the bundles, and it’s also going to take care of some of the heavy lifting when we are dealing with our manifest file, Bndtools also does a slew of other things, but those are the two things.",
			reference: null,
		},

		{
			id: 25,
			question:
				"Below are possible headers to share features between bundles except:",
			answers: [
				"Export Package – Import Package.",
				"Provide Capability – Required Capability.",
				"Required Bundle.",
				"Static Import.",
			],
			correctAnswer: ["Static Import."],
			explanation:
				"When we think about features, we typically think about something like functionality or some sort of thing that is being done, when we are talking about sharing features, we’re talking about sharing things like classes, packages, OSGi services, and components. If we want to share packages, we have an Export-Package header and an Import-Package header. this would be defined within the MANIFEST file. We can also kind of filter things down a little bit, using a Provide Capability and Required Capability. And we can go as far as to say that we need a specific bundle, or we require a specific bundle. So these are a couple of different ways, a couple of different headers that we can use, that we can declare within the MANIFEST file to get the packages, or the classes, the bundle, or the component we need.",
			reference:
				"https://learn.liferay.com/dxp/7.x/en/liferay-internals/fundamentals/exporting-packages.html?_ga=2.95338524.1806225294.1611355133-1200813778.1604312786",
		},

		{
			id: 26,
			question: "Liferay workspace can be used outside the developer studio.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"A Liferay workspace is a kind of wrapper environment for the Liferay projects, it provide an environment for us to create our projects as well as hold them, it’s give us all the tools that we need in order to make the projects, it can be used outside an IDE so you don’t need to use developer studio to fully utilize a Liferay workspace, we can use it in its own with your favorite IDE, within text editor and so on, it’s not mandatory to develop Liferay applications, it’s allows you to use Gradle and Maven.",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360029147471-Liferay-Workspace",
		},

		{
			id: 27,
			question:
				"Which Blade CLI command executes the Gradle command using the Gradle Wrapper?",
			answers: ["create.", "execute.", "gw.", "install."],
			correctAnswer: ["gw."],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360018164591-Blade-CLI",
		},

		{
			id: 28,
			question:
				"BLADE CLI can be used to create projects that are compatible with any IDE or development environment",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 29,
			question: "Gogo shell cannot be used outside Liferay developer studio.",
			answers: ["True", "False"],
			correctAnswer: ["False"],
			explanation:
				"you can use the gogo shell straight from Liferay developer studio, you just right-click the server and select gogo shell, if you are using a terminal or a telnet client, you are first going to need to set a configuration within your portal-ext.properties, specifying what is the connection port that you will be using, in order to connect to gogo shell. Otherwise by default you will not be able to telnet into it.",
			reference: null,
		},

		{
			id: 30,
			question:
				"The MVC Serve Resource command is always followed by the MVC Render command.",
			answers: ["True", "False"],
			correctAnswer: ["False"],
			explanation:
				"Actually, the MVC Action command is the one that is always followed by the MVC Render command, but MVC serve Resource command is independent from the rest of the other commands lifecycle, it doesn’t trigger the Render phase or any other phase, it’s user just for calling Ajax requests.",
			reference: null,
		},

		{
			id: 31,
			question:
				"Which of the following statements are true about the MVC Render phase?",
			answers: [
				"Generate HTML fragment.",
				"Every portlet on the page has to go through this initially.",
				"Wrapper objects: RenderRequest – RenderResponse.",
				"Corresponding standard method: render().",
			],
			correctAnswer: [
				"Generate HTML fragment.",
				"Every portlet on the page has to go through this initially.",
				"Wrapper objects: RenderRequest – RenderResponse.",
				"Corresponding standard method: render().",
			],
			explanation:
				"When a portlet is placed on a page and the portlet needs to display itself, the render phase is going to be called. During the render phase, technically what’s going on is the HTML fragment that’s going to be used to display the portlet on the page that is being generated. If we see a portlet in the page, this is a strong indication that the portlet has gone through the render phase, at one point in time. The render phase is going to have a RenderRequest and a RenderResponse object, we can have parameters and objects within that RenderRequest and RenderResponse objects, that can be passed between the JSP and on Java side so that we can do some nifty things with that. Just like the init phase has an init method, the render phase has the render method that goes along with it.",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360030827512-MVC-Render-Command",
		},

		{
			id: 32,
			question:
				"MVCPortlet copy all ActionRequest parameters to the Render phase and this behavior can be disabled in portlet configuration.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 33,
			question:
				"Which of the following is not a valid MVC command class? (choose two)",
			answers: [
				"MVC Render",
				"MVC Resource",
				"MVC Rewrite",
				"MVC Action",
				"MVC AJAX",
			],
			correctAnswer: ["MVC Rewrite", "MVC AJAX"],
			explanation: null,
			reference: null,
		},

		{
			id: 34,
			question:
				"JSR-268 established two methods of inter-portlet communication: Events and public render parameters.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"Portlet widgets can communicate with each other using public render parameters and events. Public render parameters are easy to use and can be quite powerful. Some Liferay portlets provide a configuration UI to help you get the most out of this communication mechanism. To access this UI, open your portlet’s configuration window by clicking on the Options icon () and selecting Configuration. Then click on the Communication tab.",
			reference: null,
		},

		{
			id: 35,
			question:
				"Service builder can be used without persistence to create web services.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 36,
			question:
				"Service Builder can generate two service variants, local and remote service.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"The services generated by Service Builder come in two flavors: local and remote. Local services, as their name implies, can only be invoked locally. This means that they are invoked from the JVM in which Liferay is running. Remote services can be invoked remotely. They are designed to be used by any web client that can access the services and is permitted to do so. The remote services generated by Service Builder are published as JSON web services when your application is deployed. You can also use Service Builder to generate a WSDL (Web Services Description Language) document for your remote services to make them available via SOAP (Simple Object Access Protocol). Please refer to the Service Builder tutorial for more information. To specify whether Service Builder should generate local services, remote services, or both, you need to add the appropriate entries to your application’s service.xml file. Open your guestbook-portlet project’s docroot/WEB-INF/service.xml file and examine the tags for the guestbook and entry entities: As described in the service.xml DTD, local-service defaults to false while remote-service defaults to true. However, it’s best to specify explicitly whether Service Builder should generate local services and remote services. Other developers who read your service.xml file might not know or remember the defaults. For this reason, add remote-service='true' to the entity tags of the guestbook and entry entities: <entity name='Guestbook' local-service='true' remote-service='true' uuid='true'>",
			reference: null,
		},

		{
			id: 37,
			question:
				"There are two types of finder regular finder and filtered finders.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"Finders are database querying methods defined in the service.xml file which is automatically cached,they can be customized in the entity-specific finder implementation classes. There are two types of finders in Liferay: - Regular Finders (without permission checks) - Filtered finders (with permission checks) Filtered finders are generated only if permissioning is enabled.",
			reference: null,
		},

		{
			id: 38,
			question:
				"The portlet contains both the controller and the view layers of the MVC Pattern.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 39,
			question: "In order to make MVCActionCommand you should:",
			answers: [
				"implement MVCActionCommand interface.",
				"extends MVCActionCommand class.",
				"implement BaseMVCActionCommnand interface.",
				"extends BaseMVCActionCommand class.",
			],
			correctAnswer: [
				"implement MVCActionCommand interface.",
				"extends BaseMVCActionCommand class.",
			],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360031167051-MVC-Action-Command",
		},

		{
			id: 40,
			question: "Below are the tag libraries offered by Liferay except:",
			answers: [
				"Liferay-theme.",
				"liferay-portlet.",
				"liferay-ui.",
				"liferay-aui.",
				"liferay-util.",
				"aui.",
			],
			correctAnswer: ["liferay-aui."],
			explanation: null,
			reference: null,
		},

		{
			id: 41,
			question: "Liferay’s server-side validation utility is implemented in:",
			answers: [
				"com.liferay.portal.kernal.util.Validation",
				"com.liferay.portal.kernal.util.ServerValidation",
				"com.liferay.portal.kernal.util.PortalValidation",
				"com.liferay.portal.kernal.util.Validator",
			],

			correctAnswer: ["com.liferay.portal.kernal.util.Validator"],
			explanation: null,
			reference: null,
		},

		{
			id: 42,
			question: "A scope where permissions can be applied:",
			answers: ["Company.", "Group.", "Group Template.", "Individual."],
			correctAnswer: ["Company.", "Group.", "Group Template.", "Individual."],
			explanation:
				"Permission in Liferay is defined as an action upon a resource, so when we update a blog post, that is permission. We can define permission as a combination of a resource and an action (ex: com.liferay.blogs.BlogsEntry + update), and permission has a scope that can be applied on a company-wide level, site level (group), group template, or Individual.",
			reference: null,
		},

		{
			id: 43,
			question:
				"A Framework to handle objects and features like comments and rates.",
			answers: ["Spring", "Workflow", "Asset", "Web Content"],
			correctAnswer: ["Asset"],
			explanation:
				"https://help.liferay.com/hc/en-us/articles/360028725412-Introduction-to-Asset-Framework https://help.liferay.com/hc/en-us/articles/360028746292-Frameworks",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360028725412-Introduction-to-Asset-Framework",
		},

		{
			id: 44,
			question:
				"Which method renders you JSP in a class extending BaseJSPAssetRenderer?",
			answers: ["render.", "includeJSP.", "include.", "getJspPath."],
			correctAnswer: ["getJspPath."],
			explanation: null,
			reference:
				"https://docs.liferay.com/portal/7.2-latest/javadocs/portal-kernel/com/liferay/asset/kernel/model/BaseJSPAssetRenderer.html",
		},

		{
			id: 45,
			question:
				"Liferay’s tooling supports the 6th edition of ECMAScript specification and provides the ability to use it in all modern browsers with the integration of the Babel JS transpiler.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation:
				"https://help.liferay.com/hc/en-us/articles/360017880712-Preparing-Your-JavaScript-Files-for-ES2015 https://help.liferay.com/hc/en-us/articles/360017880692-Using-ES2015-in-Your-Portlets",
			reference:
				"https://help.liferay.com/hc/en-us/articles/360017880712-Preparing-Your-JavaScript-Files-for-ES2015",
		},

		{
			id: 46,
			question:
				"Liferay relies on industry-proven standards. The supported standards include:",
			answers: [
				"Liferay can run any portlets that follow JSR-168, JSR-286 and JSR-362 portlet specifications.",
				"Liferay is an active contributor to the standard and the lead of the JSF-Portlet Bridge specification.",
				"Elasticsearch Liferay’s tooling supports the 6th edition of ECMAScript specification and provides the ability to use it in all modern browsers with the integration of the Babel JS transpiler",
				"The Java API for XML Web Services (JAX-WS) and for building RESTful services (JAX-RS) is incorporated as the preferred tooling to create web services",
				"Liferay supports the OSGi family standards through its own implementations and also integrates implementation of Apache Felix and Eclipse Equinox projects.",
			],
			correctAnswer: [
				"Liferay can run any portlets that follow JSR-168, JSR-286 and JSR-362 portlet specifications.",
				"Liferay is an active contributor to the standard and the lead of the JSF-Portlet Bridge specification.",
				"The Java API for XML Web Services (JAX-WS) and for building RESTful services (JAX-RS) is incorporated as the preferred tooling to create web services",
				"Liferay supports the OSGi family standards through its own implementations and also integrates implementation of Apache Felix and Eclipse Equinox projects.",
			],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360035124151-Introduction-to-Architecture",
		},

		{
			id: 47,
			question: "Which types of Geolocation filter does Liferay DXP support?",
			answers: [
				"GeoDistanceFilter.",
				"GeoDistanceRangeFilter.",
				"GeoBoundingBoxFilter.",
				"GeoPolygonFilter.",
			],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360028711092-Introduction-to-Installing-a-Search-Engine",
		},

		{
			id: 48,
			question:
				"Expando API allows you to create virtual tables not related to any model class.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference: null,
		},

		{
			id: 49,
			question:
				"What Liferay Assets and resources let you add new fields to their edit forms:",
			answers: [
				"Knowledge Base Article.",
				"Knowledge Base Folder.",
				"Message Boards Category.",
				"Message Boards Message.",
				"All of the above.",
			],
			correctAnswer: ["All of the above."],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360028818872-Custom-Fields#adding-custom-fields",
		},

		{
			id: 50,
			question:
				"Service wrapper provides a safe way to customize Liferay’s core services.",
			answers: ["True", "False"],
			correctAnswer: ["True"],
			explanation: null,
			reference:
				"https://help.liferay.com/hc/en-us/articles/360029144671-Overriding-Liferay-Services-Service-Wrappers-",
		},
	],
};
