import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join(process.cwd(), 'data');

//function retunds ids or all json objects in array
export function getAllIds(){
  // get filepath to json file
  const filePath = path.join(dataDir,'persons.json');
  //load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // use map () on array to extract just id porperties into new array of obj values
  return jsonObj.map(item =>{
    return {
      params: {
        id: item.id.toString()
      }
    }
  });


}

//function returns names and ids for all json objects in array, sorted by name property
export function getSortedList(){
// get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // sort json array by name property
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

//async function to get teh complet data for just one person
// used by getStaticProps() in [id].js 
export async function getData(idRequest){
  
  // get filepath to json file
  const filePath = path.join(dataDir,'persons.json');
  //load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  //find the object value in the array that has matching id, returnd an array with ONE element
  const objMatch = jsonObj.filter( obj=> {
    return obj.id.toString() === idRequest;
  }
  );
//extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  }else{
    objReturned = {};
}
  return objReturned;
}