## Quick Note

- 加密方式有分成幾種: 對稱加密, 非對稱加密, Hash function

- 透過對稱加密的方法包括: DES, AES...etc

- 透過非對稱加密的方法包括: RSA...etc

- 透過Hash Function的加密方法包括: MD5, SHA, bcrypt, PBKDF2...etc

- bcrypt: 花時間比較的Hash Function

> Salt:  固定的字串加在原本的密碼之間, 增加解密困難度

## Demo

- Used WireShark to catch packet! Get the account + password!

- Detect the http vs. https difference

### Reference

- [sjcl: Stanford Javascript Crypto Library](https://github.com/bitwiseshiftleft/sjcl)

- [Your Node.js authentication tutorial is (probably) wrong@micaksica](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)

- [Salted Password Hashing - Doing it Right@DefuseSec](https://crackstation.net/hashing-security.htm)

- [hackathon-starter@sahat](https://github.com/sahat/hackathon-starter)

- [satellizer@sahat](https://github.com/sahat/satellizer/)

- [node.bcrypt.js@kelektiv](https://github.com/kelektiv/node.bcrypt.js)

- [passport@jaredhanson](https://github.com/jaredhanson/passport)

- [good-old-react-authentication-flow@strapi](https://github.com/strapi/strapi-examples/tree/master/good-old-react-authentication-flow)

- [openpgpjs@openpgpjs](https://github.com/openpgpjs/openpgpjs)

- [node-js-nginx-https-cloudflare-server-setup-google-app-domain@adrianhsu](https://medium.com/@adrianhsu/node-js-nginx-https-cloudflare-server-setup-google-app-domain-8020eb0e4181)

- [nodejs 2fa](https://github.com/Bradleykingz/nodejs-2fa)
