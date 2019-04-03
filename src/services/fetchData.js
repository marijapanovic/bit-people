
import { FetchUrl } from './../shared/shareData';
import User from '../entities/users';

const fetchUsers = () => (
    fetch(FetchUrl.url)
        .then(response => response.json())
        .then(apiUsers => {
            const users = apiUsers.results
                .filter(element => element.id.value)
                .map((element) => {

                    let fullName = `${element.name.first} ${element.name.last}`;
                    let mediumPicture = element.picture;
                    let dateBirth = new Date(element.dob.date);
                    let oneMail = element.email;
                    let et = oneMail.indexOf('@');
                    let hideMail = oneMail.slice(0, 3) + "..." +
                        oneMail.slice(et - 3, et) + oneMail.slice(et);
                    let gender = element.gender


                    return new User(
                        element.id.value,
                        mediumPicture,
                        fullName,
                        hideMail,
                        dateBirth,
                        gender
                    )
                })

            return users
        })
)

export default fetchUsers;
