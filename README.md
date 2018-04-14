UNIRENTBD.COM

Now You can find your Apartment easily

**Description:** 
unirentbd is an website. Where you will be able to find rent houses, You can also post here for your Apartment.

**Features**
1. profile:
   After opening account the user can see his profile.

2.Post add:
  User can post for his Apartment.

3.Contact:
  Visitors can feedback

4.Social Media links in the site

**How to set up the code**

1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav) on your computer

2. Download this code, and from command prompt run:

   `npm install`


   `bower install`


3. To run the code, run:

    `node server.js`

    
4. In the browser open http://localhost:3000/, and you should see the index page

**Exposed APIs**:

GET **/api/articles** (returns list of articles)

POST **/api/articles** (create new article)

GET **/api/articles/:articleId** (returns an article with matching id)

DELETE **/api/articles/:articleId** (deletes the matching article)

GET **/api/articles/edit/:articleId** (returns an article with matching id)

PUT **/api/articles/edit/:articleId** (updates the matching article)
