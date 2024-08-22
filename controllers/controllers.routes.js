const { ObjectId } = require("mongodb");
const { db } = require("../utils/dbconnect");
const getImageData = require("../utils/generateData");
const getImageUrl = require("../utils/getImageUrl");

const paintingsCollection = db.collection("paintings")
const testRoute = (req, res) => {
  res.send("painting hitted");
};

const generateAllPaintings = async (req,res) =>{
  const result = await paintingsCollection.find().toArray();
  res.json(result)
};
const generatePaint = async (req, res) => {
  const { body } = req || {};
  const { prompt ,email, category, type } = body || {};
  const promptFinal = `generate a beautiful ${type} ${category} painting about ${prompt}`
  const buffer = await getImageData(promptFinal);
  const imageData = await getImageUrl(buffer, prompt);
  const data = {
    title: imageData?.data.title,
    prompt: prompt,
    email,
    category,
    type,
    thumb: imageData?.data?.thumb?.url,
    url: imageData?.data?.url,
    medium_url: imageData?.data?.medium?.url,
    detail : prompt ,
    date : new Date()
  };
  const result = await paintingsCollection.insertOne(data)
  res.send(result);
};
const singleImageDetails = async(req,res)=>{
  const {id} = req.params;
  const query = {_id : new ObjectId(id)}
  const result = await paintingsCollection.findOne(query)
  res.send(result)
}
module.exports = { generatePaint , singleImageDetails ,generateAllPaintings };
