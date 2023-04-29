const usernames = [
    'maryandmaxbaseball',
    'valleysevensamurai',
    'cheesesticksbiscuits',
    'blackwidowspiritfox',
    'pigsnakechickenleg',
    'pulpfictioninception',
    'farmlandtealeafpasta',
    'flyinginsectcatpluto',
    'windvforvendettasea',
    'enchantingpinecone',
    'clarinetsweetrolls',
    'petrichorthebigsleep',
    'thegraduatepersimmon',
    'creambarleydoughnuts',
    'chimpanzeewhiplash',
    'romanholidayantcake',
    'hypernovanetvoyager2',
    'potatoweaselshrimp',
    'spiralshapemessier63',
    'silverberrysoprano',
    'rockytimonpioneer10',
    'mayonnaisefoxeggfog',
    'basketballtrailbeat',
];
  
const emailAddresses = [
    'carmena@sbcglobal.net',
    'ahmad@comcast.net',
    'maneesh@aol.com',
    'tezbo@mac.com',
    'madler@icloud.com',
    'paina@msn.com',
    'aaribaud@comcast.net',
    'forsberg@mac.com',
    'arebenti@outlook.com',
    'cremonini@sbcglobal.net',
    'cisugrad@me.com',
    'gravyface@yahoo.com',
    'grothoff@outlook.com',
    'hermes@sbcglobal.net',
    'atmarks@me.com',
    'dsowsy@msn.com',
    'flavell@me.com',
    'eminence@yahoo.ca',
    'symbolic@outlook.com',
    'dwheeler@comcast.net',
    'lpalmer@verizon.net',
    'gfody@me.com',
    'gmcgath@verizon.net',
];

const thoughts = [
    'The weather is terrible today.',
    'I do not know why this code is not working.',
    'I would rather be sleeping.',
    'Am I too old to start training for the Olympics?',
    'What ever happened to Trix cereal?',
    'Caffeine is a necessary evil.',
    'Does anyone even really care what I think?',
    'I have never felt so old.',
    'Adults should have summer breaks too.',
    'Sally sells seashells by the sea shore.',
    'Why is food suddenly so expensive?',
    'Do cows from other countries moo with an accent?',
    'How do ants not drown every time it rains?',
    'I bless the rains down in Africa.',
    'Will One Direction ever get back together?',
    'My drawing skills have improved.',
    'The best way to avoid people is to never leave the house.',
    'I should just move to Canada.',
    'I really need to update my glasses prescription.',
    'I used to want to be an astronaut.',
    'I have never been able to hula hoop.',
    'What should I have for dinner tonight?',
    'I. Am. So. Tired.',
];

const reactions = [
    'Agreed.',
    'Me either.',
    'Me too!',
    'Never.',
    'So relatable!',
    'Totally!',
    'Absolutely not.',
    'Same.',
    'For real :)',
    'Uh, what?',
    'Yesssss',
    'I think so!',
    'Beats me.',
    'Good for you.',
    'I doubt it.',
    'Huzzah!',
    'Yup!',
    'Definitely.',
    'Me too.',
    'Awesome!',
    'Lame.',
    '???',
    'Ditto.',
];

// Function to create reaction objects from the username and reaction arrays
const populateReactions = (reaction, username) => {
    const results = [];
    for (let i = 0; i < reaction.length; i++) {
        results.push({
        reactionBody: reaction[i],
        username: username[i],
        });
    }
    return results;
};

const reactionArray = populateReactions(reactions, usernames);

// Function to create user objects from the username and email arrays
const populateUsers = (username, email, thought) => {
const results = [];
for (let i = 0; i < username.length; i++) {
    results.push({
    username: username[i],
    email: email[i],
    thoughts: [thought[i]],
    friends: [],
    });
}
return results;
};

// Function to create thought objects from the thought and username arrays
const populateThoughts = (thought, username, reaction) => {
    const results = [];
    for (let i = 0; i < thought.length; i++) {
        results.push({
        thoughts: thought[i],
        username: username[i],
        reactions: [reaction[i]],
        });
    }
    return results;
};

const userArray = populateUsers(usernames, emailAddresses, thoughts);
const thoughtArray = populateThoughts(thoughts, usernames, reactionArray);
 
// Export the functions for use in seed.js
module.exports = [userArray, thoughtArray];