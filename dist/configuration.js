"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.61.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = exports.PlaidEnvironments = void 0;
exports.PlaidEnvironments = {
    production: 'https://production.plaid.com',
    sandbox: 'https://sandbox.plaid.com',
    development: 'https://development.plaid.com',
};
class Configuration {
    constructor(param = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
        if (!this.baseOptions)
            this.baseOptions = {};
        if (!this.baseOptions.headers)
            this.baseOptions.headers = {};
        this.baseOptions.headers = Object.assign({ ['User-Agent']: `Plaid Node v9.10.0`, ['Plaid-Version']: '2020-09-14' }, this.baseOptions.headers);
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7R0FVRzs7O0FBa0JVLFFBQUEsaUJBQWlCLEdBQXFCO0lBQ2pELFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxXQUFXLEVBQUUsK0JBQStCO0NBQzdDLENBQUM7QUFFRixNQUFhLGFBQWE7SUFtRHRCLFlBQVksUUFBaUMsRUFBRTtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDNUMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sbUJBQ3RCLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEVBQ3BDLENBQUMsZUFBZSxDQUFDLEVBQUUsWUFBWSxJQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDNUIsQ0FBQTtJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxVQUFVLENBQUMsSUFBWTtRQUMxQixNQUFNLFFBQVEsR0FBVyxJQUFJLE1BQU0sQ0FBQywrREFBK0QsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRyxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Q0FDSjtBQW5GRCxzQ0FtRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGhlIFBsYWlkIEFQSVxuICogVGhlIFBsYWlkIFJFU1QgQVBJLiBQbGVhc2Ugc2VlIGh0dHBzOi8vcGxhaWQuY29tL2RvY3MvYXBpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDIwMjAtMDktMTRfMS42MS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgICBhcGlLZXk/OiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCAoKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKSB8ICgobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZz4pO1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHwgKChuYW1lPzogc3RyaW5nLCBzY29wZXM/OiBzdHJpbmdbXSkgPT4gc3RyaW5nKSB8ICgobmFtZT86IHN0cmluZywgc2NvcGVzPzogc3RyaW5nW10pID0+IFByb21pc2U8c3RyaW5nPik7XG4gICAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gICAgYmFzZU9wdGlvbnM/OiBhbnk7XG4gICAgZm9ybURhdGFDdG9yPzogbmV3ICgpID0+IGFueTtcbn1cblxuLy8gRWRpdGVkIGJ5IFBsYWlkLCBsaW5lcyAxNi0yNVxuaW50ZXJmYWNlIFBsYWlkRW52aXJvbm1lbnQge1xuICBbZW52OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQbGFpZEVudmlyb25tZW50czogUGxhaWRFbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb20nLFxuICBzYW5kYm94OiAnaHR0cHM6Ly9zYW5kYm94LnBsYWlkLmNvbScsXG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly9kZXZlbG9wbWVudC5wbGFpZC5jb20nLFxufTtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIHBhcmFtZXRlciBmb3IgYXBpS2V5IHNlY3VyaXR5XG4gICAgICogQHBhcmFtIG5hbWUgc2VjdXJpdHkgbmFtZVxuICAgICAqIEBtZW1iZXJvZiBDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHwgKChuYW1lOiBzdHJpbmcpID0+IHN0cmluZykgfCAoKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmc+KTtcbiAgICAvKipcbiAgICAgKiBwYXJhbWV0ZXIgZm9yIGJhc2ljIHNlY3VyaXR5XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogcGFyYW1ldGVyIGZvciBiYXNpYyBzZWN1cml0eVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHBhcmFtZXRlciBmb3Igb2F1dGgyIHNlY3VyaXR5XG4gICAgICogQHBhcmFtIG5hbWUgc2VjdXJpdHkgbmFtZVxuICAgICAqIEBwYXJhbSBzY29wZXMgb2F1dGgyIHNjb3BlXG4gICAgICogQG1lbWJlcm9mIENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8ICgobmFtZT86IHN0cmluZywgc2NvcGVzPzogc3RyaW5nW10pID0+IHN0cmluZykgfCAoKG5hbWU/OiBzdHJpbmcsIHNjb3Blcz86IHN0cmluZ1tdKSA9PiBQcm9taXNlPHN0cmluZz4pO1xuICAgIC8qKlxuICAgICAqIG92ZXJyaWRlIGJhc2UgcGF0aFxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGJhc2Ugb3B0aW9ucyBmb3IgYXhpb3MgY2FsbHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthbnl9XG4gICAgICogQG1lbWJlcm9mIENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBiYXNlT3B0aW9ucz86IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgRm9ybURhdGEgY29uc3RydWN0b3IgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGFcbiAgICAgKiByZXF1ZXN0cy4gWW91IGNhbiBpbmplY3QgdGhpcyBoZXJlIHNvIHRoYXQgZXhlY3V0aW9uIGVudmlyb25tZW50cyB0aGF0XG4gICAgICogZG8gbm90IHN1cHBvcnQgdGhlIEZvcm1EYXRhIGNsYXNzIGNhbiBzdGlsbCBydW4gdGhlIGdlbmVyYXRlZCBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bmV3ICgpID0+IEZvcm1EYXRhfVxuICAgICAqL1xuICAgIGZvcm1EYXRhQ3Rvcj86IG5ldyAoKSA9PiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbTogQ29uZmlndXJhdGlvblBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICB0aGlzLmFwaUtleSA9IHBhcmFtLmFwaUtleTtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHBhcmFtLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFyYW0ucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBwYXJhbS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IHBhcmFtLmJhc2VQYXRoO1xuICAgICAgICB0aGlzLmJhc2VPcHRpb25zID0gcGFyYW0uYmFzZU9wdGlvbnM7XG4gICAgICAgIHRoaXMuZm9ybURhdGFDdG9yID0gcGFyYW0uZm9ybURhdGFDdG9yO1xuXG4gICAgICAgIGlmKCF0aGlzLmJhc2VPcHRpb25zKSB0aGlzLmJhc2VPcHRpb25zID0ge307XG4gICAgICAgIGlmKCF0aGlzLmJhc2VPcHRpb25zLmhlYWRlcnMpIHRoaXMuYmFzZU9wdGlvbnMuaGVhZGVycyA9IHt9O1xuICAgICAgICB0aGlzLmJhc2VPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgWydVc2VyLUFnZW50J106IGBQbGFpZCBOb2RlIHY5LjEwLjBgLFxuICAgICAgICAgIFsnUGxhaWQtVmVyc2lvbiddOiAnMjAyMC0wOS0xNCcsXG4gICAgICAgICAgLi4udGhpcy5iYXNlT3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIE1JTUUgaXMgYSBKU09OIE1JTUUuXG4gICAgICogSlNPTiBNSU1FIGV4YW1wbGVzOlxuICAgICAqICAgYXBwbGljYXRpb24vanNvblxuICAgICAqICAgYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEY4XG4gICAgICogICBBUFBMSUNBVElPTi9KU09OXG4gICAgICogICBhcHBsaWNhdGlvbi92bmQuY29tcGFueStqc29uXG4gICAgICogQHBhcmFtIG1pbWUgLSBNSU1FIChNdWx0aXB1cnBvc2UgSW50ZXJuZXQgTWFpbCBFeHRlbnNpb25zKVxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBKU09OLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHVibGljIGlzSnNvbk1pbWUobWltZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGpzb25NaW1lOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKGFwcGxpY2F0aW9uXFwvanNvbnxbXjsvIFxcdF0rXFwvW147LyBcXHRdK1srXWpzb24pWyBcXHRdKig7LiopPyQnLCAnaScpO1xuICAgICAgICByZXR1cm4gbWltZSAhPT0gbnVsbCAmJiAoanNvbk1pbWUudGVzdChtaW1lKSB8fCBtaW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nKTtcbiAgICB9XG59XG4iXX0=