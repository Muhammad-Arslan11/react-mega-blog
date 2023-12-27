import { Client, Account, ID } from "appwrite";
import { conf } from '../components/index'


export class AuthService {
  // create client
  client = new Client();
  account;

  constructor() {

    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    // // create account object                       
    this.account = new Account(this.client)
  }

  // create account

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)

      if (userAccount) {
        return this.login({ email, password })
      }
      else return userAccount;
    }
    catch (error) {
      console.log("appwrite: : authentication :: createAccount ::  error :: ", error)
    }
  }

  // create login

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password)
    }

    catch (error) {
      console.log("appwrite :: authentication :: login :: error ::", error)

    }
  }

  // get account
  async getCurrentUser() {

    try {
      return await this.account.get();

    }
    catch (error) {
      console.log("appwrite :: authentication :: getCurrentUser :: error ::", error)
    }
    return null;
  }

  // create logout


  async logout() {
    try {
      return await this.account.deleteSessions();
    }
    catch (error) {
      console.log("appwrite :: authentication :: getCurrentUser :: error ::", error)

    }

  }

}
const authService = new AuthService();

export default authService