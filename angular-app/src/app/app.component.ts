import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAuthConfiguration } from './api-auth-configuration';

@Component({
  selector: 'sca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authInfo: ApiAuthConfiguration;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // populate authInfo from backend call
    this.getAuthInfo().then(r => {
      this.authInfo = r;
    });
  }

  // Call to backend API (in a real app you would move this to a separate service class)
  getAuthInfo() {
    // the API endpoint Url is configured in the 'platform-script' project:
    // 1. '/myapp' is the Url prefix configured for Traefik reverse proxy in the AppApiService.config.json file of the 
    // 2. '/api' is the Api Url prefix reserved in the "FilesConfig" parameter
    //     (see ..\platform-script\src\appConfig\ApiServices\AppApiService.config.json)
    // 3. '/auth' is the part of the url hardcoded in the API job code file AppApiService.job.js
    //     (see ..\platform-script\src\appConfig\ApiServices\AppApiService.job.js)
    const apiUrl = '/myapp/api/auth';

    return this.http.get<ApiAuthConfiguration>(apiUrl).toPromise();
  }
}
