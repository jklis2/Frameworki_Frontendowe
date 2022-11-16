const Tlogin = async (creds: {
    userName: string;
    password: string;
  }): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (creds.userName === "harry" && creds.password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };
export default Tlogin