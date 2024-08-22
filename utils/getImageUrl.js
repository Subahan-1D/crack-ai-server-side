const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API_KEY}`;
const getImageUrl = async(buffer,prompt) =>{
    console.log(image_hosting_api)
    const imageFromData = new FormData();
    imageFromData.append(
        "image" , 
        new Blob([buffer],{type : "image/jpeg"}),`${prompt}.jpg`
    );
    const response = await fetch ( image_hosting_api,{
        method:"POST",
        body:imageFromData,
    });
    const imgData = response.json();
    return imgData ;
};
module.exports = getImageUrl;