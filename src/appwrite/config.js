// all database creation code goes here

import { Client, ID, Databases, Storage, Query } from "appwrite";
// import {conf} from "../components/index";
import conf from '../conf/conf'

export class Services {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteDatabaseId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // create post

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite :: database :: createPost :: error :: ", error);
    }
  }

  // update post

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite :: database :: updatePost :: error :: ", error);
    }
  }

  // delete post
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite :: database :: deletePost :: error :: ", error);
      return false;
    }
  }

  // get one post
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite :: database :: get Post :: error :: ", error);
      return false;
    }
  }

  //get all posts

  async getPosts() {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("appwrite :: database :: getPosts :: error :: ", error);
      return false;
    }
  }

  // create fileUpload
  async fileUpload(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite :: database :: fileUpload :: error :: ", error);
      return false;
    }
  }

  // create delete File
  async fileDelete(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("appwrite :: database :: fileUpload :: error :: ", error);
      return false;
    }
  }

  // create  getFilePreview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}
const services = new Services();

export default services;
