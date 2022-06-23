const files = [
    {
        type: 'folder',
        title: 'C diskas',
        list: [
            {
                type: 'folder',
                title: 'BIOS',
                list: [
                    {
                        type: 'folder',
                        title: '8TCN51WW',
                        list: [
                            {
                                type: 'file',
                                title: 'summer.jpg'
                            },
                            {
                                type: 'file',
                                title: 'summer-2.jpg'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: '8TCN53WW',
                        list: [
                            {
                                type: 'file',
                                title: 'summer.jpg'
                            },
                            {
                                type: 'file',
                                title: 'summer-2.jpg'
                            },
                        ]
                    },
                    {
                        type: 'file',
                        title: 'bios1.jpg'
                    },
                    {
                        type: 'file',
                        title: 'bios2.jpg'
                    },
                ]
            },
            {
                type: 'folder',
                title: 'Games',
                list: [
                    {
                        type: 'folder',
                        title: 'Euro-truck',
                        list: [
                            {
                                type: 'file',
                                title: 'euro-1.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-2.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-3.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-4.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-5.txt'
                            },
                        ]
                    }
                ]
            },
            {
                type: 'folder',
                title: 'Program Files',
                list: [
                    {
                        type: 'folder',
                        title: 'Adobe',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: 'dotnet',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: 'Git',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                ]
            },
            {
                type: 'file',
                title: 'msdia80.dll'
            },
            {
                type: 'file',
                title: 'msdia802.dll'
            },
            {
                type: 'file',
                title: 'msdia803.dll'
            },
            {
                type: 'file',
                title: 'msdia804.dll'
            },
        ]
    }
];

function fileSearch(input) {
    return {
        folder: [],
        files: [],
    };
}

//fuzzy false