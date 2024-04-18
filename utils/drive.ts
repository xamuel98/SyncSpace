/* eslint-disable import/no-anonymous-default-export */
import SecureLS from "secure-ls";

let ls: SecureLS;

const initializeSecureLS = () => {
    ls = new SecureLS({
        encodingType: 'aes',
        encryptionSecret: process.env.NEXT_PUBLIC_SECURELS_SECRET,
    });
};

if (global?.localStorage && typeof window !== "undefined") initializeSecureLS();

export default {
    set(key: string, value: any) {
        ls.set(key, JSON.stringify(value));
    },

    get(key: string) {
        try {
            return JSON.parse(ls.get(key));
        } catch (e) {
            console.error(`Error parsing data for key ${key}:`, e);
            return null;
        }
    },

    remove(key: string) {
        ls.remove(key);
    },

    removeAll() {
        ls.removeAll();
    },

    clear() {
        ls.clear();
    }
};