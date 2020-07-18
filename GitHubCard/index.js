import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const cards = document.querySelector('.cards')

const cardCreator = (user) =>{

  const card =document.createElement('div')
  const userImg =document.createElement('img')
  const userInfo = document.createElement('div')
  const userH3  =document.createElement('h3')
  const userName =document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const userGit = document.createElement('a')
  const followers = document.createElement('p')
  const following =document.createElement('p')
  const bio = document.createElement('p')

  card.className ='card'
  userInfo.className = 'card-info'
  userH3.className = 'name'
  userName.className ='username'


 

  userImg.setAttribute('src', user.avatar_url)
  userH3.textcontent = user.name
  userName.textContent = user.login
  userLocation.textContent = `Location: ${user.userLocation}`
  userProfile.textContent = `Profile:`
  userGit.textContent = user.html_url
  userGit.setAttribute('href', user.html_url)
  followers.textContent =`Followers: ${user.followers_url}`
  following.textContent =`Following: ${user.following_url}`
  bio.textContent =`Bio: ${user.bio}`
  
  card.appendChild(userImg)
  card.appendChild(userInfo)
  userInfo.appendChild(userH3)
  userInfo.appendChild(userName)
  userInfo.appendChild(userLocation)
  userInfo.appendChild(userProfile)
  userProfile.appendChild(userGit)
  userInfo.appendChild(followers)
  userInfo.appendChild(following)
  userInfo.appendChild(bio)

  return card

 }
 const userApi =`https://api.github.com/users/zzeroyzz`
 axios.get(userApi)
 
 .then((response) =>{
  const profileData = response.data
  cards.appendChild(cardCreator(profileData))
})
.catch((errorResponse) => {
 console.log('error!', errorResponse)
})
  // .then((response) => {
  //   console.log(response.data)
  //   response.data.forEach(follower =>{
  //     card.appendChild(cardCreator(follower))
  //   })
  //   axios.get(`https://api.github.com/users/${follower.login}`)
  //   .then((res) => {
  //       cards.appendChild(cardCreator(response.data))
  //   })
  // })
 
  const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

  followersArray.forEach(profile =>{
    axios.get(`https://api.github.com/users/${profile}`)
    .then((response) =>{
      const profileData =response.data
      cards.appendChild(cardCreator(profileData))
    })
    .catch((error) =>{
      console.log('error',error)
    })
  })
