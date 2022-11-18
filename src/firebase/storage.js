import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const getAvatarRef = (uid) => ref(storage, `users/${uid}/avatar.jpg`);

export const uploadAvatar = (uid, file) => uploadBytes(getAvatarRef(uid), file);

export const getAvatarURL = (uid) => getDownloadURL(getAvatarRef(uid));
