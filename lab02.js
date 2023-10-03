
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
            full_name: user.name.first + user.name.second,
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
            picture_thumbnail: user.picture.thumbnail
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

// console.log(additionalUsers)
task1(randomUserMock, additionalUsers);
