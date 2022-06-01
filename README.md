## Installation & Usage

#### 1. Download/Clone this repo

```
git clone https://github.com/AtaiSamak/Messenger.git
```

#### 2. `cd` into the root directory and run `npm install`

```
cd .\Messenger\
npm install
```

Downloads a package and it's dependencies.

#### 3. Start in the development mode

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Custom firebase realtime database methods
 - [updateUserInDatabase(user)](#updateUserInDatabase)
 - [addFriend(friendPhoneNumber)](#addFriend)
 - [getChat(friendPhoneNumber, setChat)](#getChat)
 - [getChatID(friendPhoneNumber)](#getChatID)
 - [getFriends()](#getFriends)
 - [getUserFromDB(phoneNumber)](#getUserFromDB(phoneNumber))
 - [removeFriend(friendPhoneNumber)](#removeFriend)
 - [setChat(chatID, friendPhoneNumber)](#setChat)
 - [setMessage(chatID, message)](#setMessage)

#### `updateUserInDatabase`
Updates user data in realtime database along the path `users/${user.phoneNumber}/info`.<br>
Argument `user` - object from which we are retrieving `uid, phoneNumber, displayName, photoURL, metadata`.<br>
Return value: `undefined`<br>
Path `users/${user.phoneNumber}/info` contains: `uid, displayName, photoURL, lastSeen`

#### `addFriend`
Adds new friend in realtime database along the path `users/${phoneNumber}/friends/${friendPhoneNumber}`<br>
Argument `friendPhoneNumber` - phone number<br>
Return value: `undefined`<br>
Path `users/${phoneNumber}/friends/${friendPhoneNumber}` contains: `uid, phoneNumber, displayName, photoURL, lastSeen`<br>

#### `getChat`
Get data from `chats/${chatID}`<br>
Arguments `friendPhoneNumber` - phone number, `updateChat` - state updater<br>
Return value: `false` - if error or `true` if data is received <br>
Path `chats/${chatID}` contains: `{firstUser: phoneNumber, secondUser: phoneNumber, messages: []}`<br>

#### `getChatID`
Generate or get an id for a chat<br>
Argument `friendPhoneNumber` - phone number<br>
Return value: `String` - chat id<br>

#### `getFriends`
Gets friends from the database path `users/${phoneNumber}/friends`<br>
Not arguments<br>
Return value: `Array` - contains friends info<br> 

#### `getUserFromDB(phoneNumber)`
Gets user info from the database path `users/${phoneNumber}/info`<br>
Argument `phoneNumber` - phone number<br>
Return value: `Object` - user info<br>
Path `users/${phoneNumber}/info` contains: `displayName, lastSeen, photoURL, uid`<br>

#### `removeFriend`
Remove data from the database path `users/${phoneNumber}/friends/${friendPhone}`<br>
Argument `friendPhoneNumber` - phone number<br>
Return value: `undefined`<br>
Path `users/${phoneNumber}/friends/${friendPhoneNumber}` contains: `uid, phoneNumber, displayName, photoURL, lastSeen`<br>

#### `setChat`
Create new chat on the path `chats/${chatID}`<br>
Arguments `chatID` - [getChatID](#getChatID), `friendPhoneNumber` - phone number <br>
Return value: `undefined`<br>
Path `chats/${chatID}` contains: `{firstUser: phoneNumber, secondUser: phoneNumber, messages: []}`<br>

#### `setMessage`
Sets new message array on the path `chats/${chatID}/messages`<br>
Arguments `chatID` - [getChatID](#getChatID), `message` - messages array<br>
Return value: `undefined`<br>
Path `chats/${chatID}/messages` contains: array of message objects<br>



