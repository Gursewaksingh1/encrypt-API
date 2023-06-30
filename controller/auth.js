const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = "12345678901234567890123456789012";
const iv = "1111111111111111";
function encrypt(text) {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}
function decryptData(encryptedData) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    iv
  );
  let decrypted = decipher.update(encryptedData.encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
exports.test = async (req, res, next) => {
    let { data }  =req.body;
    try {
        var output = encrypt(data);

        res.status(200).send({
            status:"success",
            statusCode:200,
            message:"encrypted data success",
            data:[{output}]
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status:"failed",
            statusCode:400,
            message:err.message,
            data:[]
        })
    }

}
exports.decrypt = async(req, res, next) =>{
    let { data }  =req.body;
    try {
        var output = decryptData(data);

        res.status(200).send({
            status:"success",
            statusCode:200,
            message:"decryptData data success",
            data:[{output}]
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status:"failed",
            statusCode:400,
            message:err.message,
            data:[]
        })
    }
}
