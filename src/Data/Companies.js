class Companies {
    static getCompanies = () => {
        return [
            {
                id: 1,
                name: 'Tech Lead at ABC Firm',
                description:
                    'Working on a product which relates to banking domain with Java',
                month: 'Feb',
                year: '2020',
                side: 'left',
                responsibilities: [
                    'Plan and design database and application architecture on the initial stage of development.',
                    'Develop REST APIs',
                ]
            },
            {
                id: 2,
                name: 'Senior Software Engineer at Codelabs',
                description:
                    'I have been able to work on multiple projects, most notably a taxi platform. I was assigned to develop the back-end functionalities as well as some front-end modules.',
                month: 'Jun',
                year: '2018',
                side: 'right',
                responsibilities: [
                    'Help the tech lead to plan and design database and application architecture on the initial stage of development.',
                    'Develop REST APIs for mobile applications and web applications',
                    'Develop web applications',
                    'Mentor junior developers so that they can get into development and fix difficult situations.'
                ]
            },
            {
                id: 3,
                name: 'Senior Software Engineer at Web Agency',
                description:
                    'I worked on a park listing website and an yellow pages platform.',
                month: 'Jul',
                year: '2017',
                side: 'left',
                responsibilities: [
                    'Helped the tech lead to plan and design database and application architecture on the initial stage of development.',
                    'Developed REST APIs for mobile applications and web applications.',
                    'Developed server rendered HTML pages for web applications.',
                ]
            },
            {
                id: 4,
                name: 'Web Developer at Awesome product',
                description: 'Awesome product was the largest platform in the world.',
                month: 'Aug',
                year: '2016',
                side: 'right',
                responsibilities: [
                    'Helped the tech lead to plan and design a custom model view controller framework for the application',
                    'Developed a web crawler for indexing the job advertisements.',
                    'Developed server rendered HTML pages for web application.',
                ]
            },
            {
                id: 5,
                name: 'Web Developer at web company',
                description:
                    'Worked on a various CMS and e-commerce websites with Magento and WordPress',
                month: 'Feb',
                year: '2015',
                side: 'left',
                responsibilities: [
                    'Integrated static HTML into custom WordPress/Magento themes.',
                    'Developed custom plugins for WordPress/Magento.'
                ]
            },
            {
                id: 6,
                name: 'Associate Software Engineer at BIG four',
                description:
                    'Worked on a ERP software.',
                month: 'May',
                year: '2014',
                side: 'right',
                responsibilities: [
                    'Build new modules for client requirements'
                ]
            },
        ]
    }
}

export default Companies;