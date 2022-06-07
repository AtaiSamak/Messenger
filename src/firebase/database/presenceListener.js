import {
    onDisconnect,
    onValue,
    push,
    ref,
    serverTimestamp,
    set,
} from "firebase/database";
import { auth, database } from "../initApp";

const presenceListener = () => {
    if (!auth.currentUser) return;
    const { phoneNumber: phone } = auth.currentUser;

    const connectionRef = ref(database, `users/${phone}/info/connections`);
    const lastSeenRef = ref(database, `users/${phone}/info/lastSeen`);
    const connectedRef = ref(database, ".info/connected");

    onValue(connectedRef, (snapshot) => {
        if (snapshot.val() === true) {
            const device = push(connectionRef);
            onDisconnect(device).remove();

            set(device, true);
            onDisconnect(lastSeenRef).set(serverTimestamp());
        }
    });
};

export default presenceListener;
