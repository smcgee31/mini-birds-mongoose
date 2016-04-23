# mini-birds-mongoose (Part I)
 
We're going to build a bird sighting API using four common CRUD operations.

## Sample Data

Note the following, expanded sample data for bird sightings.

```json
[{
  "name": "red breasted merganser",
  "order": "Anseriformes",
  "status": "least concern",
  "confirmed": true,
  "numberSeen": 2
},
{
  "name": "cedar waxwing",
  "order": "Passeriformes",
  "status": "least concern",
  "confirmed": false,
  "numberSeen": 5
},
{
  "name": "osprey",
  "order": "Accipitriformes",
  "status": "least threatened",
  "confirmed": true,
  "numberSeen": 2
},
{
  "name": "snowy plover",
  "order": "Charadriformes",
  "status": "extinct",
  "confirmed": true,
  "numberSeen": 7
}]
```

## Step 1: Clone the repo

Create your Express.js app by cloning this repository.
 
## Step 2: Install the NPM modules

```
npm install
```

## Step 3: Test it

Start your application by running:

```
node server.js
```

Test each of your endpoints in Postman with the following URLs:

* **POST** `/api/sighting`
* **GET** `/api/sighting?region=america`
* **PUT** `/api/sighting?id=some-id`
* **DELETE** `/api/sighting?id=some-id`

If everything's working, you'll see console output each time you hit your endpoints.

## Step 4: Start mongod

Start the mongo daemon in a separate terminal window.
 
## Step 5: Require and connect to Mongo
  
Now, require the Mongoose module, and create a database by connecting to it in `server.js`. Name your database `birds-mongoose`.

HINT: [Read the documentation](http://mongoosejs.com/docs/index.html)

## Step 6: Create a _Sighting_ schema and model

In a separate file called, 'Sighting.js', create a schema for the Sighting collection using the sample data above.

Your schema should:

* Give each property a data type.
* Make `name` lowercase, and required.
* Restrict the length of `order` to 20.
* Enumerate possible values for `status`; make them lowercase.
* Ensure `numberSeen` is greater than 0.
* Set `confirmed` to `false` by default.

Now, define a model for your schema, and add it to the file's exports.

Finally, declare a var for your Sighting model in `server.js`.
 
## Step 7: Upgrade 'POST' endpoint to record a sighting

Upgrade your POST endpoint with code to create a sighting document from the `body` of the request, using your Sighting model.

Use sample data from `sightings.json` in your request body.

HINT: [Read the documentation for saving with models.](http://mongoosejs.com/docs/models.html)

For steps 7 through 10, test each of your endpoints again.
 
## Step 8: Upgrade 'GET' endpoint to retrieve a sighting

Modify the GET endpoint to retrieve all sightings with a given `status`, as stated in the request query.

## Step 9: Upgrade 'PUT' endpoint to modify a sighting's order

Update your PUT endpoint to accept a `body` modifying an existing sighting's `order` field. Use the `id` parameter in the query string to identify the sighting to change.

Return the newly updated sighting in your response.

## Step 10: Upgrade 'DELETE' endpoint to delete a sighting

Update your DELETE endpoint to delete a sighting document by `id` in the query string.
