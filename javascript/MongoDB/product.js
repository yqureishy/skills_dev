// clear terminal
cls

// Ctrl + L or Cmd + L -> clear terminal

// check which database your in
db

// switch or create a database
//use my_db

// in order to create a dabase, the database has to have at least one document

// check collections in database
//show collections

// insert a single document into a collection
// db.{name of collection}.insertOne( { --document-- } );
db.test.insertOne({ "value": "First Document" });

// find() -> return the documents in a collection
db.test.find()

// pretty() -> nicely formats the documents you select
db.test.find().pretty();

// insert another bigger document
db.test.insertOne({
    "color": "blue",
    "number": 5,
    "list": [
        "one",
        "two",
        "three"
    ]
});

db.test.find().pretty();

// insert data in whatever format you want
db.test.insertOne({ "value": true });

db.test.find().pretty();

// insert() -> old way to insert documents (still supported)
db.test.insert({ "value": 1 });

db.test.insert([
    { "value": 2 },
    { "value": 3 }
]);

db.test.find().pretty();

// create products collection
db.products.insertMany([
    {
        "item": "chair",
        "qty": 6,
        "price": 20.49,
        "brand": "IKEA"
    },
    {
        "item": "table",
        "qty": 16,
        "price": 67.99
    },
    {
        "item": "book",
        "qty": 2,
        "price": 15.99
    },
    {
        "item": "lamp",
        "qty": 6,
        "price": 30.89,
        "warehouse": "Dallas"
    },
    {
        "item": "shirt",
        "qty": 12,
        "price": 5.99,
        "colors": [
            "red", "blue", "black"
        ]
    }
]);

db.products.find().pretty();


// update() -> old way of performing an update
// updateOne(), updateMany() -> new way of doing update

// updateOne(arg1, arg2)
// arg1 -> which document is being updated
// arg2 -> what info is updating

// $set -> what values you're changing
db.products.updateOne(
    {
        "item": "book"
    },
    {
        $set: { "qty": 10 }
    }
);
db.products.find().pretty();


db.products.updateOne(
    {
        "_id": ObjectId("615b294ea827913b498e06eb")
    },
    {
        $set: { "qty": 12 }
    }
);
db.products.find().pretty();

// currntly two documents with a qty of 6, so will only update one document,
// the first one it finds
db.products.updateOne(
    {
        "qty": 6
    },
    {
        $set: { "price": 100 }
    }
);
db.products.find().pretty();

// update every document with qty of 6
db.products.updateMany(
    {
        "qty": 6
    },
    {
        $set: { "price": 99 }
    }
);
db.products.find().pretty();


// insert more products
db.products.insertMany([
    {
        "item": "bookcase",
        "qty": 100,
        "brand": "IKEA",
        "price": 89.99
    },
    {
        "item": 'dresser',
        qty: 100,
        "brand": "IKEA",
        "price": 110
    },
    {
        "item": "computer",
        "qty": 12,
        "brand": "Apple",
        "price": 1500
    }
]);

// update every document that has IKEA as their brand
db.products.updateMany(
    { "brand": "IKEA" },
    {
        $set: {
            "price": 50,
            "qty": 50
        }
    }
);
// find all documents with brand = IKEA
db.products.find({ "brand": "IKEA" }).pretty();

// leave first argument as an empty object, update every document
db.products.updateMany(
    {},
    {
        $set: {
            "qty": 5
        }
    }
);
db.products.find().pretty();

// find(arg1, arg2)
// arg1 -> filter, what are you looking for?
// arg2 -> what fields you want returned with each document, by default _id
//         will always be returned unless specified
db.products.find(
    { "brand": "IKEA" },
    { "item": 1, "_id": 0 }
).pretty();

// this will return _id b/c its not turned off automatically
db.products.find(
    { "brand": "IKEA" },
    { "item": 1 }
).pretty();


db.products.find({ "item": "shirt" }).pretty();

// update the colors array, and replace the value at the first index
db.products.updateOne(
    { "item": "shirt" },
    {
        $set: {
            "colors.0": "yellow"
        }
    }
);
db.products.find({ "item": "shirt" }).pretty();

// can update to create new field that wasn't there before
db.products.updateOne(
    { "item": "shirt" },
    {
        $set: {
            "material": {
                "cotton": "80%",
                "nylon": "20%"
            }
        }
    }
);
db.products.find({ "item": "shirt" }).pretty();

// can update specific fields within embedded documents like this
db.products.updateOne(
    { "item": "shirt" },
    {
        $set: {
            "material.cotton": "75%"
        }
    }
);
db.products.find({ "item": "shirt" }).pretty();

// update so more products have different qtys
db.products.updateMany(
    { "brand": "IKEA" },
    { $set: { "qty": 20 } }
);

db.products.updateMany(
    { "item": "shirt" },
    { $set: { "qty": 30 } }
);

// find products with qty = 5 and price > 50
db.products.find(
    {
        $and: [
            { "qty": 5 },
            { "price": { $gt: 50 } }
        ]
    }
).pretty();

// find products with price >= 50
db.products.find(
    { "price": { $gte: 50 } }
).pretty();

// qty != 5, only show item + qty
db.products.find(
    { "qty": { $ne: 5 } },
    { "_id": 0, "item": 1, "qty": 1 }
).pretty();

// insert another product with a colors array
db.products.insertOne(
    {
        "item": "hat",
        "qty": 39,
        "price": 11.99,
        "colors": ["yellow", "red", "green"]
    }
);

// $exists -> checks if a field exists
db.products.find(
    { "colors": { $exists: true } }
).pretty();

// match if yellow is a color in the document
db.products.find(
    { "colors": { $in: ["yellow"] } }
).pretty();

// match documents that have black
db.products.find(
    { "colors": { $in: ["black"] } }
).pretty();


// look for a match against a list of values
db.products.find(
    { "qty": { $in: [5, 30] } }
).pretty();

// $in -> matches values in an array
// $nin -> doesn't match values in an array


// count() -> counts the # of results
db.products.find().count();

// count products with qty = 5
db.products.find({ "qty": 5 }).count();

// skip(n) -> skip first n document
db.products.find({ "qty": 5 }).skip(1).pretty();

// sort() -> sort documents by ascending or descending order
//           desc -> -1  |  asc -> 1

// highest to lowest
db.products.find().sort({ "qty": -1 }).pretty();
// lowest to highest
db.products.find().sort({ "qty": 1 }).pretty();

db.products.find().sort({ "item": 1 }).pretty(); // A-Z

db.products.find().sort(
    { "qty": -1, "price": -1 }
).pretty();


// remove() -> old way
// deleteOne(), deleteMany() -> new way

// delete a single document
db.products.deleteOne({ "item": "book" });
db.products.find().pretty();

db.products.deleteMany(
    { "price": { $lt: 30 } }
);
db.products.find().pretty();

// insert a book
db.products.insertOne({ "item": "book" });

// find items that have word book in it
db.products.find(
    {
        "item": {
            $regex: "book"
        }
    }
).pretty();

// items that end in an "r"
db.products.find(
    {
        "item": {
            $regex: "^.*r$"
        }
    }
).pretty();




db.employees.insertOne({
    "Employee_Id": 1,
    "Name": "John Doe",
    "JobTitle": "Manager",
    "Office": "Accounting",
    "Salary": 100000
})

db.employees.insertMany([
    {
        "Employee_Id": 2,
        "Name": "Mary Doe",
        "JobTitle": "Consultant",
        "Office": "Finance",
        "Salary": 120000
    },
    {
        "Employee_Id": 3,
        "Name": "Younus Qureishy",
        "JobTitle": "Engineer",
        "Office": "Data",
        "Salary": 80000
    },
    {
        "Employee_Id": 4,
        "Name": "Manal Qureishy",
        "JobTitle": "Manager",
        "Office": "Marketing",
        "Salary": 95000
    },
    {
        "Employee_Id": 5,
        "Name": "Suleman Qureishy",
        "JobTitle": "HR Manager",
        "Office": "HR",
        "Salary": 105000
    }]
)






db.locations.insertOne({
    "Location_Id": 1,
    "LocationCity": "San Francisco",
    "LocationCountry": "USA",
})

db.locations.insertMany([
    {
        "Location_Id": 2,
        "LocationCity": "New York",
        "LocationCountry": "USA",

    },
    {
        "Location_Id": 3,
        "LocationCity": "Houston",
        "LocationCountry": "USA",

    },
    {
        "Location_Id": 4,
        "LocationCity": "Denver",
        "LocationCountry": "USA",
    },
    {
        "Location_Id": 5,
        "LocationCity": "Austin",
        "LocationCountry": "USA",
    }]
)

db.employees.find()

db.locations.updateOne(
    { "LocationCity": "San Francisco" },

    {
        $set: {
            "LocationCity": "Dallas"
        }
    }
)

db.locations.updateMany(
    { "LocationCountry": "USA" },
    {
        $set: { "LocationCountry": "United States of America" }
    }

)

db.employees.find().sort({ "Salary": -1 })

db.employees.find().sort({ "Salary": -1 }).limit(3)

db.products.drop();

db.employees.find({ JobTitle: "Manager" }).count()