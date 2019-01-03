// Entry points should be listed here. Otherwise that code branch will not be compiled into the JavaScript bundle.
// (though you are free to use any other method to come up with the JavaScript bundle to be put into the Code Package for deployment)

export class MyEntryPointsDefinition {
    getAuthInfoAsync() {
        // reading auth parameters from the Service Fabric Business Platform backend
        return _SupercondActor.Config.getApiAuthConfigurationAsync();
    };
}

(global as any).MyEntryPoints = new MyEntryPointsDefinition();
