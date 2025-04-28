const products = [
    {
        id: 1,
        title: "Red Ribbon Bouquet",
        price: "₹1799 <del>₹1999</del> ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Pink",
                mainImage: "images/1ribbon.jpg",
                thumbnails: [
                    "images/product1_PINK_2.jpg",
                    "images/product1_PINK_3.jpg",
                    "images/product1_PINK_4.jpg"
                ],
                
            },
            {
                name: "Yellow",
                mainImage: "images/product1_yellow_1.jpg",
                thumbnails: [
                    "images/product1_yellow_2.jpg",
                    "images/product1_yellow_3.jpg",
                    "images/product1_yellow_4.jpg"
                ],
                
            },
            {
                name: "Red",
                mainImage: "images/product1_red_1.jpg",
                thumbnails: [
                    "images/product1_red_2.jpg",
                    "images/product1_red_3.jpg",
                    "images/product1_red_4.jpg"
                ],
                
            },
            {
                name: "White",
                mainImage: "images/product1_white_1.jpg",
                thumbnails: [
                    "images/product1_white_2.jpg",
                    "images/product1_white_3.jpg",
                    "images/product1_white_4.jpg"
                ],
                
            },
            {
                name: "Maroon",
                mainImage: "images/product1_maroon_1.jpg",
                thumbnails: [
                    "images/product1_maroon_2.jpg",
                    "images/product1_maroon_3.jpg",
                    "images/product1_maroon_4.jpg"
                ],
                
            }
        ]
    },
    {
        id: 2,
        title: " Birthday Bouquet",
        price: "₹2500 <del>₹2999</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "images/2birthday.jpg",
                thumbnails: [
                    "images/product2_blue_2.jpg",
                    "images/product2_blue_3.jpg",
                    "images/product2_blue_4.jpg"
                ],
                
            }
        ]
    },
    {
        id: 3,
        title: "MFlower Pot",
        price: "₹1299 <del>₹1499</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Grey",
                mainImage: "3mages/3flowerpot.jpg",
                thumbnails: [],
                
            }      
        ]
    },
    {
        id: 4,
        title: "Picture Bouquet",
        price: "₹1400 <del>₹1699</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/4photob.jpg",
                thumbnails: [],
                
            }
        ]
    },
    {
        id: 5,
        title: "MONEY Bouquet",
        price: "₹1599 <del>₹1799</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Black",
                mainImage: "images/5money.jpg",
                thumbnails: [],
                
            }
        ]
    },
    {
        id: 6,
        title: "Gift chocolate box",
        price: "₹1899 <del>₹1999</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Brown",
                mainImage: "images/6gift.jpg",
                thumbnails: [],
                
            }
        ]
    },
    {
        id: 7,
        title: "Small Bouquet",
        price: "₹500 <del>₹599",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "images/r1hanp.jpg",
                thumbnails: [],
                
            }
        ]
    },
    
    /* stufff toy */
    {
        id: 8,
        title: "Stuff Toy Bouquet",
        price: "₹1899 <del>₹1999</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product8_green_1.jpg",
                thumbnails: [],
            }
        ]
    },
    
    /* plant */
    {
        id: 9,
        title: "Japanese Bonsai",
        price: ">₹1500 <del>₹3000</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "iImages/p1bonsai.jpg",
                thumbnails: [],
            }
        ]
    },
    
    {
        id: 10,
        title: "Images/p2snake.jpg",
        price: "₹999<del>₹1199</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "Images/p2snake.jpg",
                thumbnails: [],
            }
        ]
    },
    
    {
        id: 11,
        title: "Spider Plant",
        price: "₹799 <del>₹999</del>",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "Images/p3spider.jpg",
                thumbnails: [],
            }
        ]
    },
    ];
    