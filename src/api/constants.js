export const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNTYxNDQ4OTQ5LCJleHAiOjE1NjIzMTI5NDl9.4-AyQ-4d93N2YhDmodiZf5W_5V_YymeBLD_feQnBV2XNsbuKzJRwtezQMWClMt0UWLTzPzHVY5UDg8cYyxMFvg';
export const API_BASE_URL = 'https://agh.codetype.pl:5000/api';

export const OAUTH2_REDIRECT_URI = 'https://agh.codetype.pl:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;