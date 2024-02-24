// const eventDataSet = [
//   ...generateEvents('Music', 20),
//   ...generateEvents('Art', 20),
//   ...generateEvents('Sport', 20),
// ];
// export default eventDataSet;

// function generateEvents(category, count) {
//   const events = [];

//   for (let i = 1; i <= count; i++) {
//     const event = {
//       id: i,
//       title: generateTitle(category, i),
//       date: getRandomDate(),
//       time: getRandomTime(),
//       city: getRandomCity(),
//       location: `Event Location ${i}, ${getRandomCity()}`,
//       category: category,
//       imageUrl: generateImageUrl(category),
//       shortInformation: generateShortInfo(category),
//       studentTicketPrice: getRandomPrice(),
//       adultTicketPrice: getRandomPrice(),
//     };

//     events.push(event);
//   }

//   return events;
// }

// function generateTitle(category, index) {
//   const titles = {
//     Music: ['Concert', 'Festival', 'Live Performance', 'Music Showcase'],
//     Art: ['Exhibition', 'Art Fair', 'Gallery Opening', 'Art Workshop'],
//     Sport: ['Football Match', 'Basketball Game', 'Running Marathon', 'Tennis Tournament'],
//   };

//   const categoryTitles = titles[category];
//   const randomTitle = categoryTitles[Math.floor(Math.random() * categoryTitles.length)];

//   return `${randomTitle} ${index}`;
// }

// function generateImageUrl(category) {
//   const imageUrls = {
//     Music: 'https://source.unsplash.com/300x200/?music',
//     Art: 'https://source.unsplash.com/300x200/?art',
//     Sport: 'https://source.unsplash.com/300x200/?sport',
//   };

//   return imageUrls[category];
// }

// function generateShortInfo(category) {
//   const shortInfos = {
//     Music: 'Enjoy a night of live music with top artists in the industry.',
//     Art: 'Explore the world of contemporary art through various exhibitions and workshops.',
//     Sport: 'Witness thrilling sports events with top athletes competing for victory.',
//   };

//   return shortInfos[category];
// }

// function getRandomDate() {
//   const today = new Date();
//   const randomDays = Math.floor(Math.random() * 30); // Random date within the next 30 days
//   const eventDate = new Date(today.setDate(today.getDate() + randomDays));
//   return eventDate.toISOString().split('T')[0];
// }

// function getRandomTime() {
//   const hours = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
//   const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
//   const period = Math.random() < 0.5 ? 'AM' : 'PM';
//   return `${hours}:${minutes} ${period}`;
// }

// function getRandomCity() {
//   const cities = ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa', 'Adana', 'Trabzon', 'Eskisehir'];
//   return cities[Math.floor(Math.random() * cities.length)];
// }

// function getRandomPrice() {
//   return Math.floor(Math.random() * 50) + 30; // Random price between 30 and 80
// }

