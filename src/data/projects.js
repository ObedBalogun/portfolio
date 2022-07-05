export const projects = [
    {
        "id": 1,
        "name": "Shyne",
        "description": "Shyne is a platform that connects cleaning services to clients within their area\n who need a shyne.",
        "imageURL": "/shyne-cover.png",
        "technology": [
            "Bootstrap",
            "Django",
            "React"
        ],
        "position": "left",
        "mode": "live",
        "link": "https://shyne-app.herokuapp.com/",

    },
    {
        "id": 2,
        "name": "GoodChat",
        "description": "If you need someone to chat with, rant about your problems, or just want to\nbe listened you, Goodchat is the service for you.",
        "imageURL": "/goodchat-cover.png",
        "technology": [
            "Bootstrap",
            "Django",
            "Postgresql"
        ],
        "position": "left",
        "mode": "not-live",
        "link": "https://goodchatapp.herokuapp.com/",
    },
    // {
    //     "id": 3,
    //     "name": "Finag",
    //     "description": " USSD based application for farmers to manage their supply chain and\ntransactions.",
    //     "imageURL": "/project.png",
    //     "technology": [
    //         "Django",
    //         "Postgresql",
    //         "REST API",
    //         "TailwindCSS"
    //     ],
    //     "position": "left",
    //     "mode": "not-live",
    // },
    {
        "id": 4,
        "name": "AKMarv Beat Repo",
        "description": "Website to listen to and purchase music producer AKMarvs beats.\n",
        "imageURL": "/akmarv-cover.png",
        "technology": [
            "Bootstrap",
            "Django",
            "Postgresql"
        ],
        "position": "right",
        "mode":"live",
        "link": "https://www.akmarv.com/",
    },
    {
        "id": 5,
        "name": "Selormbeauty",
        "description": "E-commerce website for amazing skincare products.\n",
        "imageURL": "/selorm-cover.png",
        "technology": [
            "Django",
            "Postgresql",
            "React",
            "Tailwind"
        ],
        "position": "right",
        "mode": "not-live",
    },
    {
        "id": 6,
        "name": "Sharp",
        "description": "Sharp is a web application that improves customer relationships and customer data management and " +
            "increases efficiency of Base; a USSD App. Sharp is a customized tool built to maximize collaboration within" +
            " the Base customer support team.\n",
        "imageURL": "/sharp-cover.png",
        "technology": [
            "Node",
            "React",
            "Tailwind"
        ],
        "position": "right",
        "mode": "not-live",
    },
    {
        "id": 7,
        "name": "Gather Store",
        "description": "Customer Support portal to help manage and resolve tickets raised by customers.\n",
        "imageURL": "/gather-cover.png",
        "technology": [
            "Node",
            "React",
            "Tailwind"
        ],
        "position": "right",
        "mode": "not-live"
    },
    {
        "id": 8,
        "name": "MusicHeads",
        "description": "Customer Support portal to help manage and resolve tickets raised by customers.\n",
        "imageURL": "/project.png",
        "technology": [
            "Node",
            "React",
            "Tailwind"
        ],
        "position": "left"
    },
]

export const projectDetails = [
    {
        "id": 1,
        "name": "Shyne",
        "description": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "role": "Software Developer",
        "tools": "Django, Bootstrap, REST API, Postgresql, React",
        "year": "2020",
        "image1": "/shyne-homepage.png",
        "details1": "Users can sign up as a cleaner or a client and can search for cleaners or clients within their area. Clients get to choose from home/office cleaning or vehicle cleaning while cleaners get to manage the life cycle of cleaning requests.",
        "image2": "/shyne-cars.png",
        "details2": "Shyne was developed with the mobile first approach by mocking what the app would look like as an application on a mobile device.",
        "details3": "The application was built to accommodate the needs of the client and cleaning agency by letting them manage cleaning requests and view the status of their requests.",
        "details4": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "image3": "/shyne-temp.png"
    },
    {
        "id": 2,
        "name": "GoodChat",
        "description": "If you need someone to chat with, rant about your problems, or just want to be listened you, Goodchat is the service for you.",
        "role": "Software Developer",
        "tools": "Django, Bootstrap, REST API, Postgresql, React",
        "year": "2020",
        "image1": "/goodchat-2.png",
        "details1": "Goodchat brings together people that need to talk and people that are qualified to listen to them " +
            "and maybe even give advice. The platform allows Talkers and Listeners to manage their call sessions and wallet transactions",
        "image2": "/goodchat-sessions.png",
        "details2": "Talkers can schedule sessions with listeners they are familiar with or opt for someone new. " +
            "Both listeners and talkers are rated based on reviews of past sessions. Users view session history and manage sessions.",
        "details3": "Accepted sessions are carried out on google meet and a timer is triggered on the app by the listener. " +
            "After a call session, the timer is stopped and the charge calculated and shown to both parties involved." +
            " The listener's wallet is credited,while the talker's wallet is debited.",
        "details4": "The timer runs for as long as the" +
            " talker has credit or until the listener stops it.",
        "image3": "/goodchat-session.png"
    },
    // {
    //     "id": 3,
    //     "name": "Finag",
    //     "description": "If you need someone to chat with, rant about your problems, or just want to\nbe listened you, Goodchat is the service for you.",
    //     "role": "Software Developer",
    //     "tools": "Django, Bootstrap, REST API, Postgresql, React",
    //     "year": "2020",
    //     "image1": "/shyne-confirm.png",
    //     "details1": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
    //     "image2": "/shyne-cars.png",
    //     "details2": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
    //     "details3": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
    //     "details4": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
    //     "image3": "/shyne-temp.png"
    // },
    {
        "id": 4,
        "name": "AkMarv",
        "description": "This is a digital marketplace that allows users can listen to and purchase beats and licenses provided by the artist.",
        "role": "Software Developer",
        "tools": "Django, Bootstrap, Postgresql, React",
        "year": "2020",
        "image1": "/akmarv-2.png",
        "details1": "On the frontend, users can listen to the beats with an inbuilt media player before going ahead " +
            "to purchase. The media files are hosted in an online repository, Amazon S3 bucket. Upon requests, links are retrieved and serialized " +
            "by the django backend.",
        "image2": "/akmarv-3.png",
        "details2": "Users are able to purchase beats by adding beat and license pairs to their cart and proceeding to checkout. " +
            "Paystack was integrated to process transactions. After payments have been confirmed, users are emailed with the purchased media files and licenses. ",
        "details3": "The details of available license categories can be viewed and downloaded on the page.",
        "details4": "To negotiate license prices, users can contact the artist by clicking the negotiate button to send an email to the artist about that particular beat.",
        "image3": "/akmarv-4.png"
    },
    {
        "id": 5,
        "name": "Selorm Beauty",
        "description": "Users can listen to beats and download them\nwith licenses provided by the artist.",
        "role": "Software Developer",
        "tools": "Django, Bootstrap, REST API, Postgresql, React",
        "year": "2020",
        "image1": "/selorm-home.png",
        "details1": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "image2": "/project.png",
        "details2": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "details3": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "details4": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "image3": "/project.png"
    },
    {
        "id": 6,
        "name": "SHARP",
        "description": "Sharp is a web application that improves customer relationships and customer data management and " +
            "increases efficiency of Base; a USSD App. Sharp is a customized tool built to maximize collaboration within" +
            " the Base customer support team.\n",
        "role": "Software Developer",
        "tools": "Node, React, Tailwind",
        "year": "2020",
        "image1": "/sharp-overview.png",
        "details1": "Every customer support team needs an efficient tool to maintain customer relationships and work" +
            " efficiently. In addition to this, they want to be able to monitor all the activities of customers when " +
            "they use the product in question so they can be well informed and provide help where needed. " +
            "Sharp allows its users to keep track of farmer data, orders and transactions performed on Base. " +
            "It allows the team to have all the required information in one place which maintains order and improves efficiency.\n",
        "image2": "/sharp-farmers.png",
        "details2": "Sharp is packed with features, but it's intuitive interface makes it easy to use, regardless of " +
            "technical aptitude. It centralizes and compartmentalizes data where necessary from multiple customer " +
            "touchpoints to avoid duplication of efforts or embarrassing miscommunications.",
        "details3": "The dashboards update in real time to ensure the users always have access to the most current data, " +
            "and get full context on all customer interactions.\n" ,
        "details4": "The message templates and filters allow the users to message the right audience at the right time.",
        "image3": "/sharp-farmers.png"
    },
    {
        "id": 7,
        "name": "SHARP",
        "description": "Sharp is a web application that improves customer relationships and customer data management and " +
            "increases efficiency of Base; a USSD App. Sharp is a customized tool built to maximize collaboration within" +
            " the Base customer support team.\n",
        "role": "Software Developer",
        "tools": "Node, React, Tailwind",
        "year": "2020",
        "image1": "/sharp-overview.png",
        "details1": "Every customer support team needs an efficient tool to maintain customer relationships and work" +
            " efficiently. In addition to this, they want to be able to monitor all the activities of customers when " +
            "they use the product in question so they can be well informed and provide help where needed. " +
            "Sharp allows its users to keep track of farmer data, orders and transactions performed on Base. " +
            "It allows the team to have all the required information in one place which maintains order and improves efficiency.\n",
        "image2": "/sharp-farmers.png",
        "details2": "Sharp is packed with features, but it's intuitive interface makes it easy to use, regardless of " +
            "technical aptitude. It centralizes and compartmentalizes data where necessary from multiple customer " +
            "touchpoints to avoid duplication of efforts or embarrassing miscommunications.",
        "details3": "The dashboards update in real time to ensure the users always have access to the most current data, " +
            "and get full context on all customer interactions.\n" ,
        "details4": "The message templates and filters allow the users to message the right audience at the right time.",
        "image3": "/sharp-farmers.png"
    },
    {
        "id": 8,
        "name": "MusicHeads",
        "description": "Users can listen to beats and download them\nwith licenses provided by the artist.",
        "role": "Software Developer",
        "tools": "Django, Bootstrap, REST API, Postgresql, React",
        "year": "2020",
        "image1": "/selorm-home.png",
        "details1": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "image2": "/project.png",
        "details2": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "details3": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "details4": "Shyne is a platform that connects cleaning services to clients within their area who need a\nshyne.",
        "image3": "/project.png"
    },
]