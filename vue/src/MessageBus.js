
export default {

    callbacks: [],
    register(callback) {
        this.callbacks.push(callback);
    },
    sendMessage({ type, payload }) {
        this.callbacks.forEach(callback => {
            callback({ type, payload });
        });
    }
}

