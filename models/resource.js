var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function Resource() {
  Model.apply(this, arguments);
}

Model.extend(Resource);
module.exports = Resource;

// Table name is the only required property.
Resource.tableName = 'ResourceList';
Resource.idColumn = 'LDAP';

Resource.jsonSchema = {
  "type": "object",
  "properties": {
    "LDAP": {
      "type": "string",
      "maxLength": 8
    },
    "Fname": {
      "type": "string",
      "maxLength": 30
    },
    "Mname": {
      "type": "string",
      "maxLength": 15
    },
    "Lname": {
      "type": "string",
      "maxLength": 30
    },
    "ResourceType": {
      "type": "string",
      "maxLength": 16
    },
    "IndividualRate": {
      "type": "string",
      "maxLength": 80
    },
    "StartDate": {
      "type": "date"
    },
    "EndDate": {
      "type": "date"
    },
    "ResourceManagerLDAP": {
      "type": "string",
      "maxLength": 8
    },
    "DocType": {
      "type": "string",
      "maxLength": 3
    },
    "Dept": {
      "type": "integer",
      "maxLength": 3
    },
    "Location": {
      "type": "string",
      "maxLength": 4
    },
    "Vendor": {
      "type": "string",
      "maxLength": 14
    },
    "ProjectSkill": {
      "type": "string",
      "maxLength": 40
    },
    "FMSRole": {
      "type": "string",
      "maxLength": 20
    },
    "Team": {
      "type": "string",
      "maxLength": 27
    },
    "Subteam": {
      "type": "string",
      "maxLength": 27
    },
    "Comments": {
      "type": "string",
      "maxLength": 100
    },
    "VenSkill": {
      "type": "string",
      "maxLength": 16
    },
    "VenRanch": {
      "type": "string",
      "maxLength": 9
    },
    "VenExp": {
      "type": "string",
      "maxLength": 15
    },
    "VenOnOff": {
      "type": "string",
      "maxLength": 10
    },
    "THDCntr": {
      "type": "string",
      "maxLength": 5
    },
    "DirectorLDAP": {
      "type": "string",
      "maxLength": 8
    }
  },
  "required": [
    "LDAP",
    "Fname",
    "Lname",
    "ResourceType",
    "ResourceManagerLDAP",
    "Dept",
    "Location",
    "Team",
    "THDCntr"
  ],
};






/*
// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
Person.jsonSchema = {
  type: 'object',
  required: ['firstName', 'lastName'],

  properties: {
    id: {type: 'integer'},
    parentId: {type: ['integer', 'null']},
    firstName: {type: 'string', minLength: 1, maxLength: 255},
    lastName: {type: 'string', minLength: 1, maxLength: 255},
    age: {type: 'number'},

    address: {
      type: 'object',
      properties: {
        street: {type: 'string'},
        city: {type: 'string'},
        zipCode: {type: 'string'}
      }
    }
  }
};

// This object defines the relations to other models.
Person.relationMappings = {
  pets: {
    relation: Model.OneToManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one. We use the file path version
    // here to prevent require loops.
    modelClass: __dirname + '/Animal',
    join: {
      from: 'Person.id',
      to: 'Animal.ownerId'
    }
  },

  movies: {
    relation: Model.ManyToManyRelation,
    modelClass: __dirname + '/Movie',
    join: {
      from: 'Person.id',
      // ManyToMany relation needs the `through` object to describe the join table.
      through: {
        from: 'Person_Movie.personId',
        to: 'Person_Movie.movieId'
      },
      to: 'Movie.id'
    }
  },

  children: {
    relation: Model.OneToManyRelation,
    modelClass: Person,
    join: {
      from: 'Person.id',
      to: 'Person.parentId'
    }
  }
};
*/