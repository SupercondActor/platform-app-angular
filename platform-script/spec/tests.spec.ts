/// <reference path="../SupercondActorTypes.d.ts" />

// When running in the SupercondActor Business Platform
// the global _SupercondActor instance will be provided by the environment.
// For testing we need a mock.
import { _SupercondActorMock } from "./support/SupercondActorMock";
(global as any)._SupercondActor = new _SupercondActorMock();

describe("MyService", () => {
    it("should be able to get text", async () => {
        let auth = await (global as any)._SupercondActor.Config.getApiAuthConfigurationAsync();
        expect(auth.clientID).toBe('clientID-12345');
        expect(auth.tenantID).toBe('tenantID-12345');
    });
});