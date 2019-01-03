// This is the API job
// Responds only to '/myapp/api/auth' url.
// Here the prefix '/myapp' will be stripped out by the Traefik reverse proxy
// (see the AppApiService.config.json configuration file)

if (_SupercondActor_Request.url === '/api/auth') {

    let authInfo = await MyEntryPoints.getAuthInfoAsync();
    console.log('Auth info from API service', authInfo);
    return authInfo;
}
else {
    _SupercondActor_Response.statusCode = 404;
    return `Endpoint '${_SupercondActor_Request.url}' not found.`;   
}
