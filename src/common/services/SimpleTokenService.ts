//SimpleTokenServcies uses the object passed during construction as it's store of values
import { ITokenService } from "./ITokenService";
import { render } from "mustache";

export class SimpleTokenServcie implements ITokenService {

    private valueStore;
    private tokenMatchRegex = /{{\.|\w+}}/;
    constructor(valueStore:any){
        this.valueStore = valueStore || {};
    }
    public render(template: string): string {
        // const valueStore = this.valueStore;
        //  return  new Promise<string>((resolve, reject)=>{
        //      resolve(render(template,valueStore ));
        //  });
        return render(template, this.valueStore)
    }
    public hasToken(aString: string): boolean {
        return this.tokenMatchRegex.test(aString);
    }
}