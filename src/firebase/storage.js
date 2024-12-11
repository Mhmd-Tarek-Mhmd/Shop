import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import app from "./app";

const storage = getStorage(app);

const getAvatarRef = (id) => ref(storage, "avatars/" + id);

export const uploadAvatar = (uid, file) => uploadBytes(getAvatarRef(uid), file);

export const getAvatarURL = (uid) => getDownloadURL(getAvatarRef(uid));
