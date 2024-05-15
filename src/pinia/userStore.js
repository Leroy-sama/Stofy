import { app, db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";

export const useUserStore = defineStore("useStore", {
    state: () => ({
        user: null,
        profileEmail: null,
        profileFirstname: null,
        profileLastname: null,
        profileId: null,
        profileInitials: null,
    }),
    actions: {
        async getCurrentUser() {
            const auth = getAuth(app);
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                this.profileEmail = userData.email;
                this.profileFirstname = userData.firstname;
                this.profileLastname = userData.lastname;
                this.profileId = userDocSnapshot.id;
                this.setProfileInitials();
                console.log(userData);
            }
        },
        updateUser(user) {
            this.user = user;
        },
        setProfileInitials() {
            if (this.profileFirstname && this.profileLastname) {
                this.profileInitials =
                    this.profileFirstname.match(/(\b\S)?/g).join("") +
                    this.profileLastname.match(/(\b\S)?/g).join("");
            }
        },
        async updatedUserSettings() {
            const userDocRef = doc(db, "users", this.profileId);
            await updateDoc(userDocRef, proflieUpdates);
            if (proflieUpdates.firstname || proflieUpdates.lastname) {
                this.setProfileInitials();
            }
        },
    },
});
