export function getBaseURL() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080';
  } else {
    return 'https://ericsportfolio.site';
  }
}

export function formatDate(utcDate) {
  if (utcDate) {
    let formattedDate = new Date(utcDate);
    console.log('formatted date: ' + formattedDate);
    return formattedDate.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  return null;
}

export function titleCase(string) {
  let sentence = string.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(' ');
}
