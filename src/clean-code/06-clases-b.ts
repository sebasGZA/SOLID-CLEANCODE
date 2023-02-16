(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthDate, gender, name }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ birthDate, email, gender, name, role }: UserProps) {
      super({ birthDate, gender, name });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      birthDate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthDate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    birthDate: new Date("1995-05-15"),
    email: "Sebas@gmail.com",
    gender: "M",
    lastOpenFolder: "/usr",
    name: "Sebastian",
    role: "Admin",
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
