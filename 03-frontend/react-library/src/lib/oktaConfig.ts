export const oktaConfig = {
    clientId: '0oana4qizsjXOkVIV5d7',
    issuer: 'https://dev-64694839.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true
}