# mini-birds-mongoose (Part II)

Expand on yesterday's project to support Birds and Users.

## Objectives

* Practice embedded relationships.
* Practice reference relationships.

We will:

* Add a User model.
* Add a Bird schema.
* Refactor our Sighting model to support User via reference, and Bird via an embedded document.
* Add a POST endpoint for User.
* Adjust our GET endpoint for the Sighting model.

## Prep Step: Change db name

To avoid data collisions, let's change the db name to `birds-mongoose-2`.

## Step 1: Understanding our Data Structure

Identify the type of relationships we will be creating.

### Sightings

```json
[{
  "user": "aUserID",
  "birds": [{
    "name": "red breasted merganser",
    "order": "Anseriformes",
    "status": "least concern"
  },
  {
    "name": "cedar waxwing",
    "order": "Passeriformes",
    "status": "least concern"
  }],
  "confirmed": true,
  "numberSeen": 2
},
{
  "user": "aUserID",
  "birds": [{
    "name": "osprey",
    "order": "Accipitriformes",
    "status": "least concern"
  }],
  "confirmed": false,
  "numberSeen": 1
}]
```

### Users

```json
[{
  "email": "doh@msn.com",
  "username": "homersimpson2000",
  "level": 98,
  "location": "Springfield",
  "member": true
},
{
  "email": "da.swamp@crocs.com",
  "username": "ridnick1",
  "level": 2,
  "location": "Louisiana",
  "member": false
}]
```

## Step 2: Create the _Bird_ schema to be embedded into the _Sighting_ model

In a new file, `Bird.js`, create a Bird schema using properties from the existing Sighting model. Name, order, and status will be the properties moved to our Bird object.

## Step 3: Create the _User_ Model
 
In a new file, `User.js`, create a User model with the schema properties email, username, level, location, and member.

Declare a var referencing your _User_ model in `server.js`.

## Step 4: Refactor our _Sighting_ Model

Add a property to the Sighting schema called `user` that will create a relationship between a _User_ and and _Sighting_. Each _Sighting_ should be required to be related to only one _User_. A user may have multiple sightings.

Add another property called `bird` that will store embedded data related to a specific bird when a new sighting is created.

## Step 4: Add POST for _User_

Add a POST endpoint for creating new users: `/api/users`. Test it with real data.

## Step 5: Refactor Sighting Endpoints

* POST a new `/api/sighting`, this time using the new _Sighting_ data and a _User_ id.
* When GET `/api/sighting` is requested make sure to populate it with _User_ data before returning it to the client.
* Make it possible for the client to request sightings for a specific user by through sending the user id as a part of the request query in addition to `status`.
