
const { randomUserMock, additionalUsers } = require('./FE4U-Lab2-mock');
const courses = [
    'Mathematics',
    'Physics',
    'English',
    'Computer Science',
    'Dancing',
    'Chess',
    'Biology',
    'Chemistry',
    'Law',
    'Art',
    'Medicine',
    'Statistics',
];

function task1(users, additionalUsers) {
    const newUsers = []
    let id = 0

    users.forEach(user => {
        const newUser = {
            id: user.id.name + user.id.value,
            gender: user.gender,
            title: user.name.title,
            full_name: user.name.first + " " + user.name.last,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            course: courses[Math.floor(Math.random() * courses.length)],
            favorite: true,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            b_date: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            picture_large: user.picture.large,
            picture_thumbnail: user.picture.thumbnail,
            note: "My notes"
        }

        newUsers.push(newUser)
    });

    additionalUsers.forEach(user => {
        if(!newUsers.find(newUser => newUser.id === user.id)) {
            newUsers.push(user)
        }
    });

    return newUsers
}

function validateObject(user) {
    if(/[A-Z][a-z]*\s[A-Z][a-z]*$/.test(user.full_name) && /[A-Z][a-z]*$/.test(user.state) &&
        /([A-Z][a-z]*)|([A-Z][a-z]*(\s[A-Z][a-z]*)*)$/.test(user.country) &&
        /([A-Z][a-z]*)|([A-Z][a-z]*(\s[A-Z][a-z]*)*)$/.test(user.city) &&
        /[a-z]*$/.test(user.gender) &&
        /([A-Z][a-z]*)|([A-Z][a-z]*(\s[A-Z][a-z]*)*)$/.test(user.note) &&
        /([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z]+\.[a-z]+$/.test(user.email) &&
        (/\+38\d{10}$/.test(user.phone) || //UA
        /\d{4}-\d{7}$/.test(user.phone) || // DE
        /\d{3}-\d{8}$/.test(user.phone) || // IR
        /\d{2}-\d{4}-\d{4}$/.test(user.phone) || // AU
        /\(\d{3}\)-\d{3}-\d{4}$/.test(user.phone) || // US TR NZ NL
        /\d{2}-\d{3}-\d{3}$/.test(user.phone) || // FI
        /\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/.test(user.phone) || // FR
        /\d{3}-\d{3}-\d{3}$/.test(user.phone) || // ES
        /\d{8}$/.test(user.phone) || // NO DK
        /\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(user.phone) || // CH
        /\d{3}-\d{3}-\d{4}$/.test(user.phone)) && // IE CA
        typeof user.age === 'number') {
        // console.log(user)
        return true;
    }

    console.log(user)
    return false;
}

function filtration(users, filtrationKey) {
    let resUsers = []

    users.forEach(user => {
       if((user.country === filtrationKey.country || filtrationKey.country === undefined) &&
           (user.age === filtrationKey.age || filtrationKey.age === undefined) &&
           (user.gender === filtrationKey.gender || filtrationKey.gender === undefined) &&
           (user.favorite === filtrationKey.favorite || filtrationKey.favorite === undefined)){
           resUsers.push(user)
       }
    });

    return resUsers
}

function search(users, searchKey) {

    if(Number(searchKey) - 1 === searchKey - 1){
        return users.find(user => user.age === Number(searchKey))
    }

    const name = searchKey.split(',')[0]
    const note = searchKey.split(',')[1]
    const age = searchKey.split(',')[2]

    return users.find(user => ((user.full_name === name || name === undefined) && (user.note === note || note === undefined) && (user.age === Number(age) || age === undefined)))
}
// console.log(additionalUsers)
const a = task1(randomUserMock, additionalUsers);

console.log(search(a, "27"))
