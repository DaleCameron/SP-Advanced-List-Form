import { should } from "chai";
import { ITokenService } from "./ITokenService";
import { SimpleTokenServcie } from "./SimpleTokenService";

const tokenService: ITokenService = new SimpleTokenServcie({hello: "hello"});

tokenService.hasToken('hello').should.be.true;