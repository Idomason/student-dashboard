// let date = new Date().toUTCString().slice(5, 16);

export default function TodayDate() {
  const date = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleString('en-IN', options);
}
