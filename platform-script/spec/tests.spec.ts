/// <reference path="../SupercondActorTypes.d.ts" />

// When running in the Service Fabric Business Platform
// the global _SupercondActor instance will be provided by the environment.
// For testing we need a mock.
import { _SupercondActorMock } from "./support/SupercondActorMock";
(global as any)._SupercondActor = new _SupercondActorMock();

// entry points class definition from the index.ts file
import { MyEntryPointsDefinition } from "../src/index";

// Here is our code entry points
require('../src/index.ts');
//  Instead of testing source code we can test the final bundle
//  to make sure we have everything we need in it
//  (comment the require statement above and uncomment below,
//   run 'npm run build' then 'npm test'):
// require('../dist/Scripts/bundle.js')

describe("MyService", () => {
    it("should be able to get text", async () => {
        let entry: MyEntryPointsDefinition = (global as any).MyEntryPoints;
        let auth = await entry.getAuthInfoAsync();
        expect(auth.clientID).toBe('clientid');
        expect(auth.tenantID).toBe('tenantid');
    });
});