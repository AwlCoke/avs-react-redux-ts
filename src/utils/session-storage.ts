const checkSessionStorageExists = () => {
    const testKey = 'test';
    try {
        sessionStorage.setItem('testKey', testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
};

export const load = (key: string) => {
    try {
        const searchId = sessionStorage.getItem(key);
        if (!searchId && checkSessionStorageExists()) {
            return undefined;
        }
        return searchId;
    } catch (error) {
        return undefined;
    }
};

export const save = (key: string, value: string) => {
    try {
        if (checkSessionStorageExists()) {
            sessionStorage.setItem(key, value);
        } else return undefined;
    } catch (error) {
        console.log('Could not set session storage');
    }
};

export const clear = () => {
    try {
        if (checkSessionStorageExists()) {
            sessionStorage.clear();
        }
    } catch (error) {
        console.log('Could not clear storage');
    }
};
