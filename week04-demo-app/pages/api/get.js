// one core node package-filesystem package/module
import fs from 'fs';
// second core node package is path
// two local variable fs and path loaded with objects 'fs' 'path'
import path from 'path';

//use path to build a filepath to ourdata subdirectory
//dot notation path. to access the path object vale in the variable path, called join
//first, root path by accessing process.cwd method is running the entire absolute path ofthe repl. server
//string on "data"
const dataDir= path.join( process.cwd (), "data");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const filepath = path.join (dataDir, "persons.json" );

  const jsondata = fs.readFileSync(filepath, "utf8");

  const jsonObj = JSON.parse (jsondata);

  jsonObj.sort(
    function(a,b){
      return a.name.localeCompare(b.name);

    }
  );

  res.status(200).json(jsonObj);
}
