/**
 * TODO this should be converted to require promises
 */
export interface ITokenService {
    //render(token: string): Promise<string>;
   //hasToken(aString:string): boolean;
    render(token: string): string;
    hasToken(aString:string): boolean;
}