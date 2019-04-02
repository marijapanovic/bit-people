class User {
    constructor(id, picture, name, email, dateOfBirth, gender) {

        this.id = id;
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.genderAdditionalClass = gender === "female" ? " female" : "";
    }
}

export default User;