export function getBaseURL() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080';
  } else {
    return 'https://ericsportfolio.site';
  }
}
