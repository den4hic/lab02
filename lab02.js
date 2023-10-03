
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
            id: id++,
            gender: user.gender,
            title: user.name.title,
            full_name: user.name.first + user.name.second,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            b_date: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            picture_large: user.picture.large,
            picture_thumbnail: user.picture.thumbnail
        }

        newUsers.push(newUser)
    });

    console.log(newUsers)
    return newUsers
}

// console.log(randomUserMock)
task1(randomUserMock, additionalUsers);
