import vidImg0 from '../src/assets/Images/video0.jpg';
import vidImg1 from '../src/assets/Images/video1.jpg';
import vidImg2 from '../src/assets/Images/video2.jpg';
import vidImg3 from '../src/assets/Images/video3.jpg';
import vidImg4 from '../src/assets/Images/video4.jpg';
import vidImg5 from '../src/assets/Images/video5.jpg';
import vidImg6 from '../src/assets/Images/video6.jpg';
import vidImg7 from '../src/assets/Images/video7.jpg';
import vidImg8 from '../src/assets/Images/video8.jpg';

// Side Video Object
const sideVideo = [
    {
        id: '001', 
        title: 'Drunken Cyclists Rampage: 2018 Highlights', 
        channel: 'Red Cow', 
        image: vidImg0
    },
    {
        id: '002', 
        title: 'How to film tilting your camera', 
        channel: 'Todd Welch', 
        image: vidImg1
    },
    {
        id: '003', 
        title: 'The Try Guys try top 10 deadliest food in the world', 
        channel: 'Cornelia Blair', 
        image: vidImg2
    },
    {
        id: '004', 
        title: 'Travel Health Userful Medical Information for', 
        channel: 'Glen Harper', 
        image: vidImg3
    },
    {
        id: '005', 
        title: 'Cheap airline tickets great ways to save', 
        channel: 'Emily Harper', 
        image: vidImg4
    },
    {
        id: '006', 
        title: 'Take a romantic break in a boutique Hotel', 
        channel: 'Ethan Owen', 
        image: vidImg5
    },
    {
        id: '007', 
        title: 'Choose the perfect accomodations', 
        channel: 'Lydia Perez', 
        image: vidImg6
    },
    {
        id: '008', 
        title: 'Cruising destination ideas', 
        channel: 'Timothy Autin', 
        image: vidImg7
    },
    {
        id: '009', 
        title: 'Train travel on Track for Safety', 
        channel: 'Scotty Cranmer', 
        image: vidImg8
    }
];

//Main Video Object
const mainVideo = {
    id: '001',
    title: 'Drunken Cyclists: 2018 Highlights',
    description: `On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title`,
    channel: 'Red Cow',
    image: vidImg0,
    views: '1,001,023',
    likes: '110,985',
    duration: '0:42',
    video: 'tbd',
    timestamp: '12/18/2018',
    comments: [
        {
            'name' : 'Michael Lyons',
            'date' : '12/18/2018',
            'comment' : "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
            'name' : 'Gary Wong',
            'date' : '12/12/2018',
            'comment' : "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
            'name' : 'Theodore Duncan',
            'date' : '11/15/2018',
            'comment' : "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly hapy! He's definitely my favorite ever!"
        }
    ] 
};

export {sideVideo, mainVideo}