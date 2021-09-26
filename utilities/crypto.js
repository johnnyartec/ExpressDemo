import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = randomBytes(16);

const encrypt = (text) => {
  const cipher = createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

const decrypt = (hash) => {
  const decipher = createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

export default {
  encrypt,
  decrypt,
};

/*
    const { encrypt, decrypt } = require('./crypto');
    const hash = encrypt('Hello World!');
    console.log(hash);
    const text = decrypt(hash);
    console.log(text); // Hello World!
 */
