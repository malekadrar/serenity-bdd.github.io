"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[3804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,y=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3117:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"integrating_with_jira",title:"Integrating with JIRA",sidebar_position:5},s="Integrating with JIRA",o={unversionedId:"reporting/integrating_with_jira",id:"reporting/integrating_with_jira",isDocsHomePage:!1,title:"Integrating with JIRA",description:"With Selenium BDD it is possible to create tight one and two-way integration with JIRA",source:"@site/docs/reporting/jira.md",sourceDirName:"reporting",slug:"/reporting/integrating_with_jira",permalink:"/docs/reporting/integrating_with_jira",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/reporting/jira.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"integrating_with_jira",title:"Integrating with JIRA",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Additional Reports",permalink:"/docs/reporting/additional_reports"},next:{title:"Custom Fields in Reports",permalink:"/docs/reporting/reports_custom_info"}},l=[{value:"One way integration with JIRA",id:"one-way-integration-with-jira",children:[]},{value:"Two way integration with JIRA",id:"two-way-integration-with-jira",children:[]}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrating-with-jira"},"Integrating with JIRA"),(0,i.kt)("p",null,"With Selenium BDD it is possible to create tight one and two-way integration with JIRA"),(0,i.kt)("h3",{id:"one-way-integration-with-jira"},"One way integration with JIRA"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/jira"},"JIRA")," is popular issue-tracking system that is also often used for Agile projects and requirements management. Many teams using JIRA store their requirements electronically in the form of story cards and epics in JIRA"),(0,i.kt)("p",null,"Suppose we are implementing a Frequent Flyer application for an airline. The idea is that travelers will earn points when they fly with our airline, based on the distance they fly. Travelers start out with a \u201cBronze\u201d status, and can earn a better status by flying more frequently. Travelers with a higher frequent flyer status benefit from advantages such as lounge access, prioritized boarding, and so on. One of the story cards for this feature might look like the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3747).Z})),(0,i.kt)("p",null,"This story contains a description following one of the frequently-used formats for user story descriptions (\u201cas a..I want..so that\u201d). It also contains a custom \u201cAcceptance Criteria\u201d field, where we can write down a brief outline of the \u201cdefinition of done\u201d for this story."),(0,i.kt)("p",null,"These stories can be grouped into epics, and placed into sprints for project planning, as illustrated in the JIRA Agile board shown here:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3335).Z})),(0,i.kt)("p",null,"As illustrated in the story card, each of these stories has a set of acceptance criteria, which we can build into more detailed scenarios, based on concrete examples. We can then automate these scenarios using a BDD tool like JBehave."),(0,i.kt)("p",null,"The story in the frequent flyer storycard describes how many points members need to earn to be awarded each status level. A JBehave scenario for the story card illustrated earlier might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Frequent Flyer status is calculated based on points\n\nMeta:\n@issue #FH-17\n\nScenario: New members should start out as Bronze members\nGiven Jill Smith is not a Frequent Flyer member\nWhen she registers on the Frequent Flyer program\nThen she should have a status of Bronze\n\nScenario: Members should get status updates based on status points earned\nGiven a member has a status of <initialStatus>\nAnd he has <initialStatusPoints> status points\nWhen he earns <extraPoints> extra status points\nThen he should have a status of <finalStatus>\n\nExamples:\n| initialStatus | initialStatusPoints | extraPoints | finalStatus | notes                    |\n| Bronze        | 0                   | 300         | Silver      | 300 points for Silver    |\n| Silver        | 0                   | 700         | Gold        | 700 points for Gold      |\n| Gold          | 0                   | 1500        | Platinum    | 1500 points for Platinum |\n")),(0,i.kt)("p",null,"Serenity lets you associate JBehave stories or JUnit tests with a JIRA card using the @issue meta tag (illustrated above), or the equivalent @Issue annotation in JUnit. At the most basic level, this will generate links back to the corresponding JIRA cards in your test reports, as illustrated here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jira-serenity-report",src:n(7443).Z})),(0,i.kt)("p",null,"For this to work, Serenity needs to know where your JIRA server. The simplest way to do this is to define the following properties in a file called serenity.properties in your project root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jira.url=https://myserver.atlassian.net\njira.project=FH\njira.username=jirauser\njira.password=t0psecret\n")),(0,i.kt)("p",null,"You can also set these properties up in your Maven pom.xml file or pass them in as system properties."),(0,i.kt)("h4",{id:"feature-coverage"},"Feature Coverage"),(0,i.kt)("p",null,"But test results only report part of the picture. If you are using JIRA to store your stories and epics, you can use these to keep track of progress. But how do you know what automated acceptance tests have been implemented for your stories and epics, and, equally importantly, how do you know which stories or epics have no automated acceptance tests? In agile terms, a story cannot be declared \u201cdone\u201d until the automated acceptance tests pass. Furthermore, we need to be confident not only that the tests exist, but that they test the right requirements, and that they test them sufficiently well."),(0,i.kt)("p",null,"We call this idea of measuring the number (and quality) of the acceptance tests for each of the features we want to build \u201cfeature coverage\u201d. Serenity can provide feature coverage reporting in addition to the more conventional test results. If you are using JIRA, you will need to add serenity-jira-requirements-provider to the dependencies section of your pom.xml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<dependencies>\n    ...\n    <dependency>\n        <groupId>net.serenity.plugins.jira</groupId>\n        <artifactId>serenity-jira-requirements-provider</artifactId>\n        <version>xxx</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("p",null,"The actual version number might be different for you \u2013 always take a look at ",(0,i.kt)("a",{parentName:"p",href:"http://search.maven.org/#search%7Cga%7C1%7Cthucydides"},"Maven Central")," to know what the latest version is."),(0,i.kt)("p",null,"You will also need to add this dependency to the Serenity reporting plugin configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<build>\n    ...\n    <plugins>\n        ...\n        <plugin>\n            <groupId>net.serenity.maven.plugins</groupId>\n            <artifactId>maven-serenity-plugin</artifactId>\n            <version>xxx</version>\n            <executions>\n                <execution>\n                    <id>serenity-reports</id>\n                    <phase>post-integration-test</phase>\n                    <goals>\n                        <goal>aggregate</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <dependencies>\n                <dependency>\n                    <groupId>net.serenity.plugins.jira</groupId>\n                    <artifactId>serenity-jira-requirements-provider</artifactId>\n                    <version>xxx</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n")),(0,i.kt)("p",null,"Now, when you run the tests, Serenity will query JIRA to determine the epics and stories that you have defined and list them on the Requirements page. This page gives you an overview of how many requirements (epics and stories) have passing tests (green), how many have failing (red) or broken (orange) tests, and how many have no tests at all (blue):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"serenity-jira-requirements-view",src:n(3463).Z})),(0,i.kt)("p",null,"If you click on an epic, you can see the stories defined for the epic, including an indicator (in the \u201cCoverage\u201d column) of how well each story has been tested."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"serenity-jira-report-epic-details",src:n(2997).Z,title:"Epic details in Serenity report"})),(0,i.kt)("p",null,"From here, you may want to drill down into the details about a given story, including what acceptance tests have been defined for this story, and whether they ran successfully:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"serenity-jira-story-report",src:n(7798).Z}),"\nBoth JIRA and the JIRA-Serenity integration are quite flexible. We saw earlier that we had configured a custom \u201cAcceptance Criteria\u201d field in our JIRA stories. We have displayed this custom field in the report shown above by including it in the serenity.properties file, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jira.custom.field.1=Acceptance Criteria\n")),(0,i.kt)("p",null,"Serenity reads the narrative text appearing in this report (\u201cAs a frequent flyer\u2026\u201d) from the Description field of the corresponding JIRA card. We can override this behavior and get Serenity to read this value from a different custom field using the ",(0,i.kt)("inlineCode",{parentName:"p"},"jira.custom.narrative.field")," property. For example, some teams use a custom field called \u201cUser Story\u201d to store the narrative text, instead of the Description field. We could get Serenity to use this field as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jira.custom.narrative.field=User Story\n")),(0,i.kt)("h3",{id:"two-way-integration-with-jira"},"Two way integration with JIRA"),(0,i.kt)("h4",{id:"links-from-jira-to-serenity"},"Links from JIRA to Serenity"),(0,i.kt)("p",null,"The simplest form of two-way integration between Serenity and JIRA is to get Serenity to insert a comment containing links to the Serenity test reports for each related issue card. To get this to work, you need to tell Serenity where the reports live. One way to do this is to add a property called serenity.public.url to your serenity.properties file with the address of the serenity reports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.public.url=http://buildserver.myorg.com/latest/serenity/report\n")),(0,i.kt)("p",null,"This will tell Serenity that you not only want links from the Serenity reports to JIRA, but you also want to include links in the JIRA cards back to the corresponding Serenity reports. When this property is defined, Serenity will add a comment like the following to any issues associated with the executed tests:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jira-serenity-comment",src:n(6677).Z})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.public.url")," will typically point to a local web server where you deploy your reports, or to a path within your CI server. For example, you could publish the Serenity reports on Jenkins using the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.jenkins-ci.org/display/JENKINS/HTML+Publisher+Plugin"},"Jenkins HTML Publisher Plugin"),", and then add a line like the following to your serenity.properties file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.public.url=http://jenkins.myorg.com/job/myproject-acceptance-tests/Serenity_Report/\n")),(0,i.kt)("p",null,"If you do not want Serenity to update the JIRA issues for a particular run (e.g. when running your tests locally), you can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.skip.jira.updates")," to true, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.skip.jira.updates=true\n")),(0,i.kt)("p",null,"This will simply write the relevant issue numbers to the log rather than trying to connect to JIRA."),(0,i.kt)("h4",{id:"updating-jira-issue-states"},"Updating JIRA issue states"),(0,i.kt)("p",null,"You can also configure the plugin to update the status of JIRA issues. This is deactivated by default: to use this option, you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.jira.workflow.active")," option to true, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.jira.workflow.active=true\n")),(0,i.kt)("p",null,"The default configuration will work with the default JIRA workflow: open or in progress issues associated with successful tests will be resolved, and closed or resolved issues associated with failing tests will be reopened. If you are using a customized workflow, or want to modify the way the transitions work, you can write your own workflow configuration. Workflow configuration uses a simple Groovy DSL. The following is an example of the configuration file used for the default workflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"when 'Open', {\n    'success' should: 'Resolve Issue'\n}\n\nwhen 'Reopened', {\n    'success' should: 'Resolve Issue'\n}\n\nwhen 'Resolved', {\n    'failure' should: 'Reopen Issue'\n}\n\nwhen 'In Progress', {\n    'success' should: ['Stop Progress','Resolve Issue']\n}\n\nwhen 'Closed', {\n    'failure' should: 'Reopen Issue'\n}\n")),(0,i.kt)("p",null,"You can write your own configuration file and place it on the classpath of your test project (e.g. in serenity's directory). Then you can override the default configuration by using ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.jira.workflow")," property, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.jira.workflow=my-workflow.groovy\n")),(0,i.kt)("p",null,"Alternatively, you can simply create a file called jira-workflow.groovy and place it somewhere on your classpath (e.g. in the src/test/resources directory). Serenity will then use this workflow. In both these cases, you don\u2019t need to explicitly set the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.jira.workflow.active")," property."),(0,i.kt)("h4",{id:"release-management"},"Release management"),(0,i.kt)("p",null,"In JIRA, you can organize your project releases into versions, as illustrated here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jira-versions",src:n(8294).Z})),(0,i.kt)("p",null,"You can and assign cards to one or more versions using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fix Version/s")," field:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jira-fix-versions",src:n(358).Z})),(0,i.kt)("p",null,"By default, Serenity will read version details from the Releases in JIRA. Test outcomes will be associated with a particular version using the \u201cFixed versions\u201d field. The ",(0,i.kt)("em",{parentName:"p"},"Releases")," tab gives you a run-down of the different planned versions, and how well they have been tested so far:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"releases-tab",src:n(5461).Z})),(0,i.kt)("p",null,"JIRA uses a flat version structure \u2013 you can\u2019t have for example releases that are made up of a number of sprints. Serenity lets you organize these in a hierarchical structure based on a simple naming convention. By default, Serenity uses \u201crelease\u201d as the highest level release, and either \u201citeration\u201d or \u201csprint\u201d as the second level. For example, suppose you have the following list of versions in JIRA \u2013 Release 1 \u2013 Iteration 1.1 \u2013 Iteration 1.2 \u2013 Release 2 \u2013 Release 3"),(0,i.kt)("p",null,"This will produce Release reports for Release 1, Release 2, and Release 3, with Iteration 1.2 and Iteration 1.2 appearing underneath Release 1. The reports will contain the list of requirements and test outcomes associated with each release. You can drill down into any of the releases to see details about that particular release."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"serenity-jira-releases",src:n(2068).Z})),(0,i.kt)("p",null,"You can also customize the names of the types of releases using the serenity.release.types property, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"serenity.release.types=milestone, release, version\n")))}p.isMDXComponent=!0},3747:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/frequent-flyer-story-card-6a8e02ba7c3c965270c6c67f6399388c.png"},3335:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jira-agile-board-f12000c24e41c9ee9e36b7ed672261a4.png"},358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jira-fix-versions-282dc37b36845eb1116faf55cf4b956d.png"},6677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jira-serenity-comment-dc3d6601baf666569b06d4a4ecf8a0c6.png"},7443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jira-serenity-report-7dad820516dcc5eaeab178447e6dafec.png"},8294:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jira-versions-7dd112bc3014cb0e203a370200fef1b1.png"},5461:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/releases-tab-dc4f95a0313d1007d9b6b0a4d72a8283.png"},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serenity-jira-releases-4c7920444c8965669dd736e1cfb827ed.png"},2997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serenity-jira-report-epic-details-d9e01be11c96d0a1b78813f5858e1ccb.png"},3463:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serenity-jira-requirements-view-89e71fc733fd19cedfdafa8dbcf9f4b9.png"},7798:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serenity-jira-story-report-3acd4bc1f9609b43b1e57f5a3d1de1f8.png"}}]);