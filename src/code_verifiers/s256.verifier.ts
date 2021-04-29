import crypto from "crypto";

import { base64urlencode } from "../utils/base64";
import { ICodeChallenge } from "./verifier";

export class S256Verifier implements ICodeChallenge {
  public readonly method = "S256";

  verifyCodeChallenge(codeVerifier: string, codeChallenge: string, useUrlEncode: boolean): boolean {
    const codeHash = crypto.createHash("sha256").update(codeVerifier);
    const resultCode = useUrlEncode ? base64urlencode(codeHash.digest("hex")) : base64urlencode(codeHash.digest());
    return codeChallenge === resultCode;
  }
}
