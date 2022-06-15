import * as Realm from "realm-web";
import { Router } from "itty-router";
const router = Router();
// The Worker's environment bindings. See `wrangler.toml` file.
interface Bindings {
  // MongoDB Realm Application ID
  REALM_APPID: string;
}

// Define type alias; available via `realm-web`
type Document = globalThis.Realm.Services.MongoDB.Document;

function createResponse(o: any) {
  const body = JSON.stringify(o);
  const headers = { "Content-type": "application/json" };
  return new Response(body, { headers });
}

// Declare the interface for a document
interface Users extends Document {
  firstname: string;
  lastname: string;
  sex: string;
  age: string;
  password: string;
}
interface Profile extends Document {
  userId: string;
  firstname: string;
  lastname: string;
  full_name: string;
  license: string;
  signatures_Require: string;
  current_sign: number;
  case_name: string;
  email: string;
  phone: string;
  zipcode: string;
  state: string;
  country: string;
  user_avatar: string;
  page_title: string;
  page_contents: string;
  pdf1: string;
  pdf2: string;
  pdf3: string;
  pdf4: string;
  pdf1_title: string;
  pdf2_title: string;
  pdf3_title: string;
  pdf4_title: string;
  address: string;
}

interface RecallUsers extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  zipcode: string;
  state: string;
  profile_id: string;
  address: string;
}

let App: Realm.App;
const ObjectId = Realm.BSON.ObjectID;

// Define the Worker logic
const worker: ExportedHandler<Bindings> = {
  async fetch(req, env) {
    const url = new URL(req.url);
    App = App || new Realm.App(env.REALM_APPID);

    const token = req.headers.get("authorization");
    console.log("****");
    console.log(token);
    console.log("****");

    if (!token) {
      const body = JSON.stringify({ message: "missing or wrong auth token" });
      const headers = { "Content-type": "application/json" };
      return new Response(body, { headers });
    }

    try {
      const credentials = Realm.Credentials.apiKey(token);
      // Attempt to authenticate
      var user = await App.logIn(credentials);
      var client = user.mongoClient("mongodb-atlas");
    } catch (err) {
      const body = JSON.stringify({ message: err });
      const headers = { "Content-type": "application/json" };
      return new Response(body, { headers });
    }

    // Grab a reference to the collections
    const User = client.db("test").collection<Users>("users");
    const Profile = client.db("test").collection<Profile>("profiles");
    const RecallUser = client.db("test").collection<RecallUsers>("recallusers");

    // router.post("/api/users/findprofile/:id", async (req: any, res: any) => {
    //   // const col = await User.insertOne({ firstname: "sam@sam.com" });
    //   // const body = JSON.stringify({ status: true, col });
    //   // const headers = { "Content-type": "application/json" };
    //   // return new Response(body, { headers });
    // });

    // Incase we need this API
    router.get("/:userId", async (req: any, res: any) => {
      const user: any = await User.findOne({
        _id: new ObjectId(req.params.userId),
      });
      delete user?.password;
      const body = JSON.stringify({ status: true, user });
      const headers = { "Content-type": "application/json" };
      return new Response(body, { headers });
    });

    router.post("/login", async (req: any, res: any) => {
      const content = await req.json();
      const user: any = await User.findOne(content);
      if (user) {
        return createResponse({ status: true, user });
      } else {
        return createResponse({ message: "wrong email or password" });
      }
    });

    router.post("/signup", async (req: any, res: any) => {
      const content = await req.json();
      console.log(content);
      // check for user
      const user = await User.findOne({
        email: content.email,
      });
      if (user) {
        return createResponse({
          status: false,
          message: "email already in use",
        });
      } else {
        const u = await User.insertOne(content);
        return createResponse({ status: true, userId: u.insertedId });
      }
    });

    router.post("/getRecalls", async (req: any, res: any) => {
      const recalls: any = await Profile.find({});
      return createResponse({ recalls });
    });

    router.post("/api/users", async (req: any, res: any) => {
      const recalls: any = await Profile.find({});
      return createResponse({ recalls });
    });

    router.get("/profile/:userId", (req: any, res: any) => {
      Profile.findOne({ _id: req.params.userId })
        .then(user => res.status(200).json(user))
        .catch(err =>
          res.status(404).json({ error: "No user found by this id" })
        );
    });

    // search by Fname, Lname, Sex, and Age -- { query: input }
    // Just naive search, for high level search, need rewrite
    router.post("/search", (req: any, res: any) => {
      User.find()
        .then(users =>
          users.filter(
            (user: any) =>
              user.firstname
                .toLowerCase()
                .indexOf(req.body.query.toString().toLowerCase()) !== -1 ||
              user.lastname
                .toLowerCase()
                .indexOf(req.body.query.toString().toLowerCase()) !== -1 ||
              user.sex
                .toLowerCase()
                .indexOf(req.body.query.toString().toLowerCase()) !== -1 ||
              user.age.toString().indexOf(req.body.query.toString()) !== -1
          )
        )
        .then(users => res.status(200).json(users))
        .catch(err => res.status(404).json({ error: "No user found" }));
    });

    // Sort user by fn, ln, sex, age -- by attribute
    router.post("/sort", (req: any, res: any) => {
      // console.log(req.body.attribute);
      User.find()
        .then(users => {
          switch (req.body.attribute) {
            // Don't change the USERS array!
            case "firstname":
              return [...users].sort((a: any, b: any) =>
                a.firstname > b.firstname
                  ? 1
                  : a.firstname === b.firstname
                  ? a.lastname > b.lastname
                    ? 1
                    : a.lastname === b.lastname
                    ? a.age > b.age
                      ? 1
                      : a.age === b.age
                      ? a.sex > b.sex
                        ? 1
                        : -1
                      : -1
                    : -1
                  : -1
              );

            case "lastname":
              return [...users].sort((a: any, b: any) =>
                a.lastname > b.lastname
                  ? 1
                  : a.lastname === b.lastname
                  ? a.firstname > b.firstname
                    ? 1
                    : a.firstname === b.firstname
                    ? a.age > b.age
                      ? 1
                      : a.age === b.age
                      ? a.sex > b.sex
                        ? 1
                        : -1
                      : -1
                    : -1
                  : -1
              );

            case "sex":
              return [...users].sort((a: any, b: any) =>
                a.sex > b.sex
                  ? 1
                  : a.sex === b.sex
                  ? a.firstname > b.firstname
                    ? 1
                    : a.firstname === b.firstname
                    ? a.lastname > b.lastname
                      ? 1
                      : a.lastname === b.lastname
                      ? a.age > b.age
                        ? 1
                        : -1
                      : -1
                    : -1
                  : -1
              );

            case "age":
              // console.log([...users][0].age);
              return [...users].sort((a: any, b: any) =>
                a.age > b.age
                  ? 1
                  : a.age === b.age
                  ? a.firstname > b.firstname
                    ? 1
                    : a.firstname === b.firstname
                    ? a.lastname > b.lastname
                      ? 1
                      : a.lastname === b.lastname
                      ? a.sex > b.sex
                        ? 1
                        : -1
                      : -1
                    : -1
                  : -1
              );

            default:
              return [...users];
          }
        })
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ error: "Failed to sort" }));
    });

    // Create recall User
    router.post("/recall", async (req: any, res: any) => {
      const newRecallUser = await RecallUser.insertOne({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        zipcode: req.body.zipcode,
        state: req.body.user_state,
        profile_id: req.body.person,
        address: req.body.address,
      });
      if (newRecallUser) {
        return createResponse(newRecallUser);
      } else {
        return createResponse({ error: "failed to create " });
      }
    });

    // Edit user
    router.put("/:userId", (req, res) => {
      // User.findByIdAndUpdate(req.params.userId, {
      //   $set: {
      //     firstname: req.body.firstname,
      //     lastname: req.body.lastname,
      //     sex: req.body.sex,
      //     age: req.body.age,
      //     password: req.body.password
      //   }
      // })
      //   .then(user => res.status(200).json(user))
      //   .catch(err => res.status(500).json({ error: 'Failed to edit' }));
    });

    // Delete user
    router.delete("/:userId", (req, res) => {
      // User.findByIdAndDelete({ _id: req.params.userId })
      //   .then(user => res.status(200).json(user))
      //   .catch(err => res.status(500).json({ error: "Failed to delete" }));
    });

    router.post("/api/users/createprofile", async (req: any, res: any) => {
      const content = await req.json();

      const newProfile = await Profile.insertOne({
        userId: content.userId,
        firstname: content.firstname,
        lastname: content.lastname,
        full_name: content.full_name,
        license: content.license,
        signatures_Require: content.signatures_Require,
        current_sign: 0,
        case_name: content.case_name,
        email: content.email,
        phone: content.phone,
        zipcode: content.zipcode,
        state: content.state,
        country: content.country,
        user_avatar: content.user_avatar,
        page_title: content.page_title,
        page_contents: content.page_contents,
        pdf1: content.pdf1,
        pdf2: content.pdf2,
        pdf3: content.pdf3,
        pdf4: content.pdf4,
        pdf1_title: content.pdf1_title,
        pdf2_title: content.pdf2_title,
        pdf3_title: content.pdf3_title,
        pdf4_title: content.pdf4_title,
        address: content.address,
      });
      if (newProfile) {
        return createResponse({ content });
      } else {
        return createResponse({ error: "failed to create" });
      }
    });

    router.put("/updateProfile/:userId", (req: any, res: any) => {
      // Profile.findByIdAndUpdate(req.params.userId, {
      //   $set: {
      //     firstname: req.body.firstname,
      //     lastname: req.body.lastname,
      //     email: req.body.email,
      //     phone: req.body.phone,
      //     zipcode: req.body.zipcode,
      //     address: req.body.address,
      //     current_sign: req.body.current_sign + 1,
      //     state: req.body.user_state,
      //   },
      // })
      //   .then(user => res.status(200).json(user))
      //   .catch(err => res.status(500).json({ error: "Failed to edit" }));
    });

    router.post("/api/users/findprofile/:query", async (req: any, res: any) => {
      const query = req.params.query;
      var results = await Profile.find({
        state: query,
      });
      return createResponse(results);
    });

    router.post("/api/users/findsigner/:query", async (req: any, res: any) => {
      const query = req.params.query;
      const content = await req.json();
      var r = await RecallUser.find({
        profile_id: query,
      });
      if (r) {
        return createResponse(r);
      } else {
        var _r = await RecallUser.find({
          profile_id: content.profile_id,
        });
        if (_r) {
          return createResponse(_r);
        } else {
          return createResponse({});
        }
      }
    });

    router.post(
      "/api/users/findemailsigner/:query",
      async (req: any, res: any) => {
        const query = req.params.query;
        const email = query.split("&")[0];
        const profileid = query.split("&")[1];
        var r = await RecallUser.find({
          email: email,
          profile_id: profileid,
        });
        console.log("*****");
        console.log(query);
        console.log(r);
        console.log("*****");

        return createResponse({});
      }
    );
    router.post(
      "/api/users/findphonesigner/:query",
      async (req: any, res: any) => {
        const query = req.params.query;

        const phone = query.split("&")[0];
        const profileid = query.split("&")[1];
        var r = await RecallUser.find({
          phone: phone,
          profile_id: profileid,
        });
        console.log("*****");
        console.log(query);
        console.log(r);
        console.log("*****");
        return createResponse({});
      }
    );
    router.get("*", () => new Response("Not found", { status: 404 }));

    try {
      return router.handle(req);
    } catch (err) {
      console.log("error =====>");
      const msg = (err as Error).message || "Error with query.";
      return { message: msg };
    }
  },
};

// Export for discoverability
export default worker;
